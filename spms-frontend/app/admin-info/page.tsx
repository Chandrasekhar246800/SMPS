import Link from "next/link";

export default function AdminInfo() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="mr-2">⚙️</span> For Administrators
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Complete Control
              </span>
              <br />
              <span className="text-foreground">Simplified Management</span>
            </h1>
            
            <p className="text-xl text-foreground/70 max-w-prose mx-auto leading-relaxed">
              Orchestrate placement drives, manage users, configure eligibility criteria, generate comprehensive 
              reports, and oversee the entire placement ecosystem with powerful administrative tools.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200"
              >
                Get Admin Access
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 font-medium transition-all duration-200"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Powerful <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Administrative Features</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to manage placements efficiently and effectively
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="🎯"
            title="Placement Drive Management"
            desc="Organize and coordinate campus placement drives. Set timelines, configure rounds, manage schedules, and track progress from start to finish."
            gradient="from-emerald-500 to-teal-500"
          />
          <FeatureCard
            icon="👥"
            title="User Management"
            desc="Manage students, recruiters, and admin accounts. Control access permissions, approve registrations, and maintain user databases efficiently."
            gradient="from-teal-500 to-cyan-500"
          />
          <FeatureCard
            icon="📋"
            title="Eligibility Criteria"
            desc="Define and configure eligibility rules for different companies and job positions. Set CGPA cutoffs, branch restrictions, and custom requirements."
            gradient="from-cyan-500 to-blue-500"
          />
          <FeatureCard
            icon="🏢"
            title="Company Verification"
            desc="Review and approve company registrations. Verify company details, validate job postings, and ensure quality control across the platform."
            gradient="from-green-500 to-emerald-500"
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Reports"
            desc="Generate comprehensive reports on placements, student performance, company participation, and drive outcomes. Export data for further analysis."
            gradient="from-indigo-500 to-purple-500"
          />
          <FeatureCard
            icon="🔔"
            title="Notifications & Alerts"
            desc="Send bulk notifications to students and companies. Announce drive schedules, deadlines, results, and important updates instantly."
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent dark:via-emerald-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Manage Placements in <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">4 Steps</span>
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="Setup System"
              desc="Configure platform settings, define eligibility criteria, and set up user roles and permissions."
            />
            <StepCard
              number="2"
              title="Coordinate Drives"
              desc="Schedule placement drives, invite companies, manage calendars, and communicate with stakeholders."
            />
            <StepCard
              number="3"
              title="Monitor Progress"
              desc="Track applications, interview schedules, and candidate progress across all active placement drives."
            />
            <StepCard
              number="4"
              title="Generate Reports"
              desc="Create detailed analytics and reports on placement outcomes, statistics, and key performance metrics."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Why Admins <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Rely on Us</span>
            </h2>
            
            <div className="space-y-6">
              <BenefitItem 
                icon="✅"
                title="Centralized Management"
                desc="Control all aspects of placement activities from a single, unified dashboard. No more juggling multiple systems or spreadsheets."
              />
              <BenefitItem 
                icon="✅"
                title="Automation & Efficiency"
                desc="Automate repetitive tasks like notifications, status updates, and report generation. Save hours of manual work every week."
              />
              <BenefitItem 
                icon="✅"
                title="Real-Time Visibility"
                desc="Get instant insights into ongoing activities, application statuses, and drive progress. Make informed decisions with live data."
              />
              <BenefitItem 
                icon="✅"
                title="Compliance & Security"
                desc="Built-in audit trails, data protection, and role-based access control ensure compliance and security at every step."
              />
            </div>

            <div className="pt-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200"
              >
                Request Admin Access
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-black/10 dark:border-white/10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-foreground/60 font-medium">Process Automation</div>
                </div>
                
                <StatItem label="Active Drives" value="25+" />
                <StatItem label="Total Students" value="10,000+" />
                <StatItem label="Partner Companies" value="250+" />
                <StatItem label="Time Saved" value="80%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Advanced <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AdvancedFeatureCard
            title="Dashboard Analytics"
            desc="Comprehensive real-time dashboard with key metrics, trends, and actionable insights at a glance."
            icon="📈"
          />
          <AdvancedFeatureCard
            title="Bulk Operations"
            desc="Perform bulk actions on users, applications, or notifications. Process hundreds of items simultaneously."
            icon="⚡"
          />
          <AdvancedFeatureCard
            title="Custom Workflows"
            desc="Design custom approval workflows, multi-stage processes, and automated routing based on your institution's needs."
            icon="🔄"
          />
          <AdvancedFeatureCard
            title="Export & Integration"
            desc="Export data to Excel, PDF, or CSV formats. Integrate with existing campus management systems via APIs."
            icon="🔗"
          />
          <AdvancedFeatureCard
            title="Audit Trails"
            desc="Complete activity logs and audit trails for compliance and accountability. Track every action taken on the platform."
            icon="📜"
          />
          <AdvancedFeatureCard
            title="Role Management"
            desc="Create custom roles with granular permissions. Define exactly what each user type can access and modify."
            icon="🛡️"
          />
        </div>
      </section>

      {/* Management Tools */}
      <section className="border-y border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent dark:via-emerald-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Complete <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Management Suite</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ManagementCard
              title="Student Management"
              features={[
                "Bulk student profile import/export",
                "Academic record verification",
                "Eligibility status tracking",
                "Document management",
                "Performance analytics"
              ]}
            />
            <ManagementCard
              title="Company Management"
              features={[
                "Company verification & approval",
                "Job posting moderation",
                "Interview schedule coordination",
                "Feedback collection",
                "Partnership tracking"
              ]}
            />
            <ManagementCard
              title="Drive Management"
              features={[
                "Multi-company drive coordination",
                "Timeline and deadline management",
                "Round-wise candidate tracking",
                "Resource allocation",
                "Drive performance reports"
              ]}
            />
            <ManagementCard
              title="Reporting & Analytics"
              features={[
                "Placement statistics & trends",
                "Department-wise analysis",
                "Company-wise reports",
                "Custom report builder",
                "Historical data comparison"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-12 shadow-2xl">
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Placement Process?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join leading educational institutions using our platform to streamline placement management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-white text-emerald-600 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Request Demo
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
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 text-white font-bold text-2xl shadow-lg">
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
      <span className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{value}</span>
    </div>
  );
}

function AdvancedFeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function ManagementCard({ title, features }: { title: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 hover:shadow-lg transition-all duration-300">
      <h3 className="font-semibold text-xl mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
            <span className="text-sm text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
