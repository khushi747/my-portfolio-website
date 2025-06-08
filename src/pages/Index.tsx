import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Projects />
      <CallToAction />
    </div>
  );
};

export default Index;
