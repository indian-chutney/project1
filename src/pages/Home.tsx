import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-6 sm:px-10 md:px-20 pt-[200px] md:pt-0">
      <div className="flex flex-col items-start text-left max-w-xl md:w-1/2">
        <Logo size="medium" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 tracking-tight mt-4">
          Innovative Solutions for Your Needs.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-blue-900 leading-relaxed mt-4">
          We are helping Indian consumers to pay their utility bills fast,easy
          and secure.{" "}
        </p>

        <Button
          variant="default"
          className="mt-4 h-10 px-4 text-md bg-orange-500 hover:bg-orange-600 text-white"
        >
          Get Started
        </Button>
      </div>

      <div className="hidden md:block mt-8 md:mt-0 md:ml-10 flex-shrink-0 w-full md:w-1/2">
        <video
          src="https://bharatpaye.tech/wp-content/uploads/2024/08/WhatsApp-Video-2024-08-29-at-3.57.23-PM.mp4"
          className="w-full rounded-xl shadow-lg border-4 border-blue-500"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default Home;
