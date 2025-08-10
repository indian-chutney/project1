import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import Logo from "@/components/ui/Logo";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Footer className="bg-[#0b1d33] text-white mt-auto">
      <FooterContent className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-15">
        {/* Logo & tagline */}
        <FooterColumn>
          <Logo size="medium" />
          <p className="text-sm text-gray-300">
            Making utility bill payments fast, easy, and secure.
          </p>
        </FooterColumn>

        {/* Navigation */}
        <FooterColumn>
          <h3 className="font-semibold text-lg">Navigation</h3>
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="link"
              className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </Button>
          ))}
        </FooterColumn>

        {/* Contact */}
        <FooterColumn>
          <h3 className="font-semibold text-lg">Contact</h3>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            <Mail size={16} /> info@bharatpaye.com{" "}
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            <Phone size={16} /> +91 93986 19837{" "}
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            <MapPin size={16} /> Hyderabad, India
          </Button>
        </FooterColumn>

        {/* Legal */}
        <FooterColumn>
          <h3 className="font-semibold text-lg">Legal</h3>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            Privacy Policy
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
          >
            Refund and Cancellation Policy
          </Button>
        </FooterColumn>
      </FooterContent>

      <FooterBottom className="w-full border-t border-blue-800 py-4 mt-8">
        <p className="text-gray-400 text-center text-sm ml-10">
          ©Bharat Paye. All rights reserved. 2024
        </p>
      </FooterBottom>
    </Footer>
  );
}
