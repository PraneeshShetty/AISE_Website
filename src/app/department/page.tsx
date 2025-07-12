import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";

export default function DepartmentPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 pb-16 min-h-screen">
        <Planet
          type="gas-giant"
          size={180}
          position={{ top: "15%", right: "5%" }}
          glow={true}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Our Department</h1>
              <p className="text-xl text-foreground/70">
                Pioneering the future of engineering with a cosmic perspective
              </p>
            </div>

            <div className="space-y-12">
              <section className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  The Cosmic Engineering Department is dedicated to advancing the frontiers of engineering through innovative research, cutting-edge education, and a deep understanding of the universe's fundamental principles. We strive to develop technologies and solutions that not only address current challenges but also anticipate future needs across various domains including aerospace, sustainable energy, and advanced materials.
                </p>
                <p>
                  Our mission is to inspire and educate the next generation of engineers with a cosmic perspective, fostering creativity, critical thinking, and a deep appreciation for the interconnectedness of engineering disciplines. We aim to be a catalyst for technological breakthroughs that enhance human capabilities and expand our understanding of the universe.
                </p>
              </section>

              <section className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2005</div>
                    <div>
                      <h3 className="font-medium">Department Founding</h3>
                      <p className="text-foreground/70">
                        The Cosmic Engineering Department was established with a vision to integrate astronomical principles into engineering education and research.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2008</div>
                    <div>
                      <h3 className="font-medium">Launch of Undergraduate Program</h3>
                      <p className="text-foreground/70">
                        Our first batch of undergraduate students embarked on their journey to become cosmic engineers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2012</div>
                    <div>
                      <h3 className="font-medium">Research Center Inauguration</h3>
                      <p className="text-foreground/70">
                        The Advanced Cosmic Engineering Research Center was established to facilitate groundbreaking research.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2015</div>
                    <div>
                      <h3 className="font-medium">Industry Partnership Program</h3>
                      <p className="text-foreground/70">
                        We initiated collaborations with leading technology companies to bridge academia and industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2019</div>
                    <div>
                      <h3 className="font-medium">Global Recognition</h3>
                      <p className="text-foreground/70">
                        Our department received international recognition for contributions to sustainable engineering solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0 text-foreground/70">2023</div>
                    <div>
                      <h3 className="font-medium">Expansion of Programs</h3>
                      <p className="text-foreground/70">
                        Introduction of specialized tracks in quantum engineering, space technology, and bio-inspired design.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Facilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-background/40 rounded-md">
                    <h3 className="font-medium text-lg mb-2">Advanced Research Laboratories</h3>
                    <p className="text-foreground/70">
                      State-of-the-art facilities for experiments in materials science, quantum mechanics, and aerospace engineering.
                    </p>
                  </div>
                  <div className="p-4 bg-background/40 rounded-md">
                    <h3 className="font-medium text-lg mb-2">Cosmic Simulation Center</h3>
                    <p className="text-foreground/70">
                      High-performance computing infrastructure for complex simulations and modeling of cosmic phenomena.
                    </p>
                  </div>
                  <div className="p-4 bg-background/40 rounded-md">
                    <h3 className="font-medium text-lg mb-2">Design Studio</h3>
                    <p className="text-foreground/70">
                      Collaborative space equipped with the latest design tools and technologies for engineering projects.
                    </p>
                  </div>
                  <div className="p-4 bg-background/40 rounded-md">
                    <h3 className="font-medium text-lg mb-2">Innovation Hub</h3>
                    <p className="text-foreground/70">
                      Incubation center for student startups and entrepreneurial ventures with mentorship from industry experts.
                    </p>
                  </div>
                </div>
              </section>

              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
