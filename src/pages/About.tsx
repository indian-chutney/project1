import Logo from "@/components/ui/Logo";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-4 sm:px-8 md:px-20 pt-24 md:pt-0 gap-10">
      {/* Left Column: Logo */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl md:w-2/5">
        <Logo size="large" />
      </div>

      {/* Right Column: Text */}
      <div className="flex flex-col justify-center w-full md:w-3/5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 tracking-tight mb-4">
          Who We Are?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-blue-900 leading-relaxed mb-4">
          We are a team dedicated to making utility bill payments fast, easy,
          and secure for Indian consumers. Our platform is built to save you
          time and effort, so you can focus on what matters most.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-blue-900 leading-relaxed">
          From electricity and water to mobile recharges and ticket bookings, we
          aim to simplify your life with our innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
