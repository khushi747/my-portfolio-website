// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { Github, ArrowRight } from "lucide-react";
// import { redirect } from "react-router-dom";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "../components/ui/dialog";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Wanderlust - Hotel Booking Platform",
//       description:
//         "Full-stack hotel review and booking web application with admin panel for property management and user authentication system.",
//       image: "../../public/wanderlust_project.png",
//       technologies: [
//         "HTML5",
//         "CSS3",
//         "EJS",
//         "JavaScript",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Passport.js",
//       ],
//       features: [
//         "User authentication and authorization system",
//         "Admin panel for hotel listing management",
//         "Review and rating system for travelers",
//         "Responsive design for all devices",
//         "MongoDB Atlas cloud database integration",
//         "Deployed on Railway with full CI/CD",
//       ],
//       githubUrl: "https://github.com/khushi747/Wanderlust",
//       liveUrl: "https://wanderlust-production-2600.up.railway.app/listings",
//       category: "Full-Stack MERN",
//     },
//     {
//       title: "Real-Time Display Configuration System",
//       description:
//         "Professional web application for remotely configuring large-format display screens with QR-based authentication and real-time messaging.",
//       image:
//         "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
//       technologies: [
//         "Angular 19",
//         ".NET",
//         "RabbitMQ",
//         "SQL Server",
//         "PrimeNG",
//         "QR Integration",
//       ],
//       features: [
//         "QR-based remote login workflow",
//         "Real-time communication with RabbitMQ",
//         "Developed a responsive web application to remotely configure real-time settings for large-format display screens, showcasing dynamic exhibition schedules, live ticket availability, booking trends, and pricing insights.",
//         "Engineered QR-based remote login workflow to eliminate on-site intervention, allowing secure device configuration and dynamic device ID linking.",
//         "Integrated RabbitMQ for real-time communication between admin portals and remote display devices, enabling instant updates and reliable message delivery.",
//         "Built RESTful APIs in .NET and managed SQL database for users, device mapping, and settings.",
//         "Built a dynamic, session-aware admin interface using Angular 19 and PrimeNG for QR upload, screen management, and seamless editing of previous settings and applying them using RabbitMQ.",
//       ],
//       githubUrl: "#",
//       liveUrl: "#",
//       category: "Enterprise Angular/.NET",
//     },
//     {
//       title: "Power BI Dashboard for Budget Analysis",
//       description:
//         "Automated data visualization dashboard for budget analysis and organizational insights with advanced data modeling.",
//       image:
//         "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
//       technologies: [
//         "Power BI",
//         "Data Analysis",
//         "Query Editor",
//         "Data Modeling",
//       ],
//       features: [
//         "Automated budget data analysis (2023-2027)",
//         "Interactive visualizations and reports",
//         "Data preparation and modeling",
//         "Organizational insights dashboard",
//         "Efficient data processing workflows",
//       ],
//       githubUrl: "#",
//       liveUrl: "#",
//       category: "Data Analytics",
//     },
//   ];

//   return (
//     <section id="projects" className="py-10 bg-secondary/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             My Work
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Real-world applications showcasing full-stack development expertise
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <Badge
//                     variant="secondary"
//                     className="bg-background/80 backdrop-blur-sm"
//                   >
//                     {project.category}
//                   </Badge>
//                 </div>
//               </div>

//               <CardHeader>
//                 <CardTitle className="text-xl">{project.title}</CardTitle>
//                 <CardDescription>{project.description}</CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
//                   <ul className="space-y-1">
//                     {project.features.slice(0, 2).map((feature, i) => (
//                       <li
//                         key={i}
//                         className="text-sm text-muted-foreground flex items-start gap-2"
//                       >
//                         <span className="text-primary mt-0.5">•</span>
//                         {feature}
//                       </li>
//                     ))}
//                     {project.features.length > 2 && (
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <li className="text-sm text-blue-700 hover:underline cursor-pointer">
//                             + {project.features.length - 2} more features
//                           </li>
//                         </DialogTrigger>
//                         <DialogContent>
//                           <DialogHeader>
//                             <DialogTitle>{project.title}</DialogTitle>
//                           </DialogHeader>
//                           <p>{project.description}</p>
//                           <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
//                             {project.features.map((extraFeature, idx) => (
//                               <li key={idx}>{extraFeature}</li>
//                             ))}
//                           </ul>
//                         </DialogContent>
//                       </Dialog>
//                     )}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
//                   <div className="flex flex-wrap gap-1">
//                     {project.technologies.map((tech, i) => (
//                       <Badge key={i} variant="outline" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex gap-2 pt-4">
//                   {project.githubUrl !== "#" && (
//                     <Button variant="outline" size="sm" asChild>
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github className="h-4 w-4 mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                   )}
//                   {(project.liveUrl !== "#" && (
//                     <Button
//                       onClick={() => window.open(project.liveUrl, "_blank")}
//                       size="sm"
//                       className="flex-1"
//                     >
//                       Explore Website
//                       <ArrowRight className="h-4 w-4 ml-2" />
//                     </Button>
//                   )) || (
//                     <a  className="flex-1">
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button size="sm" className="w-full flex-1">
//                             View Details
//                             <ArrowRight className="h-4   ml-2" />
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent>
//                           <DialogHeader>
//                             <DialogTitle>{project.title}</DialogTitle>
//                           </DialogHeader>
//                           <p>{project.description}</p>
//                           <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
//                             {project.features.map((extraFeature, idx) => (
//                               <li key={idx}>{extraFeature}</li>
//                             ))}
//                           </ul>
//                         </DialogContent>
//                       </Dialog>
//                     </a>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      title: "Wanderlust - Hotel Booking Platform",
      description:
        "Full-stack hotel review and booking web application with admin panel for property management and user authentication system.",
      image: "../../public/wanderlust_project.png",
      technologies: [
        "HTML5",
        "CSS3",
        "EJS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js",
      ],
      features: [
        "User authentication and authorization system",
        "Admin panel for hotel listing management",
        "Review and rating system for travelers",
        "Responsive design for all devices",
        "MongoDB Atlas cloud database integration",
        "Deployed on Railway with full CI/CD",
      ],
      githubUrl: "https://github.com/khushi747/Wanderlust",
      liveUrl: "https://wanderlust-production-2600.up.railway.app/listings",
      category: "Full-Stack MERN",
    },
    {
      title: "Real-Time Display Configuration System",
      description:
        "Professional web application for remotely configuring large-format display screens with QR-based authentication and real-time messaging.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: [
        "Angular 19",
        ".NET",
        "RabbitMQ",
        "SQL Server",
        "PrimeNG",
        "QR Integration",
      ],
      features: [
        "QR-based remote login workflow",
        "Real-time communication with RabbitMQ",
        "Developed a responsive web application to remotely configure real-time settings for large-format display screens, showcasing dynamic exhibition schedules, live ticket availability, booking trends, and pricing insights.",
        "Engineered QR-based remote login workflow to eliminate on-site intervention, allowing secure device configuration and dynamic device ID linking.",
        "Integrated RabbitMQ for real-time communication between admin portals and remote display devices, enabling instant updates and reliable message delivery.",
        "Built RESTful APIs in .NET and managed SQL database for users, device mapping, and settings.",
        "Built a dynamic, session-aware admin interface using Angular 19 and PrimeNG for QR upload, screen management, and seamless editing of previous settings and applying them using RabbitMQ.",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Enterprise Angular/.NET",
    },
    {
      title: "Power BI Dashboard for Budget Analysis",
      description:
        "Automated data visualization dashboard for budget analysis and organizational insights with advanced data modeling.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: [
        "Power BI",
        "Data Analysis",
        "Query Editor",
        "Data Modeling",
      ],
      features: [
        "Automated budget data analysis (2023-2027)",
        "Interactive visualizations and reports",
        "Data preparation and modeling",
        "Organizational insights dashboard",
        "Efficient data processing workflows",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Data Analytics",
    },
  ];

  return (
    <section id="projects" className="py-10 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications showcasing full-stack development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image + Category */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Title + Description */}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              {/* Features + Tech Stack + Actions */}
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <li className="text-sm text-blue-700 hover:underline cursor-pointer">
                            + {project.features.length - 2} more features
                          </li>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                          </DialogHeader>
                          <p>{project.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {project.features.map((extraFeature, idx) => (
                              <li key={idx}>{extraFeature}</li>
                            ))}
                          </ul>
                        </DialogContent>
                      </Dialog>
                    )}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  {project.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl !== "#" ? (
                    <Button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      size="sm"
                      className="flex-1"
                    >
                      Explore Website
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="flex-1">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <p>{project.description}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                          {project.features.map((extraFeature, idx) => (
                            <li key={idx}>{extraFeature}</li>
                          ))}
                        </ul>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
