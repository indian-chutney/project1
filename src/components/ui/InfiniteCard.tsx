import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface InfiniteScrollProps {
  items: React.ReactNode[];

  duration?: number;

  threshold?: number;
}

export default function InfiniteScroll({
  items,
  duration = 20,
  threshold = 0.25,
}: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [singleWidth, setSingleWidth] = useState(0);
  const [inView, setInView] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const total = trackRef.current.scrollWidth;
      const w = total / 2;
      setSingleWidth(w || 0);
      const cur = x.get();
      if (w > 0) {
        let normalized = cur;
        while (normalized <= -w) normalized += w;
        while (normalized > 0) normalized -= w;
        x.set(normalized);
      } else {
        x.set(0);
      }
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    if (trackRef.current) ro.observe(trackRef.current);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items, x]);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [threshold]);

  useEffect(() => {
    const startLoop = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      lastTsRef.current = null;

      const step = (ts: number) => {
        if (!runningRef.current) return;
        if (!lastTsRef.current) lastTsRef.current = ts;
        const dt = (ts - (lastTsRef.current || ts)) / 1000; // seconds
        lastTsRef.current = ts;

        if (singleWidth > 0) {
          const velocity = singleWidth / duration; // px per second
          let next = x.get() - velocity * dt;

          if (next <= -singleWidth) {
            next += singleWidth * Math.ceil(-next / singleWidth);
            while (next <= -singleWidth) next += singleWidth;
          }
          while (next > 0) next -= singleWidth;
          x.set(next);
        }

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const stopLoop = () => {
      runningRef.current = false;
      lastTsRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    if (singleWidth > 0 && inView && !isHover) {
      startLoop();
    } else {
      stopLoop();
    }

    return () => stopLoop();
  }, [singleWidth, inView, isHover, duration, x]);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      ref={containerRef}
      className="w-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex gap-6 w-max">
        {/* original set */}
        {items.map((item, i) => (
          <div key={`set1-${i}`} className="flex-shrink-0">
            {item}
          </div>
        ))}

        {/* duplicate set for seamless loop */}
        {items.map((item, i) => (
          <div key={`set2-${i}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
