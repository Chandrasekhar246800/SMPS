"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StudentsPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.username || "Student"}! 👋</h1>
                  <p className="text-white/90 text-lg">Your personalized career dashboard</p>
                </div>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Complete Profile
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard
                icon="📝"
                title="Applications"
                value="12"
                subtitle="3 pending"
                color="from-blue-500 to-cyan-500"
              />
              <StatCard
                icon="💼"
                title="Job Matches"
                value="45"
                subtitle="New this week"
                color="from-purple-500 to-pink-500"
              />
              <StatCard
                icon="📅"
                title="Interviews"
                value="3"
                subtitle="Scheduled"
                color="from-orange-500 to-red-500"
              />
              <StatCard
                icon="✅"
                title="Profile"
                value="85%"
                subtitle="Complete"
                color="from-green-500 to-emerald-500"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Job Postings */}
                <div className="bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Recommended Jobs</h2>
                    <Link href="/students/jobs" className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                      View All 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
              <div className="space-y-4">
                <JobCard
                  company="Tech Corp"
                  title="Software Engineer Intern"
                  location="Remote"
                  type="Internship"
                  salary="₹40K/month"
                  posted="2 days ago"
                  match={95}
                />
                <JobCard
                  company="Data Systems Inc"
                  title="Full Stack Developer"
                  location="Bangalore"
                  type="Full-time"
                  salary="₹8-12 LPA"
                  posted="5 days ago"
                  match={88}
                />
                <JobCard
                  company="Cloud Solutions"
                  title="DevOps Engineer"
                  location="Hybrid"
                  type="Full-time"
                  salary="₹10-15 LPA"
                  posted="1 week ago"
                  match={82}
                />
              </div>
            </div>

            {/* My Applications */}
            <div className="bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">My Applications</h2>
                <Link href="/students/applications" className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  View All 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                <ApplicationCard
                  company="Tech Corp"
                  role="Software Engineer"
                  appliedDate="Dec 10, 2025"
                  status="Under Review"
                  statusColor="yellow"
                />
                <ApplicationCard
                  company="Innovation Labs"
                  role="Frontend Developer"
                  appliedDate="Dec 8, 2025"
                  status="Interview Scheduled"
                  statusColor="blue"
                />
                <ApplicationCard
                  company="StartupXYZ"
                  role="Mobile Developer"
                  appliedDate="Dec 5, 2025"
                  status="Rejected"
                  statusColor="red"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <ActionButton icon="🔍" label="Search Jobs" />
                <ActionButton icon="📄" label="Update Resume" />
                <ActionButton icon="💬" label="Messages" badge="3" />
                <ActionButton icon="🔔" label="Notifications" badge="12" />
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Upcoming Interviews</h3>
              <div className="space-y-3">
                <InterviewCard
                  company="Tech Corp"
                  date="Dec 18"
                  time="10:00 AM"
                  type="Technical Round"
                />
                <InterviewCard
                  company="Innovation Labs"
                  date="Dec 20"
                  time="2:00 PM"
                  type="HR Round"
                />
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200 dark:border-purple-800 p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Complete Your Profile</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-foreground/80 font-semibold">Profile Strength</span>
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full shadow-lg" style={{ width: "85%" }}></div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-foreground/80 font-medium">Basic Info Added</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-foreground/80 font-medium">Resume Uploaded</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">○</span>
                  <span className="text-foreground/80 font-medium">Add Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">○</span>
                  <span className="text-foreground/80 font-medium">Add Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}

function StatCard({ icon, title, value, subtitle, color }: any) {
  return (
    <div className="group bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-lg`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-1 text-foreground">{value}</div>
      <div className="text-sm text-foreground font-semibold">{title}</div>
      <div className="text-xs text-foreground/60 font-medium mt-1">{subtitle}</div>
    </div>
  );
}

function JobCard({ company, title, location, type, salary, posted, match }: any) {
  return (
    <div className="group border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-transparent to-blue-50/30 dark:to-blue-950/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-foreground group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-foreground/70 font-medium mb-3">{company}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-semibold">{location}</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-semibold">{type}</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-semibold">{salary}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{match}% Match</div>
          <div className="text-xs text-foreground/60 font-medium mt-1">{posted}</div>
        </div>
      </div>
      <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all font-medium text-sm">
        Apply Now
      </button>
    </div>
  );
}

function ApplicationCard({ company, role, appliedDate, status, statusColor }: any) {
  const colors: any = {
    yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700",
    red: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700",
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700",
  };

  return (
    <div className="border border-black/10 dark:border-white/10 rounded-xl p-4 hover:shadow-md transition-shadow bg-white dark:bg-black">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-bold mb-1 text-foreground">{role}</h4>
          <p className="text-sm text-foreground/70 font-semibold mb-2">{company}</p>
          <p className="text-xs text-foreground/60 font-medium">Applied: {appliedDate}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors[statusColor]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, badge }: any) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg hover:bg-foreground/5 hover:border-blue-500/50 transition-all text-left group">
      <span className="text-xl">{icon}</span>
      <span className="flex-1 font-semibold text-sm text-foreground group-hover:text-blue-600 transition-colors">{label}</span>
      {badge && (
        <span className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-bold shadow-lg">{badge}</span>
      )}
    </button>
  );
}

function InterviewCard({ company, date, time, type }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
          {date.split(" ")[1]}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm mb-1 text-foreground">{company}</h4>
          <p className="text-xs text-foreground/70 font-semibold mb-1">{type}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">{date} • {time}</p>
        </div>
      </div>
    </div>
  );
}
