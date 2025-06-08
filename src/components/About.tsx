// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Award,
//   Briefcase,
//   GraduationCap,
//   Laptop,
//   Star,
//   TrendingUp,
//   Users,
// } from "lucide-react";
// ("use client");
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "@/components/ui/dialog";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-10 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
//     >
//       {/* Background Decoration */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16 animate-fade-in">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
//             <Star className="h-4 w-4" />
//             About Me
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Final Year CSE Student with <span className="text-primary">9+ Months</span> Experience
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Combining academic excellence with real-world development experience
//           </p>
//         </div>
//         <div className="grid grid-cols-1 place-items-center gap-6 ">
//           <Card className="w-1/3 group hover:shadow-xl     transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-primary animate-slide-in-right">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <div className="p-2 bg-primary/10 rounded-lg">
//                     <Laptop  className="h-6 w-6 text-primary" />
//                   </div>
//                   Experience
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <h3 className="font-semibold text-lg">Software Developer Intern</h3>
//                 <p className="text-muted-foreground">Gantner India</p>
//                 <div className="flex flex-col gap-2">
//                   <Badge variant="secondary" className="w-fit">January 2025 - June 2025</Badge>
//                   <div className="flex items-center gap-2 flex-wrap">
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       Angular
//                     </Badge>
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       .NET
//                     </Badge>
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       MySQL
//                     </Badge>
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       RabbitMQ
//                     </Badge>
//                   </div>
//                   <p className="text-muted-foreground">📍 Ahmedabad, Gujarat</p>
//                 </div>
//               </CardContent>
//           </Card>
//           <Card className="w-1/3 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-primary animate-slide-in-right">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <div className="p-2 bg-primary/10 rounded-lg">
//                     <Laptop  className="h-6 w-6 text-primary" />
//                   </div>
//                   Experience
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <h3 className="font-semibold text-lg">PowerBI Intern</h3>
//                 <p className="text-muted-foreground">Adani Mundra Petrochemicals Ltd.</p>
//                 <div className="flex flex-col gap-2">
//                   <Badge variant="secondary" className="w-fit">April 2024 – June 2024</Badge>
//                   <div className="flex items-center gap-2 flex-wrap">
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       PowerBI
//                     </Badge>
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       Data Analysis
//                     </Badge>
//                     <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                       Excel
//                     </Badge>
//                   </div>
//                   <p className="text-muted-foreground">📍 Ahmedabad, Gujarat</p>
//                 </div>
//               </CardContent>
//           </Card>
//           <Card className="w-1/3 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-primary animate-slide-in-right">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <div className="p-2 bg-primary/10 rounded-lg">
//                     <GraduationCap className="h-6 w-6 text-primary" />
//                   </div>
//                   Education
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <h3 className="font-semibold text-lg">B.E. Computer Science Engineering</h3>
//                 <p className="text-muted-foreground">Adani Institute of Infrastructure Engineering</p>
//                 <div className="flex items-center gap-2">
//                   <Badge variant="secondary">2021 – 2025</Badge>
//                   <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                     CGPA: 8.9/10
//                   </Badge>
//                 </div>
//                 <p className="text-muted-foreground">📍 Ahmedabad, Gujarat</p>
//               </CardContent>
//           </Card>
//         </div>
//       </div> */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16 animate-fade-in">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
//             <Star className="h-4 w-4" />
//             About Me
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Final Year CSE Student with{" "}
//             <span className="text-primary">9+ Months</span> Experience
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Combining academic excellence with real-world development experience
//           </p>
//         </div>

//         <div className="relative ml-[15%]">
//           <div className="absolute mt-[18%] left-8 top-0 bottom-24 w-0.5 bg-primary/30"></div>
//           <div className="space-y-12">
//             {/* Experience 1 */}
//             <div className="relative ">
//               <div className="absolute  mt-[18%] left-6  w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
//               <div className="w-2/3 ml-20">
//                 <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-primary animate-slide-in-right">
//                   <CardHeader>
//                     <CardTitle className="py-0 my-0  flex items-center gap-3">
//                       <div className="p-2 bg-primary/10 rounded-lg">
//                         <Laptop className="h-6 w-6 text-primary" />
//                       </div>
//                       Experience
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-1">
//                     <h3 className="font-semibold text-xl">
//                       Software Developer Intern
//                     </h3>
//                     <p className="text-muted-foreground font-medium">
//                       Gantner India
//                     </p>
//                     <div className="space-y-1">
//                       <Badge variant="secondary" className="w-fit">
//                         January 2025 - June 2025
//                       </Badge>
//                       <div className="flex flex-wrap gap-2">
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           Angular
//                         </Badge>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           .NET
//                         </Badge>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           MySQL
//                         </Badge>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           RabbitMQ
//                         </Badge>
//                       </div>
//                     </div>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <p className="text-blue-700 cursor-pointer hover:underline">
//                           Read more ...
//                         </p>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>
//                             <div className="flex align-center  gap-2">
//                               <Laptop className="h-6 w-6 text-primary" />
//                               <p className="flex self-center">
//                                 Software Developer Intern{" "}
//                               </p>
//                             </div>
//                           </DialogTitle>
//                           <p>Gantner India | Ahmedabad</p>
//                           <p>January 2025 - June 2025</p>
//                         </DialogHeader>
//                         <div className="flex flex-wrap gap-2">
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             Angular
//                           </Badge>
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             .NET
//                           </Badge>
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             MySQL
//                           </Badge>
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             RabbitMQ
//                           </Badge>
//                         </div>
//                         <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
//                           <li>
//                             Built a responsive admin panel using Angular 19 and
//                             PrimeNG.
//                           </li>
//                           <li>
//                             Developed .NET APIs for QR-based screen management
//                             and login systems.
//                           </li>
//                           <li>
//                             Integrated RabbitMQ with MassTransit for real-time
//                             order tracking.
//                           </li>
//                           <li>
//                             Collaborated with SQL DB to manage orders, screens,
//                             and chef dashboards.
//                           </li>
//                         </ul>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Experience 2 */}
//             <div className="relative">
//               <div className="absolute  mt-[18%] left-6  w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
//               <div className="w-2/3 ml-20">
//                 <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-primary animate-slide-in-right">
//                   <CardHeader>
//                     <CardTitle className="py-0 my-0 flex items-center gap-3">
//                       <div className="p-2 bg-primary/10 rounded-lg">
//                         <Laptop className="h-6 w-6 text-primary" />
//                       </div>
//                       Experience
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-1">
//                     <h3 className="font-semibold text-xl">PowerBI Intern</h3>
//                     <p className="text-muted-foreground font-medium">
//                       Adani Mundra Petrochemicals Ltd.
//                     </p>
//                     <div className="space-y-1">
//                       <Badge variant="secondary" className="w-fit">
//                         April 2024 – June 2024
//                       </Badge>
//                       <div className="flex flex-wrap gap-2">
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           PowerBI
//                         </Badge>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           Data Analysis
//                         </Badge>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-50 text-green-700 border-green-200"
//                         >
//                           Excel
//                         </Badge>
//                       </div>
//                     </div>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <p className="text-blue-700 cursor-pointer hover:underline">
//                           Read more ...
//                         </p>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>
//                             <div className="flex align-center  gap-2">
//                               <Laptop className="h-6 w-6 text-primary" />
//                               <p className="flex self-center">
//                                 PowerBI Intern{" "}
//                               </p>
//                             </div>
//                           </DialogTitle>
//                           <p>Adani Mundra Petrochemicals Ltd. | Ahmedabad</p>
//                           <p>April 2024 – June 2024</p>
//                         </DialogHeader>
//                         <div className="flex flex-wrap gap-2">
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             PowerBI
//                           </Badge>

//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             Data Analysis
//                           </Badge>
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             Excel
//                           </Badge>
//                         </div>
//                         <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
//                           <li>
//                             Developed an automated Power BI dashboard to analyze
//                             and visualize Mundra Petrochemicals-IT budget data
//                             (2023–2027), streamlining insights and updates.
//                           </li>
//                           <li>
//                             Executed data preparation and modeling using Power
//                             BI Query Editor, ensuring efficient processing,
//                             clarity, and alignment with organizational
//                             objectives.
//                           </li>
//                         </ul>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Education */}
//             <div className="relative">
//               <div className="absolute mt-[15%] left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
//               <div className="w-2/3 ml-20">
//                 <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-primary animate-slide-in-right">
//                   <CardHeader>
//                     <CardTitle className="py-0 my-0 flex items-center gap-3">
//                       <div className="p-1 bg-primary/10 rounded-lg">
//                         <GraduationCap className="h-6 w-6 text-primary" />
//                       </div>
//                       Education
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-1">
//                     <h3 className="font-semibold text-xl">
//                       B.E. Computer Science Engineering
//                     </h3>
//                     <p className="text-muted-foreground font-medium">
//                       Adani Institute of Infrastructure Engineering
//                     </p>
//                     <div className="flex flex-wrap gap-2 items-center">
//                       <Badge variant="secondary">2021 – 2025</Badge>
//                     </div>

//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <p className="text-blue-700 cursor-pointer hover:underline">
//                           Read more ...
//                         </p>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>
//                             <div className="flex align-center  gap-2">
//                               <Laptop className="h-6 w-6 text-primary" />
//                               <p className="flex self-center">
//                                 B.E in Computer Science Engineering
//                               </p>
//                             </div>
//                           </DialogTitle>
//                           <p>
//                             Adani Institute of Infrastructure Engineering |
//                             Ahmedabad
//                           </p>
//                           <p>Aug 2021 – June 2025</p>
//                         </DialogHeader>
//                         <div className="flex flex-wrap gap-2">
//                           <Badge
//                             variant="outline"
//                             className="bg-green-50 text-green-700 border-green-200"
//                           >
//                             CGPA - 8.9/10
//                           </Badge>
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Laptop, GraduationCap, Star } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Final Year CSE Student with{" "}
            <span className="text-primary">9+ Months</span> Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining academic excellence with real-world development experience
          </p>
        </div>

        <div className="relative sm:ml-[10%]">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block"></div>
          <div className="space-y-12">
            {/* Timeline Card Item (Reusable Block) */}
            {[
              {
                title: "Software Developer Intern",
                company: "Gantner India",
                location: "Ahmedabad, Gujarat",
                date: "January 2025 - June 2025",
                icon: <Laptop className="h-6 w-6 text-primary" />,
                tags: ["Angular", ".NET", "MySQL", "RabbitMQ"],
                details: [
                  "Built a responsive admin panel using Angular 19 and PrimeNG.",
                  "Developed .NET APIs for QR-based screen management and login systems.",
                  "Integrated RabbitMQ with MassTransit for real-time order tracking.",
                  "Collaborated with SQL DB to manage orders, screens, and chef dashboards.",
                ],
              },
              {
                title: "PowerBI Intern",
                company: "Adani Mundra Petrochemicals Ltd.",
                location: "Ahmedabad, Gujarat",
                date: "April 2024 – June 2024",
                icon: <Laptop className="h-6 w-6 text-primary" />,
                tags: ["PowerBI", "Data Analysis", "Excel"],
                details: [
                  "Developed automated Power BI dashboard to analyze and visualize budget data.",
                  "Used Power BI Query Editor for efficient processing aligned with business goals.",
                ],
              },
              {
                title: "B.E. Computer Science Engineering",
                company: "Adani Institute of Infrastructure Engineering",
                location: "Ahmedabad, Gujarat",
                date: "2021 – 2025",
                icon: <GraduationCap className="h-6 w-6 text-primary" />,
                tags: ["CGPA - 8.9/10"],
                details: [],
              },
            ].map((item, i) => (
              <div className="relative" key={i}>
                <div className="absolute left-2 sm:left-6 top-3 sm:top-[15%] w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                <div className="ml-8 sm:ml-20 w-[90%] sm:w-4/5">
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-primary animate-slide-in-right">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {item.icon}
                        </div>
                        {i === 2 ? "Education" : "Experience"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                      <p className="text-muted-foreground font-medium">
                        {item.company}
                      </p>
                      <div className="space-y-1">
                        <Badge variant="secondary">{item.date}</Badge>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {item.details.length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <p className="text-blue-700 cursor-pointer hover:underline">
                              Read more ...
                            </p>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div className="flex items-center gap-2">
                                  {item.icon}
                                  <p className="self-center">{item.title}</p>
                                </div>
                              </DialogTitle>
                              <p>
                                {item.company} | {item.location}
                              </p>
                              <p>{item.date}</p>
                            </DialogHeader>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                              {item.details.map((point, idy) => (
                                <li key={idy}>{point}</li>
                              ))}
                            </ul>
                          </DialogContent>
                        </Dialog>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
