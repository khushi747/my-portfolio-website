// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "../components/ui/dialog";
// import { ArrowRight, Rocket } from "lucide-react";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Textarea } from "../components/ui/textarea";
// import { useState } from "react";
// import emailjs from "emailjs-com";

// const CallToAction = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     business: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
//     const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
//     const TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;

//     // Send confirmation email to user
//     emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, formData, USER_ID).then(
//       (result) => {
//         console.log("User confirmation email sent", result.text);
//       },
//       (error) => {
//         console.error("Admin email error:", error.text);
//       }
//     );

//     // Send notification email to admin (you)
//     const adminFormData = {
//       ...formData,
//     };
//     emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, adminFormData, USER_ID).then(
//       (result) => {
//         alert("Message sent! I'll get back to you soon.");
//         setFormData({
//           name: "",
//           email: "",
//           contact: "",
//           business: "",
//           description: "",
//         });
//       },
//       (error) => {
//         alert("Oops, something went wrong. Please try again.");
//         console.error("User email error:", error.text);
//       }
//     );
//   };

//   return (
//     <div className="my-20 text-center animate-fade-in">
//       <Card className="max-w-5xl mx-auto bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300">
//         {/* HEADER */}
//         <CardHeader>
//           <CardTitle className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
//             <Rocket className="h-6 w-6 text-primary animate-bounce" />
//             Let’s Build Something Great Together
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-8">
//           {/* INTRO */}
//           <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
//             I craft responsive, modern websites and full-stack apps using MERN,
//             Angular, and .NET. <br />
//             From concept to deployment — I handle it all with clean code and
//             solid UX.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center">
//             {[
//               { icon: "🚀", text: "Full-Stack Development" },
//               { icon: "🔌", text: "API Integration" },
//               { icon: "📱", text: "Responsive Design" },
//               { icon: "🗄️", text: "Database Design" },
//             ].map((item, index) => (
//               <Badge
//                 key={index}
//                 variant="secondary"
//                 className="text-sm px-4 py-2 w-full flex justify-center items-center gap-2"
//               >
//                 <span>{item.icon}</span>
//                 {item.text}
//               </Badge>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <div className="text-2xl font-bold text-primary">100%</div>
//               <div className="text-sm text-muted-foreground">
//                 Project Completion Rate
//               </div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-primary">9+ months</div>
//               <div className="text-sm text-muted-foreground">
//                 Hands-on Experience
//               </div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-primary">24/7</div>
//               <div className="text-sm text-muted-foreground">
//                 Support & Collaboration
//               </div>
//             </div>
//           </div>

//           {/* WHY CHOOSE ME */}
//           <div className="text-left border border-border rounded-xl p-6 bg-muted/10">
//             <h4 className="text-lg font-semibold mb-4 grid place-items-center">
//               ⚡ Why Work With Me?
//             </h4>
//             <div className="flex justify-center">
//               <ul className="space-y-3">
//                 {[
//                   "Quick turnaround time (2–4 weeks for most projects)",
//                   "Currently employed — consistent and dependable",
//                   "Uses modern tech stack and coding best practices",
//                   "Budget-friendly for students & startups",
//                   "Post-delivery support & maintenance",
//                 ].map((point, i) => (
//                   <li key={i} className="flex items-start gap-2 text-sm">
//                     <Badge variant="secondary" className="w-fit">
//                       ✅
//                     </Badge>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <p className="text-sm text-muted-foreground max-w-xl mx-auto">
//               Got an idea or biz that needs a glow-up online? Let’s turn it into
//               a real website 💻✨
//             </p>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button size="lg" className="mx-auto">
//                   <span className="flex items-center gap-2">
//                     Send Project Details <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </Button>
//               </DialogTrigger>

//               <DialogContent className="max-w-lg">
//                 <DialogHeader>
//                   <DialogTitle>Let’s build something amazing!</DialogTitle>
//                 </DialogHeader>

//                 <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
//                   <Input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   <Input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <Input
//                     type="tel"
//                     name="contact"
//                     placeholder="Your Contact Number"
//                     required
//                     value={formData.contact}
//                     onChange={handleChange}
//                   />
//                   <Input
//                     type="text"
//                     name="business"
//                     placeholder="Business / Startup Name"
//                     value={formData.business}
//                     onChange={handleChange}
//                   />
//                   <Textarea
//                     name="description"
//                     placeholder="Brief description of your project"
//                     rows={4}
//                     value={formData.description}
//                     onChange={handleChange}
//                   />
//                   <Button type="submit" className="w-full">
//                     Submit Details
//                   </Button>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CallToAction;
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { ArrowRight, Rocket } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import emailjs from "emailjs-com";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    business: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
    const TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;

    emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, formData, USER_ID).then(
      (result) => {
        console.log("User confirmation email sent", result.text);
      },
      (error) => {
        console.error("Admin email error:", error.text);
      }
    );

    const adminFormData = {
      ...formData,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, adminFormData, USER_ID).then(
      (result) => {
        alert("Message sent! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          contact: "",
          business: "",
          description: "",
        });
      },
      (error) => {
        alert("Oops, something went wrong. Please try again.");
        console.error("User email error:", error.text);
      }
    );
  };

  return (
    <div
      id="callToAction"
      className="my-20 px-4 sm:px-6 text-center animate-fade-in"
    >
      <Card className="w-full max-w-6xl mx-auto bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300">
        {/* HEADER */}
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xl sm:text-3xl text-center">
            <Rocket className="h-6 w-6 text-primary animate-bounce" />
            Let’s Build Something Great Together
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-10 sm:space-y-12 px-4 sm:px-8">
          {/* INTRO */}
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            I craft responsive, modern websites and full-stack apps using MERN,
            Angular, and .NET. <br />
            From concept to deployment — I handle it all with clean code and
            solid UX.
          </p>

          {/* SERVICES BADGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-center">
            {[
              { icon: "🚀", text: "Full-Stack Development" },
              { icon: "🔌", text: "API Integration" },
              { icon: "📱", text: "Responsive Design" },
              { icon: "🗄️", text: "Database Design" },
            ].map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-4 py-2 w-full flex justify-center items-center gap-2"
              >
                <span>{item.icon}</span>
                {item.text}
              </Badge>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Project Completion Rate
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">9+ months</div>
              <div className="text-sm text-muted-foreground">
                Hands-on Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">
                Support & Collaboration
              </div>
            </div>
          </div>

          {/* WHY ME */}
          <div className="text-left border border-border rounded-xl p-6 sm:p-8 bg-muted/10">
            <h4 className="flex justify-center text-lg font-semibold mb-4 text-center sm:text-left">
              ⚡ Why Work With Me?
            </h4>
            <div className="flex justify-center">
              <ul className="space-y-3">
                {[
                  "Quick turnaround time (2–4 weeks for most projects)",
                  "Currently employed — consistent and dependable",
                  "Uses modern tech stack and coding best practices",
                  "Budget-friendly for students & startups",
                  "Post-delivery support & maintenance",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Badge variant="secondary" className="w-fit shrink-0">
                      ✅
                    </Badge>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button + Dialog */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Got an idea or biz that needs a glow-up online? Let’s turn it into
              a real website 💻✨
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mx-auto">
                  <span className="flex items-center gap-2">
                    Send Project Details <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="w-full max-w-lg px-4 sm:px-6">
                <DialogHeader>
                  <DialogTitle>Let’s build something amazing!</DialogTitle>
                </DialogHeader>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="tel"
                    name="contact"
                    placeholder="Your Contact Number"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="business"
                    placeholder="Business / Startup Name"
                    value={formData.business}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="description"
                    placeholder="Brief description of your project"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <Button type="submit" className="w-full">
                    Submit Details
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CallToAction;
