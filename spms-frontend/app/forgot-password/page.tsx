"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Reset password for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Brief */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Reset Your <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Password</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Don't worry! It happens to the best of us. Enter your email and we'll send you instructions to reset your password.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold mb-1">Check Your Email</h3>
                <p className="text-sm text-foreground/60">We'll send a secure reset link to your registered email address.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                🔒
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure Process</h3>
                <p className="text-sm text-foreground/60">The reset link is valid for 1 hour and can only be used once for security.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1">Quick & Easy</h3>
                <p className="text-sm text-foreground/60">Create a new password and regain access to your account in minutes.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">💡</span>
              Helpful Tips
            </h4>
            <ul className="text-sm text-foreground/60 space-y-1">
              <li>• Check your spam folder if you don't see the email</li>
              <li>• The email will come from noreply@spms.com</li>
              <li>• Contact support if you need additional help</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-black/10 dark:border-white/10">
            <p className="text-sm text-foreground/60">
              Remember your password?{" "}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Reset Form */}
        <div className="bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-xl p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
                <p className="text-sm text-foreground/60">Enter your email to receive a password reset link</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-background focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-black/10 dark:border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-black text-foreground/60">Or</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    Don't have an account? Sign up
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-3xl mb-6">
                ✓
              </div>
              <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
              <p className="text-foreground/60 mb-6">
                We've sent a password reset link to <strong className="text-foreground">{email}</strong>
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-black/10 dark:border-white/10 bg-cyan-50/50 dark:bg-cyan-950/10 p-4 text-sm text-left">
                  <p className="text-foreground/70">
                    <strong>Next steps:</strong>
                  </p>
                  <ol className="mt-2 space-y-1 text-foreground/60 list-decimal list-inside">
                    <li>Open the email from SPMS</li>
                    <li>Click the reset password link</li>
                    <li>Create your new password</li>
                    <li>Sign in with your new password</li>
                  </ol>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Didn't receive the email? Try again
                </button>

                <div className="pt-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Sign In
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
