const expertiseData = [
  {
    title: "Graphic Designer",
    icon: "/sm (2).png",
    bg: "/card-bg.png", // replace with actual image path
    description:
      "As a skilled Graphic Designer with a strong foundation in visual communication, I specialize in creating compelling and impactful designs that elevate brand identity and engage audiences. With a keen eye for detail and a deep understanding of design principles, I bring concepts to life through a variety of mediums, including digital.",
  },
  {
    title: "UI/UX Design",
    icon: "/sm (3).png",
    bg: "/card-bg.png", // same or different bg per card
    description:
      "As a seasoned UI/UX Designer, I specialize in creating intuitive and visually compelling digital experiences that seamlessly blend functionality and aesthetics. I focus on user research, wireframing, prototyping, and user interface design, ensuring every project is user-centered and aligns with business objectives.",
  },
  {
    title: "Web Application Development",
    icon: "/sm (1).png",
    bg: "/card-bg.png",
    description:
      "As a Web Designer with extensive experience, I specialize in creating visually captivating and user-centric websites. My expertise lies in designing intuitive interfaces that prioritize both aesthetics and functionality. I am skilled in translating complex requirements into seamless digital experiences, ensuring consistency across devices.",
  },
];

const Maincard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl w-full">
      {expertiseData.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl p-6 space-y-3.5 text-left backdrop-blur-xl transition-transform hover:scale-105 duration-300 border-l-2 border-r-2 border-[#6E76FB]"
          style={{
            backgroundImage: `url(card-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="md:w-10 w-6 md:h-10 h-6"
          />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-white/90">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Maincard;
