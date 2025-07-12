import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";
import { Mail, Linkedin, Globe, Award, BookOpen, Users } from "lucide-react";
import Link from "next/link";

// Define faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Elara Cosmos",
    title: "Department Chair",
    image: "https://source.unsplash.com/fHXpgMd_XhE/400x400",
    specialization: "Quantum Engineering",
    email: "elara.cosmos@cosmic-engineering.edu",
    linkedin: "https://linkedin.com",
    website: "https://elaracosmos.com",
    achievements: "Published over 50 research papers in top-tier journals",
    bio: "Dr. Cosmos has pioneered research in quantum engineering applications for space technology. Her work has revolutionized how we approach interstellar communication systems."
  },
  {
    id: 2,
    name: "Prof. Orion Stellar",
    title: "Senior Professor",
    image: "https://source.unsplash.com/iEEBWgY_6lA/400x400",
    specialization: "Aerospace Systems",
    email: "orion.stellar@cosmic-engineering.edu",
    linkedin: "https://linkedin.com",
    website: "https://orionstellar.net",
    achievements: "Recipient of the National Medal for Engineering Excellence",
    bio: "Prof. Stellar has over 25 years of experience in aerospace systems design. He leads the department's collaborative efforts with major space agencies worldwide."
  },
  {
    id: 3,
    name: "Dr. Nova Pulsar",
    title: "Associate Professor",
    image: "https://source.unsplash.com/IF9TK5Uy-KI/400x400",
    specialization: "Materials Science",
    email: "nova.pulsar@cosmic-engineering.edu",
    linkedin: "https://linkedin.com",
    website: null,
    achievements: "Developed revolutionary heat-resistant materials for spacecraft",
    bio: "Dr. Pulsar focuses on creating next-generation materials that can withstand extreme cosmic conditions. Her research has been instrumental in advancing deep space exploration capabilities."
  },
  {
    id: 4,
    name: "Dr. Leo Nebula",
    title: "Assistant Professor",
    image: "https://source.unsplash.com/7YVZYaVbUmA/400x400",
    specialization: "AI in Engineering",
    email: "leo.nebula@cosmic-engineering.edu",
    linkedin: "https://linkedin.com",
    website: "https://leonebula.ai",
    achievements: "Creator of STELLA, an AI system for space mission planning",
    bio: "Dr. Nebula bridges the gap between artificial intelligence and engineering applications. His work focuses on creating autonomous systems for complex space missions."
  },
];

// Define student representatives data
const studentRepsData = [
  {
    id: 1,
    name: "Cassiopeia Jones",
    title: "PhD Candidate",
    image: "https://source.unsplash.com/AJIqZDAUD7A/400x400",
    specialization: "Quantum Computing",
    email: "cassiopeia.j@cosmic-engineering.edu",
    bio: "Researching quantum algorithms for solving complex engineering optimization problems."
  },
  {
    id: 2,
    name: "Rigel Martinez",
    title: "Masters Student",
    image: "https://source.unsplash.com/73AtzK1dSdA/400x400",
    specialization: "Sustainable Energy Systems",
    email: "rigel.m@cosmic-engineering.edu",
    bio: "Working on solar energy harvesting systems inspired by cosmic phenomena."
  },
  {
    id: 3,
    name: "Lyra Chen",
    title: "Undergraduate Representative",
    image: "https://source.unsplash.com/cUW-kRFOjw0/400x400",
    specialization: "Robotics",
    email: "lyra.c@cosmic-engineering.edu",
    bio: "Leading the department's robotics club and organizing intercollegiate competitions."
  },
];

// Define staff data
const staffData = [
  {
    id: 1,
    name: "Stella Moon",
    title: "Administrative Director",
    image: "https://source.unsplash.com/yTwXpLO5HAA/400x400",
    email: "stella.m@cosmic-engineering.edu",
    bio: "Oversees all administrative operations in the department and coordinates with other university departments."
  },
  {
    id: 2,
    name: "Atlas Rodriguez",
    title: "Lab Manager",
    image: "https://source.unsplash.com/d1UPkiFd04A/400x400",
    email: "atlas.r@cosmic-engineering.edu",
    bio: "Manages the department's advanced research laboratories and ensures safety compliance."
  },
  {
    id: 3,
    name: "Vega Patel",
    title: "Student Affairs Coordinator",
    image: "https://source.unsplash.com/jzY0KRJopEI/400x400",
    email: "vega.p@cosmic-engineering.edu",
    bio: "Handles student inquiries, facilitates academic advising, and organizes department events."
  },
];

export default function PeoplePage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 pb-16 min-h-screen">
        <Planet
          type="earth"
          size={150}
          position={{ top: "10%", right: "5%" }}
          glow={true}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our People</h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Meet the brilliant minds behind Cosmic Engineering — our faculty, students, and staff who are shaping the future of engineering with a cosmic perspective.
              </p>
            </div>

            {/* Faculty Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-semibold">Faculty</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {facultyData.map((faculty) => (
                  <div
                    key={faculty.id}
                    className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 shadow-lg flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="aspect-square rounded-lg overflow-hidden bg-background">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold">{faculty.name}</h3>
                      <p className="text-primary mb-2">{faculty.title}</p>
                      <p className="text-foreground/70 mb-4">
                        <span className="font-medium">Specialization:</span> {faculty.specialization}
                      </p>

                      <p className="text-foreground/80 mb-4 text-sm">
                        {faculty.bio}
                      </p>

                      <div className="text-sm text-foreground/70 mb-4">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary/70" />
                          <span>{faculty.achievements}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`mailto:${faculty.email}`}
                          className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          <span>Email</span>
                        </a>

                        <a
                          href={faculty.linkedin}
                          className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-1" />
                          <span>LinkedIn</span>
                        </a>

                        {faculty.website && (
                          <a
                            href={faculty.website}
                            className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="w-4 h-4 mr-1" />
                            <span>Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Student Representatives Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-semibold">Student Representatives</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {studentRepsData.map((student) => (
                  <div
                    key={student.id}
                    className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-background">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{student.name}</h3>
                      <p className="text-primary mb-1">{student.title}</p>
                      <p className="text-foreground/70 text-sm mb-3">
                        <span className="font-medium">Focus:</span> {student.specialization}
                      </p>

                      <p className="text-foreground/80 mb-4 text-sm">
                        {student.bio}
                      </p>

                      <div className="mt-4">
                        <a
                          href={`mailto:${student.email}`}
                          className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          <span>{student.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Staff Section */}
            <section className="mb-12">
              <div className="flex items-center mb-8">
                <Award className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-semibold">Administrative Staff</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {staffData.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden shadow-lg flex flex-col"
                  >
                    <div className="aspect-[3/2] overflow-hidden bg-background">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex-grow">
                      <h3 className="text-lg font-semibold">{staff.name}</h3>
                      <p className="text-primary mb-3">{staff.title}</p>

                      <p className="text-foreground/80 mb-4 text-sm">
                        {staff.bio}
                      </p>
                    </div>

                    <div className="px-6 pb-6 mt-auto">
                      <a
                        href={`mailto:${staff.email}`}
                        className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        <span>{staff.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center mt-10">
              <p className="text-foreground/70 mb-6">
                Interested in joining our department? Explore our programs and opportunities.
              </p>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
