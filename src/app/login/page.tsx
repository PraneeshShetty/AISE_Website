"use client";

import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 pb-16 min-h-screen">
        <Planet
          type="gas-giant"
          size={200}
          position={{ top: "15%", left: "5%" }}
          glow={true}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Sign In to Your Account
              </h1>
              <p className="text-foreground/70">
                Access the Cosmic Engineering Department portal
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 shadow-lg">
              <div className="space-y-6">
                <div className="grid gap-4">
                  <Link
                    href="/login/student"
                    className="flex items-center justify-center space-x-3 p-4 bg-primary/10 border border-primary/30 rounded-md hover:bg-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl">👨‍🎓</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Student Login</h3>
                      <p className="text-sm text-foreground/70">
                        For enrolled students
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/login/admin"
                    className="flex items-center justify-center space-x-3 p-4 bg-accent/10 border border-accent/30 rounded-md hover:bg-accent/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl">👨‍💼</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Admin Login</h3>
                      <p className="text-sm text-foreground/70">
                        For faculty and staff
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/login/alumni"
                    className="flex items-center justify-center space-x-3 p-4 bg-space-accent/10 border border-space-accent/30 rounded-md hover:bg-space-accent/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-space-accent/20 flex items-center justify-center">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Alumni Login</h3>
                      <p className="text-sm text-foreground/70">
                        For department graduates
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/30"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-foreground/50">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center p-2 bg-card border border-border rounded-md hover:bg-card/80 transition-colors">
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
                    Sign in with Google
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm">
                <p className="text-foreground/70">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    Register
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
