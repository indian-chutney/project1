import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface InfiniteScrollProps {
  items: React.ReactNode[];
  speed?: number;
}

export default function InfiniteScroll({
  items,
  speed = 20,
}: InfiniteScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (trackRef.current) {
      // Get the width of just the first set of items
      const firstChild = trackRef.current.firstElementChild;
      if (firstChild) {
        const itemWidth = firstChild.getBoundingClientRect().width;
        const gap = 24; // 6 * 4px (gap-6 in Tailwind)
        const singleSetWidth = (itemWidth + gap) * items.length;
        setWidth(singleSetWidth);
      }
    }
  }, [items]);

  useEffect(() => {
    if (width > 0) {
      startInfiniteAnimation();
    }
  }, [width, speed]);

  const startInfiniteAnimation = () => {
    const currentX = x.get();

    // Reset position if we've completed a full cycle
    if (currentX <= -width) {
      x.set(0);
    }

    const startX = x.get();

    controls.start({
      x: [startX, -width],
      transition: {
        duration: speed * ((width + startX) / width),
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    startInfiniteAnimation();
  };

  return (
    <div className="w-screen overflow-hidden">
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex gap-6 w-max"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original set */}
        {items.map((item, i) => (
          <div key={`set1-${i}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, i) => (
          <div key={`set2-${i}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
