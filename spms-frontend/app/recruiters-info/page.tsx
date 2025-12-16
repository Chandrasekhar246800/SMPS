import Link from "next/link";

export default function RecruitersInfo() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-purple-700 dark:text-purple-300">
              <span className="mr-2">💼</span> For Recruiters
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Find Top Talent
              </span>
              <br />
              <span className="text-foreground">Faster & Smarter</span>
            </h1>
            
            <p className="text-xl text-foreground/70 max-w-prose mx-auto leading-relaxed">
              Connect with qualified candidates, post job openings, manage applications efficiently, 
              schedule interviews, and build your dream team — all through our streamlined recruitment platform.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-200"
              >
                Start Hiring Now
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 font-medium transition-all duration-200"
              >
                Recruiter Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Smart <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Recruitment Tools</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Powerful features designed to streamline your hiring process
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="📢"
            title="Post Job Openings"
            desc="Create and publish job listings in minutes. Define roles, requirements, eligibility criteria, salary packages, and job locations to attract the right candidates."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon="👥"
            title="Advanced Candidate Filtering"
            desc="Filter and sort candidates based on skills, CGPA, branch, experience, and custom criteria. Find the perfect match for your requirements quickly."
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon="📋"
            title="Application Management"
            desc="Review all applications in one centralized dashboard. Track candidate progress, update statuses, and manage your entire recruitment pipeline efficiently."
            gradient="from-indigo-500 to-purple-500"
          />
          <FeatureCard
            icon="📅"
            title="Interview Scheduling"
            desc="Schedule interviews seamlessly with built-in calendar integration. Send automated invitations and reminders to candidates and reduce no-shows."
            gradient="from-green-500 to-emerald-500"
          />
          <FeatureCard
            icon="📊"
            title="Candidate Insights"
            desc="Access detailed candidate profiles including academic records, skills, projects, certifications, and resumes. Make informed hiring decisions."
            gradient="from-orange-500 to-red-500"
          />
          <FeatureCard
            icon="🤝"
            title="Placement Drives"
            desc="Organize campus placement drives with ease. Coordinate with administrators, set timelines, manage multiple positions, and track outcomes."
            gradient="from-violet-500 to-purple-500"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Hire in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4 Easy Steps</span>
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="Register Company"
              desc="Create your company profile with details about your organization, industry, and hiring needs."
            />
            <StepCard
              number="2"
              title="Post Jobs"
              desc="Publish job openings with detailed requirements, eligibility criteria, and compensation details."
            />
            <StepCard
              number="3"
              title="Review & Shortlist"
              desc="Browse applications, filter candidates, and shortlist the best matches for your positions."
            />
            <StepCard
              number="4"
              title="Interview & Hire"
              desc="Schedule interviews, evaluate candidates, extend offers, and build your winning team."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-black/10 dark:border-white/10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-foreground/60 font-medium">Qualified Candidates</div>
                </div>
                
                <StatItem label="Active Job Postings" value="500+" />
                <StatItem label="Companies Hiring" value="250+" />
                <StatItem label="Avg. Time to Hire" value="2 weeks" />
                <StatItem label="Placement Success" value="95%" />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Why Recruiters <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            
            <div className="space-y-6">
              <BenefitItem 
                icon="✅"
                title="Access Pre-Screened Talent"
                desc="Connect with students who have already been vetted by educational institutions. Focus on the best candidates only."
              />
              <BenefitItem 
                icon="✅"
                title="Reduce Hiring Time"
                desc="Streamlined processes and automated workflows help you fill positions faster. Cut your hiring time by 50%."
              />
              <BenefitItem 
                icon="✅"
                title="Cost-Effective Recruitment"
                desc="Eliminate expensive job board fees and recruitment agency costs. Reach thousands of candidates directly."
              />
              <BenefitItem 
                icon="✅"
                title="Data-Driven Decisions"
                desc="Access comprehensive analytics and insights to make informed hiring decisions backed by real data."
              />
            </div>

            <div className="pt-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-200"
              >
                Start Recruiting Today
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Succeed</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <HighlightCard
            title="Real-Time Notifications"
            desc="Get instant alerts when candidates apply, update their profiles, or respond to interview invitations. Stay connected throughout the hiring process."
            icon="🔔"
          />
          <HighlightCard
            title="Bulk Operations"
            desc="Process multiple applications simultaneously. Send bulk emails, update statuses in batches, and schedule group interviews to save time."
            icon="⚡"
          />
          <HighlightCard
            title="Custom Workflows"
            desc="Design recruitment workflows that match your company's hiring process. Set up multi-stage evaluations and collaborative decision-making."
            icon="🔄"
          />
          <HighlightCard
            title="Secure & Compliant"
            desc="Bank-level security for all candidate data. GDPR compliant with role-based access controls and complete audit trails."
            icon="🔒"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-12 shadow-2xl">
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join hundreds of companies who have successfully hired top talent through our platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-white text-purple-600 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Register Your Company
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-medium transition-all duration-200"
              >
                Login
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
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-2xl shadow-lg">
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
      <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{value}</span>
    </div>
  );
}

function HighlightCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
