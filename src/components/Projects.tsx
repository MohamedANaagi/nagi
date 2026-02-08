import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

import mutakhassisSnapshot from "../assets/mutakhassis-platform-snapshot.png";

const projects = [
  {
    title: "Al-Mutakhassis Platform",
    category: "React | Firebase | Node.js",
    description:
      "Full-stack education platform for a Qudurat (aptitude) teacher: video library, timed tests, and payment flows—React front, Firebase + Node.js backend.",
    details:
      "A full-stack web platform built so a Qudurat (Saudi aptitude exam) teacher can host video lessons, publish timed quizzes, and accept payments. The frontend is React with Firebase (Auth + Firestore) for real-time data and session handling. A separate Node.js backend handles payment creation, webhooks, and access control: when a user pays (subscription or one-time), the backend validates the payment, then updates Firestore to grant access to the corresponding videos or test packs. Videos are stored and streamed via Firebase Storage; test questions and results live in Firestore with client-side timer and automatic submission. Role-based logic separates teacher (upload, manage content, view analytics) from students (browse, pay, watch, take tests, see scores).",
    features: [
      "React SPA with protected routes: public landing, student dashboard (my courses, tests, payments), teacher dashboard (content CRUD, analytics).",
      "Firebase Auth for sign-up/sign-in; Firestore for users, courses, lessons, video metadata, test questions, and attempt results with real-time listeners.",
      "Video library: courses → lessons → videos; metadata in Firestore, files in Firebase Storage; streaming and progress tracked per user.",
      "Tests: questions stored in Firestore, timer and auto-submit on the client; score computed and saved with attempt history and optional leaderboard.",
      "Node.js payment API: create checkout session, verify webhooks from the payment provider, then update Firestore (e.g. subscription flag or one-time unlock) so the React app reflects access immediately.",
      "Access control: React checks Firestore (e.g. purchased/subscribed) before rendering paid content; backend is the source of truth after payment.",
    ],
    impact:
      "Gave the teacher a single platform to monetize Qudurat prep, deliver videos and tests, and manage access via a clear payment and access-control flow.",
    technologies: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Node.js",
      "Payment API",
      "REST API",
    ],
    color: "from-teal-500 to-cyan-400",
    image: mutakhassisSnapshot,
  },
  {
    title: "POS High App",
    category: "Flutter | Restaurant POS",
    description:
      "A comprehensive POS system (Cashier, Sub-Cashier, KDS) with real-time order synchronization via LAN and REST APIs.",
    details:
      "A comprehensive Point of Sale (POS) system built with Flutter, consisting of three interconnected applications: Main Cashier, Sub Cashier, and Kitchen Display System (KDS). It's designed to streamline restaurant operations with real-time order synchronization.",
    features: [
      "Real-time order creation and status updates between terminals.",
      "Seamless workflow coordination from placement to preparation.",
      "Device-to-device communication via IP-based LAN networking.",
      "Local storage with SQLite & Hive for offline support.",
    ],
    impact:
      "Improved operational efficiency and reduced communication errors between cashier and kitchen.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Riverpod",
      "SQLite",
      "Hive",
      "REST APIs",
      "WebSockets",
    ],
    color: "from-blue-500 to-cyan-400",
    image:
      "https://images.unsplash.com/photo-1556742049-13ef7312722c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Chat App",
    category: "Flutter | Firebase",
    description:
      "Real-time messaging application featuring instant delivery and Firestore stream synchronization.",
    details:
      "A real-time messaging application built with Flutter and Firebase. It ensures smooth, live updates across all connected users for a seamless communication experience.",
    features: [
      "Firebase Authentication for secure sign-in.",
      "Cloud Firestore for real-time message synchronization.",
      "Firestore streams for instant UI updates.",
      "Support for user-based private conversations.",
    ],
    impact:
      "Delivered a low-latency communication solution with highly scalable cloud architecture.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Streams",
    ],
    color: "from-purple-500 to-pink-400",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "TeacherZone",
    category: "Flutter | Ed-Tech",
    description:
      "Educational platform with course management, lesson CRUD, and video content hosting.",
    details:
      "An education mobile app for teachers and students designed to handle complex media content and learning structures.",
    features: [
      "Role-based access (Login/Signup/Roles).",
      "Course & Lesson management with full CRUD operations.",
      "Video content hosting on Firebase Storage.",
      "Organized data collections (Users/Courses/Lessons/Videos).",
    ],
    impact:
      "Empowered educators to manage and distribute content efficiently to students.",
    technologies: [
      "Flutter",
      "Firebase",
      "Storage",
      "Firestore",
      "Media Player",
    ],
    color: "from-orange-500 to-yellow-400",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Store App",
    category: "Flutter | E-Commerce",
    description:
      "Sleek shopping experience with REST API integration and local data caching via SharedPreferences.",
    details:
      "A polished e-commerce mobile application providing a user-friendly shopping experience with robust backend integration.",
    features: [
      "RESTful API integration for product management.",
      "Caching of cart and user data via SharedPreferences.",
      "Secure user authentication and personalized orders.",
      "Smooth UI with Material Design principles.",
    ],
    impact:
      "Increased user retention through optimized data loading and personalized favorites.",
    technologies: ["Flutter", "REST APIs", "SharedPreferences", "JSON Parsing"],
    color: "from-emerald-500 to-teal-400",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "TaskFlow RN",
    category: "React Native | Productivity",
    description:
      "Professional task management app built with CLI and TypeScript, focusing on modern UI patterns.",
    details:
      "A productivity-focused application demonstrating modern React Native CLI patterns and a focus on clean, typed architecture.",
    features: [
      "Built with React Native CLI for maximum control.",
      "Strongly typed with TypeScript for reliability.",
      "Modern UI patterns with high-performance list rendering.",
      "State optimization and API integration.",
    ],
    impact:
      "Showcased ability to deliver high-performance, maintainable mobile apps in the React ecosystem.",
    technologies: ["React Native", "TypeScript", "Context API", "Axios"],
    color: "from-indigo-500 to-blue-400",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
  },
];

// ... (projects array stays above)
// ... (projects array stays above)

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
            </div>
            <div className="p-8">
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}
              />

              <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              <span className="flex items-center gap-2 text-white font-medium group/btn">
                Details
                <span className="block w-4 h-[1px] bg-white transition-all group-hover/btn:w-8" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={selectedProject.title}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* صورة كبيرة في المودال — الصورة تبان أوضح لما تضغط على الكارد */}
              <div className="w-full h-56 sm:h-72 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-12 space-y-12">
                <header className="space-y-4">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    {selectedProject.title}
                  </h2>
                  <div
                    className={`w-32 h-1 bg-gradient-to-r ${selectedProject.color}`}
                  />
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold uppercase text-xs tracking-widest opacity-40">
                        Overview
                      </h4>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {selectedProject.details}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold uppercase text-xs tracking-widest opacity-40">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-white/70">
                            <span className="text-blue-400 font-bold">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold uppercase text-xs tracking-widest opacity-40">
                        The Impact
                      </h4>
                      <p className="text-white/80 leading-relaxed italic">
                        "{selectedProject.impact}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold uppercase text-xs tracking-widest opacity-40">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded bg-white/10 text-white/60 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
