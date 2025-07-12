import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";
import { Rocket, GraduationCap, Users, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

// Define research projects data
const researchProjects = [
  {
    id: 1,
    title: "Quantum Communication for Deep Space Missions",
    image: "https://source.unsplash.com/NuE8Nu3otjo/800x600",
    category: "Aerospace",
    status: "Ongoing",
    year: "2023-Present",
    team: ["Dr. Elara Cosmos", "Dr. Nova Pulsar", "Cassiopeia Jones"],
    description: "This pioneering research focuses on developing quantum entanglement-based communication systems for interplanetary missions. The project aims to achieve instantaneous data transmission across vast cosmic distances, potentially revolutionizing how we conduct deep space exploration.",
    achievements: [
      "Successfully demonstrated quantum entanglement maintenance across 500,000 km",
      "Developed miniaturized quantum receivers suitable for spacecraft integration",
      "Published findings in the International Journal of Quantum Engineering"
    ],
    collaborators: ["National Space Agency", "Quantum Physics Institute"],
    fundingSource: "Cosmic Engineering Research Grant"
  },
  {
    id: 2,
    title: "Bio-inspired Self-healing Materials for Extreme Environments",
    image: "https://source.unsplash.com/c8h0n7fSTqs/800x600",
    category: "Materials Science",
    status: "Completed",
    year: "2020-2022",
    team: ["Dr. Nova Pulsar", "Prof. Orion Stellar", "Rigel Martinez"],
    description: "Inspired by biological healing mechanisms, this project developed revolutionary materials capable of self-repair in extreme temperature and radiation conditions found in outer space. These materials are being integrated into next-generation spacecraft shielding and habitat construction.",
    achievements: [
      "Created polymers capable of autonomous repair at temperatures ranging from -150°C to 300°C",
      "Demonstrated 85% structural recovery after micrometeoroid impact simulation",
      "Two patents filed for material manufacturing processes"
    ],
    collaborators: ["Advanced Materials Institute", "Exoplanet Habitation Program"],
    fundingSource: "Department of Defense Research Initiative"
  },
  {
    id: 3,
    title: "ASTRA: AI Systems for Trajectory Refinement and Automation",
    image: "https://source.unsplash.com/sS7engj3NcE/800x600",
    category: "Artificial Intelligence",
    status: "Ongoing",
    year: "2022-Present",
    team: ["Dr. Leo Nebula", "Dr. Elara Cosmos", "Graduate Research Team"],
    description: "ASTRA is developing advanced AI algorithms that can autonomously calculate and refine spacecraft trajectories in real-time, accounting for unexpected celestial events, solar radiation fluctuations, and gravitational anomalies. This system aims to reduce mission risks and improve fuel efficiency.",
    achievements: [
      "Achieved 43% improvement in trajectory optimization compared to traditional methods",
      "Successfully tested on three recent satellite deployment missions",
      "AI models trained on 50+ years of historic space mission data"
    ],
    collaborators: ["International Space Station Research Team", "Applied AI Institute"],
    fundingSource: "Private Industry Partnership"
  },
  {
    id: 4,
    title: "Sustainable Energy Systems Inspired by Stellar Processes",
    image: "https://source.unsplash.com/E0tZX8Ygp8c/800x600",
    category: "Energy Systems",
    status: "Completed",
    year: "2019-2022",
    team: ["Prof. Orion Stellar", "Graduate Research Team"],
    description: "This project studied energy production and transformation processes in stars to develop more efficient renewable energy systems on Earth. The research led to breakthroughs in fusion containment and solar energy harvesting technologies.",
    achievements: [
      "Developed novel solar panel designs with 32% greater efficiency",
      "Created prototype micro-fusion containment system",
      "Implemented findings in three campus facilities, reducing energy consumption by 45%"
    ],
    collaborators: ["Renewable Energy Consortium", "Fusion Research Laboratory"],
    fundingSource: "Clean Energy Foundation Grant"
  }
];

// Define student projects data
const studentProjects = [
  {
    id: 1,
    title: "CosmoBot: Autonomous Robot for Extraterrestrial Surface Exploration",
    image: "https://source.unsplash.com/ZPeXrWxOjRQ/800x600",
    students: ["Lyra Chen", "3 Undergraduate Team Members"],
    year: "2023",
    description: "An award-winning senior design project featuring a robust robot capable of navigating highly variable terrain while collecting and analyzing samples. The design incorporates innovative suspension systems and AI-driven path planning algorithms."
  },
  {
    id: 2,
    title: "Cosmic Debris Mitigation System",
    image: "https://source.unsplash.com/ln5drpv_ImI/800x600",
    students: ["Rigel Martinez", "2 Graduate Researchers"],
    year: "2023",
    description: "A revolutionary approach to space debris collection and mitigation using magnetic field manipulation. This project has attracted interest from space agencies for its potential application in clearing orbital pathways for future missions."
  },
  {
    id: 3,
    title: "QuantumSim: Educational Platform for Quantum Mechanics Visualization",
    image: "https://source.unsplash.com/hvdnvc-LqOk/800x600",
    students: ["Cassiopeia Jones", "Interdisciplinary Team"],
    year: "2022",
    description: "An interactive platform making quantum physics concepts accessible through immersive visualizations. This open-source educational tool is now being adopted by universities worldwide to enhance quantum engineering education."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 pb-16 min-h-screen">
        <Planet
          type="mars"
          size={180}
          position={{ bottom: "20%", left: "5%" }}
          glow={true}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Research & Projects</h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Exploring the frontiers of engineering through innovative research and hands-on student projects that push the boundaries of what's possible.
              </p>
            </div>

            {/* Research Projects Section */}
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <Rocket className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-semibold">Major Research Initiatives</h2>
              </div>

              <div className="space-y-12">
                {researchProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="md:col-span-1">
                        <div className="h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            project.status === "Ongoing"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{project.year}</span>
                          </div>
                          <div>
                            <span className="font-medium">Category:</span> {project.category}
                          </div>
                        </div>

                        <p className="text-foreground/80 mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                          <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
                            {project.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div>
                            <span className="font-medium text-foreground/70">Team:</span>{" "}
                            <span className="text-foreground/80">{project.team.join(", ")}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground/70">Collaborators:</span>{" "}
                            <span className="text-foreground/80">{project.collaborators.join(", ")}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground/70">Funding:</span>{" "}
                            <span className="text-foreground/80">{project.fundingSource}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Student Projects Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-semibold">Student Projects</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {studentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden shadow-lg flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden bg-background">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-foreground/70">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{project.students}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <p className="text-foreground/80 text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="p-6 pt-0 mt-auto">
                      <Link
                        href="#"
                        className="text-primary hover:text-primary/90 text-sm flex items-center transition-colors"
                      >
                        View Project Details
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center bg-card/60 backdrop-blur-sm border border-border/40 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Interested in Our Research?</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                We're always looking for passionate researchers, collaborators, and students to join our projects. Reach out to learn more about current opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
                >
                  Contact Research Office
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-border text-foreground font-medium transition-colors hover:bg-card/80"
                >
                  Explore Academic Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
