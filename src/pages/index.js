import React, { useState, useEffect } from "react";
import "../app/styles/globals.css";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roles = ["Full Stack Developer", "React Specialist", "Next.js Expert"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onButtonClick = () => {
    const pdfUrl = "/AnanyaBandyopadhyayResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ananya_Bandyopadhyay_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Vercel/Netlify", level: 85 },
    ],
  };

  const projects = [
    {
      title: "Katalyst India",
      period: "01/2025 - Present",
      description:
        "Empowerment platform for women's education and mentorship supporting underprivileged high-potential young women across India.",
      highlights: [
        "Developed scalable features using React.js",
        "Implemented JWT authentication and role-based access",
        "Increased user engagement through UI improvements",
      ],
      tags: ["React.js", "JWT", "Role-based Auth"],
    },
    {
      title: "Accuride",
      period: "10/2024 - 05/2025",
      description:
        "E-commerce platform for global manufacturer with detailed product catalog and technical resources.",
      highlights: [
        "Implemented SSR and ISR using Next.js",
        "Enhanced UX for 500+ products",
        "Boosted performance and SEO",
      ],
      tags: ["Next.js", "SSR", "ISR", "E-commerce"],
    },
    {
      title: "Deeptrail",
      period: "07/2023 - 09/2024",
      description:
        "AI-driven security platform for managing and investigating security alerts efficiently.",
      highlights: [
        "Built UI for non-technical users",
        "Real-time alert processing",
        "Maintained security and scalability standards",
      ],
      tags: ["React", "AI Integration", "Security"],
    },
    {
      title: "eZHealth",
      period: "01/2021 - 06/2023",
      description:
        "Healthcare solutions platform focusing on vaccination management with multiple user roles.",
      highlights: [
        "Integrated real-time payment gateways",
        "Created Covid-19 vaccine module",
        "Multi-role user management",
      ],
      tags: ["React", "Payment Gateway", "Healthcare"],
    },
  ];

  const experience = [
    {
      title: "Software Engineer",
      company: "Indus Net Technologies Limited",
      period: "10/2024 - Present",
      location: "Kolkata",
      description:
        "Developing scalable web applications with React, Next.js, and Node.js. Building responsive UI with Tailwind CSS and Shadcn UI.",
    },
    {
      title: "Program Analyst",
      company: "CBNITS India Pvt Ltd",
      period: "03/2021 - 09/2024",
      location: "Kolkata",
      description:
        "Translated wireframes into responsive interfaces. Built dynamic components with React.js and managed state with Redux and Zustand.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              ANANYA
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              BANDYOPADHYAY
            </h1>
          </div>
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-cyan-400 font-light transition-opacity duration-500">
              {roles[currentRole]}
            </p>
          </div>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            4.5 years of expertise in building scalable, high-performance web
            applications
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <button
              onClick={onButtonClick}
              className="px-8 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a Full Stack Developer with 4.5 years of experience
                specializing in React, Next.js, and Node.js. I've successfully
                developed and optimized multiple high-traffic web applications
                across e-commerce, healthcare, and security domains.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Passionate about creating efficient, user-friendly interfaces
                with a focus on performance, security, and seamless user
                experiences. Proficient in Jest for unit testing and dedicated
                to building scalable, enterprise-grade SaaS applications.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Award className="text-cyan-400 mb-2" size={32} />
                  <h3 className="font-semibold mb-1">30% Performance</h3>
                  <p className="text-sm text-slate-400">Boost via SSR/ISR</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Award className="text-cyan-400 mb-2" size={32} />
                  <h3 className="font-semibold mb-1">50% Faster</h3>
                  <p className="text-sm text-slate-400">Deployment Time</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-3 text-cyan-400" />
                Experience
              </h3>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-cyan-400">
                    {exp.title}
                  </h4>
                  <p className="text-slate-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-slate-400 mb-2">
                    {exp.period} • {exp.location}
                  </p>
                  <p className="text-slate-300 text-sm">{exp.description}</p>
                </div>
              ))}
              <h3 className="text-2xl font-semibold mb-4 flex items-center pt-6">
                <GraduationCap className="mr-3 text-cyan-400" />
                Education
              </h3>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold text-cyan-400">
                  Master of Computer Application
                </h4>
                <p className="text-slate-300 font-medium">IGNOU</p>
                <p className="text-sm text-slate-400">06/2021 - 06/2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 capitalize text-cyan-400 flex items-center">
                  <Code className="mr-2" size={24} />
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="text-slate-400 hover:text-cyan-400 cursor-pointer"
                    size={20}
                  />
                </div>
                <p className="text-sm text-slate-400 mb-4">{project.period}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-400 flex items-start"
                    >
                      <span className="text-cyan-400 mr-2">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects and opportunities
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:ani99banerjee@gmail.com"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Mail className="text-cyan-400" size={24} />
              <span>ani99banerjee@gmail.com</span>
            </a>
            <a
              href="tel:+917278964229"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Phone className="text-cyan-400" size={24} />
              <span>+91 7278964229</span>
            </a>
            <a
              href="https://github.com/ananyabandyopadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Github className="text-cyan-400" size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ananyabandyopadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Linkedin className="text-cyan-400" size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2025 Ananya Bandyopadhyay. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
