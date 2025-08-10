import "./App.css";
import Navbar1 from "./components/Navbar";
import StatsSection from "./components/ui/StatsSection";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Footer from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar1 />
        <section id="home" className="flex items-center justify-center">
          <Home />
        </section>
        <section id="benefits" className="flex items-center justify-center">
          <Benefits />
        </section>

        <section
          id="services"
          className="flex w-screen h-screen items-center justify-center"
        >
          <Services />
        </section>

        <section
          id="about"
          className="flex w-screen h-[60vh] items-center justify-center mb-10"
        >
          <About />
        </section>
        <section
          id="stas"
          className="fixed flex w-screen items-center justify-center"
        >
          <StatsSection />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
