import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
                <span className="mr-2">✨</span> Modern Placement Portal
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Student Placement
                </span>
                <br />
                <span className="text-foreground">Management System</span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-prose leading-relaxed">
                Connect <strong className="text-foreground">students</strong>, <strong className="text-foreground">recruiters</strong>, and <strong className="text-foreground">administrators</strong>.
                Discover opportunities, apply seamlessly, track applications, and manage campus drives — all in one unified platform.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/students"
                  className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
                >
                  Explore Opportunities
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/recruiters"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 font-medium transition-all duration-200"
                >
                  Recruiter Portal
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <FeatureCard 
                    icon="👨‍🎓" 
                    title="For Students" 
                    desc="Smart profiles, matching jobs, tracked applications"
                  />
                  <FeatureCard 
                    icon="💼" 
                    title="For Recruiters" 
                    desc="Post jobs, filter candidates, manage interviews"
                  />
                  <FeatureCard 
                    icon="⚙️" 
                    title="For Admins" 
                    desc="Drive scheduling, eligibility rules, reports"
                  />
                  <FeatureCard 
                    icon="🔒" 
                    title="Secure & Scalable" 
                    desc="Role-based access, audit trails, modern stack"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A streamlined workflow designed for efficiency and ease of use
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProcessCard 
            number="01" 
            title="Create Profile" 
            desc="Students set up profiles with academics, skills, resumes."
            gradient="from-blue-500 to-cyan-500"
          />
          <ProcessCard 
            number="02" 
            title="Discover Jobs" 
            desc="Personalized listings based on eligibility and preferences."
            gradient="from-purple-500 to-pink-500"
          />
          <ProcessCard 
            number="03" 
            title="Apply & Track" 
            desc="Submit applications, get updates, prepare for interviews."
            gradient="from-orange-500 to-red-500"
          />
          <ProcessCard 
            number="04" 
            title="Manage Drives" 
            desc="Admins orchestrate company drives and timelines."
            gradient="from-green-500 to-emerald-500"
          />
          <ProcessCard 
            number="05" 
            title="Shortlist Candidates" 
            desc="Recruiters filter, shortlist, and schedule interviews."
            gradient="from-indigo-500 to-blue-500"
          />
          <ProcessCard 
            number="06" 
            title="Offer & Reports" 
            desc="Track offers, outcomes, and generate analytics."
            gradient="from-violet-500 to-purple-500"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="10K+" label="Active Students" />
            <StatCard number="500+" label="Companies" />
            <StatCard number="95%" label="Placement Rate" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="space-y-2">
      <div className="text-2xl">{icon}</div>
      <dt className="text-sm font-semibold text-foreground">{title}</dt>
      <dd className="text-sm text-foreground/60 leading-relaxed">{desc}</dd>
    </div>
  );
}

function ProcessCard({ number, title, desc, gradient }: { number: string; title: string; desc: string; gradient: string }) {
  return (
    <div className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} text-white font-bold text-lg mb-4 shadow-lg`}>
        {number}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm text-foreground/60 font-medium">{label}</div>
    </div>
  );
}
