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

export function Footer() {
  return (
    <footer
      className="text-white py-16 px-4"
      style={{
        backgroundImage: `url(footer.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl mb-8 tracking-wide">
          Jayanta Debnath
        </h2>

        {/* Navigation Menu */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            <li>
              <a
                href="#home"
                className="text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-white/20 hover:bg-white/30 text-white transition-all duration-300 px-5 py-2 rounded-lg backdrop-blur-sm border border-white/20"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Copyright or additional info can go here if needed */}
        <div className="text-white/60 text-sm">
          © 2025 Jayanta Debnath. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
