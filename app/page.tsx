import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCode, HiPencilAlt, HiLightningBolt } from "react-icons/hi";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/project/ProjectCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium mb-4 border border-gray-200">
                Available for opportunities
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 tracking-tight">
              Hi, I'm{" "}
              <span className="text-gray-800 border-b-4 border-gray-800">
                Chang Liu
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & HRI Researcher building robust systems and
              intuitive interfaces through research, thoughtful design, and scalable engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors"
              >
                View My Work
                <HiArrowRight className="text-xl" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-50 border-2 border-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-md p-8 border border-gray-200 hover:border-gray-800 transition-colors">
              <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mb-4">
                <HiCode className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                End-to-end software development
              </h3>
              <p className="text-gray-600">
                Full-stack development across frontend, backend, and APIs, with experience in modern frameworks, data handling, and scalable system design.
              </p>
            </div>

            <div className="bg-white rounded-md p-8 border border-gray-200 hover:border-gray-800 transition-colors">
              <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mb-4">
                <HiPencilAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Human-centered design informed by research
              </h3>
              <p className="text-gray-600">
                User research, interaction design, prototyping, and design systems grounded in usability, accessibility, and real-world constraints.
              </p>
            </div>

            <div className="bg-white rounded-md p-8 border border-gray-200 hover:border-gray-800 transition-colors">
              <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mb-4">
                <HiLightningBolt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Applied computing and emerging technologies
              </h3>
              <p className="text-gray-600">
                Exploring AR/VR, robotics, and intelligent systems through hands-on experimentation, prototyping, and research-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A selection of my recent work spanning UX research, product design,
              and technical development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.frontmatter.slug}
                project={project.frontmatter}
                index={index}
              />
            ))}
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors"
            >
              View All Projects
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / CTA */}
      <section className="py-20 bg-gray-800 text-white border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            I'm currently looking for UI/UX design and product design
            opportunities. Let's create something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-md font-semibold hover:bg-gray-700 border-2 border-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
