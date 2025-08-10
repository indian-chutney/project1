import { useEffect, useRef, useState } from "react";

const Counter = ({
  end,
  duration,
  trigger,
}: {
  end: number;
  duration: number;
  trigger: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 }, // Start when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-2 w-auto md:w-full md:grid-cols-4 gap-8 py-7 px-6 sm:px-10 md:px-20 bg-blue-900 text-white text-center"
    >
      <div>
        <p className="text-4xl font-bold text-orange-400">
          <Counter end={1} duration={1000} trigger={inView} />
        </p>
        <p className="mt-2 text-lg">Years Helping Business</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-orange-400">
          <Counter end={16} duration={1000} trigger={inView} />
        </p>
        <p className="mt-2 text-lg">Employees</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-orange-400">
          <Counter end={500} duration={1500} trigger={inView} />
        </p>
        <p className="mt-2 text-lg">Complete Projects</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-orange-400">
          <Counter end={1500} duration={1500} trigger={inView} />
        </p>
        <p className="mt-2 text-lg">5 Star Ratings</p>
      </div>
    </section>
  );
};

export default StatsSection;
