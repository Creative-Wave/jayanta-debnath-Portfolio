import About from "@/Components/About";
import Contact from "@/Components/Contact";
import ExpertiseSection from "@/Components/ExpertiseSection";
import { Footer } from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { Particles } from "@/Components/magicui/particles";
import Myexperience from "@/Components/Myexperience";
import { NavbarDemo } from "@/Components/NavbarDemo";
import Skillset from "@/Components/Skillset";
import Tabbar from "@/Components/Tabbar";

const page = () => {
  return (
    <>
      <NavbarDemo />
      <section className="" id="hero">
        <Hero />
        {/* Fullscreen Particles Background */}
        <div className="absolute top-0 left-0 inset-0 overflow-x-hidden -z-10">
          <Particles className="h-full w-full" />
        </div>
      </section>
      <section className="" id="about">
        <About />
      </section>
      <ExpertiseSection />
      <Myexperience />
      <Skillset />
      <section className="overflow-hidden " id="projects">
        <Tabbar />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default page;
