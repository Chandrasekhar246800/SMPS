import Link from "next/link";

export default function StudentsInfo() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
              <span className="mr-2">👨‍🎓</span> For Students
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Career Journey
              </span>
              <br />
              <span className="text-foreground">Starts Here</span>
            </h1>
            
            <p className="text-xl text-foreground/70 max-w-prose mx-auto leading-relaxed">
              Build your profile, discover opportunities tailored to your skills, apply to top companies, 
              and track your placement journey — all in one smart platform designed for student success.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
              >
                Get Started Free
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 font-medium transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span> for Students
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to succeed in your placement journey
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="📝"
            title="Smart Profile Builder"
            desc="Create a comprehensive profile showcasing your academics, skills, projects, certifications, and achievements. Stand out to recruiters with a professional presentation."
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon="🔍"
            title="Personalized Job Matching"
            desc="Discover job opportunities that match your skills, qualifications, and career aspirations. Our smart algorithm ensures you see the most relevant openings."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon="⚡"
            title="One-Click Applications"
            desc="Apply to multiple opportunities with ease. Upload your resume once and apply to any job posting with just a single click."
            gradient="from-orange-500 to-red-500"
          />
          <FeatureCard
            icon="📊"
            title="Application Tracking"
            desc="Track all your applications in one place. Get real-time updates on application status, interview schedules, and placement outcomes."
            gradient="from-green-500 to-emerald-500"
          />
          <FeatureCard
            icon="📅"
            title="Interview Calendar"
            desc="Never miss an interview. Receive timely notifications and reminders for scheduled interviews. Access interview details and preparation resources."
            gradient="from-indigo-500 to-blue-500"
          />
          <FeatureCard
            icon="📈"
            title="Performance Analytics"
            desc="Track your placement progress with detailed analytics. Understand your strengths, identify areas for improvement, and optimize your job search strategy."
            gradient="from-violet-500 to-purple-500"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Your Journey in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="Sign Up"
              desc="Create your account and complete your student profile with academic details and resume."
            />
            <StepCard
              number="2"
              title="Browse Jobs"
              desc="Explore job openings from top companies. Filter by role, location, package, and eligibility."
            />
            <StepCard
              number="3"
              title="Apply"
              desc="Submit applications to your preferred companies. Track application status in real-time."
            />
            <StepCard
              number="4"
              title="Get Placed"
              desc="Attend interviews, receive offers, and kickstart your professional career successfully."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Why Students <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Love Us</span>
            </h2>
            
            <div className="space-y-6">
              <BenefitItem 
                icon="✅"
                title="Save Time & Effort"
                desc="No more juggling multiple platforms or tracking applications on spreadsheets. Everything you need is in one place."
              />
              <BenefitItem 
                icon="✅"
                title="Stay Organized"
                desc="Keep track of deadlines, interviews, and responses. Never miss an opportunity due to poor organization."
              />
              <BenefitItem 
                icon="✅"
                title="Access Top Companies"
                desc="Connect with leading companies actively hiring from your campus. Get early access to exclusive opportunities."
              />
              <BenefitItem 
                icon="✅"
                title="Real-Time Updates"
                desc="Receive instant notifications about new job postings, application updates, and interview schedules."
              />
            </div>

            <div className="pt-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
              >
                Start Your Journey Today
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-black/10 dark:border-white/10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    95%
                  </div>
                  <div className="text-sm text-foreground/60 font-medium">Placement Success Rate</div>
                </div>
                
                <StatItem label="Average Response Time" value="< 24 hrs" />
                <StatItem label="Active Job Listings" value="500+" />
                <StatItem label="Recruiting Companies" value="250+" />
                <StatItem label="Students Placed" value="10,000+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 shadow-2xl">
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of students who have successfully secured their dream jobs through our platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Create Free Account
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-medium transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc, gradient }: { icon: string; title: string; desc: string; gradient: string }) {
  return (
    <div className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} text-white text-2xl mb-4 shadow-lg`}>
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-2xl shadow-lg">
        {number}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-foreground/60">{label}</span>
      <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{value}</span>
    </div>
  );
}
