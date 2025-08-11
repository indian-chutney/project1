import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./ui/Logo";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  authLinks?: {
    login: { text: string; href: string };
    register: { text: string; href: string };
  };
  className?: string;
}

const Navbar1 = ({
  logo = <Logo size="small" />,
  navLinks = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "contact" },
  ],
  authLinks = {
    login: { text: "Login", href: "#" },
    register: { text: "Register", href: "#" },
  },
  className = "",
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
    fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 px-6
    ${
      isScrolled
        ? "bg-opacity-30 backdrop-blur-lg shadow-lg py-2 dark:border-b"
        : "py-3"
    }
    ${className}
  `}
    >
      <div className="flex justify-center items-center gap-2">{logo}</div>

      {/* Navigation Links */}
      <div className="flex opacity-85 items-center text-sm text-muted-foreground space-x-8">
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Button
              variant="link"
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-[15px]"
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Auth Links */}

      <div className="flex items-center space-x-4">
        {/* Register Button - outline with orange border/text */}
        <Button
          className="h-10 px-4 text-md border-orange-500 text-orange-500 hover:bg-orange-50"
          variant="outline"
          onClick={() => {
            window.open("/signup", "_blank", "noopener,noreferrer");
          }}
        >
          {authLinks.register.text}
        </Button>

        {/* Login Button - solid orange */}
        <Button
          onClick={() => {
            window.open(
              "https://admin.bharatpaye.com/",
              "_blank",
              "noopener,noreferrer",
            );
          }}
          className="h-10 px-4 text-md bg-orange-500 hover:bg-orange-600 text-white"
        >
          {authLinks.login.text}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar1;
