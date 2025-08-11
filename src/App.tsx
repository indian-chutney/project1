import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import StatsSection from "./components/ui/StatsSection";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Footer from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar1 />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="flex items-center justify-center">
                  <Home />
                </section>
                <section
                  id="benefits"
                  className="flex items-center justify-center"
                >
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
                  id="stats"
                  className="flex w-screen items-center justify-center"
                >
                  <StatsSection />
                </section>
              </>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
