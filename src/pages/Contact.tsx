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

          {/* Email */}
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
            onClick={() => {
              window.location.href = "mailto:info@bharatpaye.com";
            }}
          >
            <Mail size={16} /> info@bharatpaye.com
          </Button>

          {/* Phone */}
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
            onClick={() => {
              window.location.href = "tel:+919398619837";
            }}
          >
            <Phone size={16} /> +91 93986 19837
          </Button>

          {/* Address */}
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
            onClick={() => {
              window.open(
                "https://maps.app.goo.gl/bCRKwcYGDsvgscPC6?g_st=aw",
                "_blank",
                "noopener,noreferrer",
              );
            }}
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
            onClick={() => {
              window.open("/privacy-policy", "_blank", "noopener,noreferrer");
            }}
          >
            Privacy Policy
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
            onClick={() => {
              window.open(
                "/terms-and-conditions",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            className="text-gray-300 hover:text-orange-500 p-0 h-auto justify-start"
            onClick={() => {
              window.open("/refund-policy", "_blank", "noopener,noreferrer");
            }}
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
