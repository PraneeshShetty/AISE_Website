import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 pb-16 min-h-screen">
        <Planet
          type="mars"
          size={250}
          position={{ top: "5%", right: "5%" }}
          glow={true}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-foreground/70">
                Join the Cosmic Engineering Department community
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 shadow-lg">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullname"
                    className="text-sm font-medium leading-none"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirm-password"
                    className="text-sm font-medium leading-none"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="user-type"
                    className="text-sm font-medium leading-none"
                  >
                    I am a
                  </label>
                  <select
                    id="user-type"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty Member</option>
                    <option value="alumni">Alumni</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
                  >
                    Create Account
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/30" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-foreground/50">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center p-2 bg-card border border-border rounded-md hover:bg-card/80 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-foreground/70">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
