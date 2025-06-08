// import {
//   ArrowDown,
//   Github,
//   Linkedin,
//   Mail,
//   Code,
//   Sparkles,
//   Phone,
//   FileDown,
// } from "lucide-react";
// import { Button } from "../components/ui/button";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="animate-fade-in">
//           <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-slide-in-right">
//             Hi, I'm{" "}
//             <span className="text-primary relative">
//               Khushi Shukla
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in animation-delay-1000"></div>
//             </span>
//           </h1>

//           <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-500">
//             Web Developer
//           </h2>

//           <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-1000">
//             🚀 Building cool, responsive web apps that work everywhere. <br />
//             Got an idea? Let’s bring it to life 💡{" "}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in animation-delay-1500">
//             <Button
//               size="lg"
//               className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               <a href="#contact">Hire Me for Your Project</a>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="text-lg px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
//             >
//               <a href="#projects">View My Work</a>
//             </Button>
//           </div>

//           <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-2000">
//             <a
//               href="https://github.com/khushi747"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
//             >
//               <Github className="h-8 w-8" />
//               <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
//             </a>
//             <a
//               href="https://linkedin.com/in/khushishukla23"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
//             >
//               <Linkedin className="h-8 w-8" />
//               <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
//             </a>
//             <a
//               href="mailto:khushishukla.work@gmail.com"
//               className="group relative text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
//             >
//               <Mail className="h-8 w-8" />

//               {/* Tooltip */}
//               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 select-text">
//                 khushishukla.work@gmail.com
//               </span>

//               <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
//             </a>

//             <a
//               href="../../public/Khushi_Shukla_Resume.pdf"
//               download
//               className="group relative text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
//             >
//               <FileDown className="h-8 w-8" />
//               <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
//             </a>
//           </div>

//           <div className="animate-bounce animation-delay-3000">
//             <a href="#about" className="group">
//               <ArrowDown className="h-8 w-8 text-primary mx-auto group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="animate-fade-in">
          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-slide-in-right leading-tight">
            Hi, I'm{" "}
            <span className="text-primary relative inline-block">
              Khushi Shukla
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in animation-delay-1000"></div>
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in animation-delay-500">
            Web Developer
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-1000">
            🚀 Building cool, responsive web apps that work everywhere.{" "}
            <br className="hidden sm:inline" />
            Got an idea? Let’s bring it to life 💡
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 sm:mb-14 animate-scale-in animation-delay-1500">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <a href="#callToAction">Let's Create Something Cool</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-6 mb-10 sm:mb-14 animate-fade-in animation-delay-2000">
            {[
              {
                href: "https://github.com/khushi747",
                Icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/khushishukla23",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:khushishukla.work@gmail.com",
                Icon: Mail,
                label: "Email",
                tooltip: "khushishukla.work@gmail.com",
              },
              {
                href: "../../public/Khushi_Shukla_Resume.pdf",
                Icon: FileDown,
                label: "Resume",
              },
            ].map(({ href, Icon, tooltip, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                {tooltip && (
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded bg-primary text-white px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {tooltip}
                  </span>
                )}
                <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            ))}
          </div>

          {/* Scroll Down Arrow */}
          <div className="animate-bounce animation-delay-3000">
            <a href="#about" className="group block">
              <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
