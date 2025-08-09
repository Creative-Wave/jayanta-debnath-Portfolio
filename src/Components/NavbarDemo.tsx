"use client";

import { useState, useEffect } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavItems,
} from "./ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#Hero" },
    { name: "About", link: "#about" },
    { name: "Project", link: "#projects" },
    { name: "Hire Me", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const socialIcons = [
    {
      src: "social-icon (1).png",
      alt: "Social Icon 1",
      link: "https://www.behance.net/jayantadebnath10",
    },
    {
      src: "social-icon (2).png",
      alt: "Social Icon 2",
      link: "https://dribbble.com/J_Debnath1",
    },
    {
      src: "social-icon (3).png",
      alt: "Social Icon 3",
      link: "https://www.figma.com/design/Cn91TKE6FnFxTKEwj5mNLT/myportfoliodesign?m=auto&t=SCV0BBwFryuSTvrR-1",
    },
  ];

  return (
    <div className="absolute w-full flex justify-center items-center md:px-0 px-5 mt-5">
      <Navbar className="max-w-6xl bg-black/25 border-2 border-white/15 flex justify-between items-center rounded-full px-6 py-3 backdrop-blur-2xl">
        {/* Desktop Navigation */}
        <NavBody>
          <div className="text-white font-black text-xl">Jayanta Debnath</div>
          <NavItems items={navItems} />
          <div className="hidden md:flex justify-center items-center gap-4 relative z-50">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="text-white font-black text-lg">Jayanta Debnath</div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col justify-between items-start gap-7 py-6 px-4 h-full">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-lg py-2 rounded hover:bg-white/10 transition"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex justify-start items-center gap-4 mt-5">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
