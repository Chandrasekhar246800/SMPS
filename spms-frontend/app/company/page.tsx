"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CompanyDashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username || "Company"}! 🏢</h1>
                <p className="text-white">Your recruitment dashboard</p>
              </div>
              <button className="px-6 py-3 bg-white text-indigo-800 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-sm">
                Post New Job
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon="📋"
              title="Active Jobs"
              value="8"
              subtitle="2 expiring soon"
              color="from-blue-600 to-cyan-600"
            />
            <StatCard
              icon="👥"
              title="Total Applicants"
              value="342"
              subtitle="89 new this week"
              color="from-purple-600 to-pink-600"
            />
            <StatCard
              icon="✅"
              title="Shortlisted"
              value="45"
              subtitle="12 pending review"
              color="from-green-600 to-emerald-600"
            />
            <StatCard
              icon="🎯"
              title="Hired"
              value="12"
              subtitle="This month"
              color="from-orange-600 to-red-600"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Applications */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                  <Link href="/company/candidates" className="text-sm text-blue-800 hover:text-blue-900 font-bold">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  <CandidateCard
                    name="Rajesh Kumar"
                    position="Software Engineer Intern"
                    appliedDate="2 hours ago"
                    experience="Final Year"
                    skills={["React", "Node.js", "MongoDB"]}
                    match={95}
                  />
                  <CandidateCard
                    name="Priya Sharma"
                    position="Full Stack Developer"
                    appliedDate="5 hours ago"
                    experience="2 years"
                    skills={["Java", "Spring Boot", "Angular"]}
                    match={88}
                  />
                  <CandidateCard
                    name="Amit Patel"
                    position="DevOps Engineer"
                    appliedDate="1 day ago"
                    experience="3 years"
                    skills={["AWS", "Docker", "Kubernetes"]}
                    match={82}
                  />
                </div>
              </div>

              {/* Active Job Posts */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Active Job Posts</h2>
                  <Link href="/company/jobs" className="text-sm text-blue-800 hover:text-blue-900 font-bold">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  <JobPostCard
                    title="Software Engineer Intern"
                    applicants={89}
                    posted="3 days ago"
                    status="Active"
                  />
                  <JobPostCard
                    title="Full Stack Developer"
                    applicants={145}
                    posted="1 week ago"
                    status="Active"
                  />
                  <JobPostCard
                    title="DevOps Engineer"
                    applicants={67}
                    posted="2 weeks ago"
                    status="Expiring Soon"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-bold mb-4 text-gray-900">Quick Actions</h3>
                <div className="space-y-3">
                  <ActionButton icon="➕" label="Post New Job" />
                  <ActionButton icon="📊" label="View Analytics" />
                  <ActionButton icon="💬" label="Messages" badge="8" />
                  <ActionButton icon="🔔" label="Notifications" badge="24" />
                </div>
              </div>

              {/* Upcoming Interviews */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border border-blue-300 p-6">
                <h3 className="font-bold mb-4 text-gray-900">Scheduled Interviews</h3>
                <div className="space-y-3">
                  <InterviewCard
                    candidate="Rajesh Kumar"
                    date="Dec 18"
                    time="10:00 AM"
                    type="Technical Round"
                  />
                  <InterviewCard
                    candidate="Priya Sharma"
                    date="Dec 20"
                    time="2:00 PM"
                    type="HR Round"
                  />
                </div>
              </div>

              {/* Profile Completion */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border border-purple-300 p-6">
                <h3 className="font-bold mb-4 text-gray-900">Company Profile</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-900 font-semibold">Completion</span>
                    <span className="font-bold text-purple-800">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-900 font-medium">Company Info</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-900 font-medium">Logo Added</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-700 font-bold">○</span>
                    <span className="text-gray-900 font-medium">Add Culture Info</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-700 font-bold">○</span>
                    <span className="text-gray-900 font-medium">Add Benefits</span>
                  </li>
                </ul>
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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-sm`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-1 text-black">{value}</div>
      <div className="text-sm text-gray-900 font-bold">{title}</div>
      <div className="text-xs text-gray-900 font-semibold mt-1">{subtitle}</div>
    </div>
  );
}

function CandidateCard({ name, position, appliedDate, experience, skills, match }: any) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-black">{name}</h3>
          <p className="text-sm text-gray-900 font-semibold mb-2">{position}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-900 font-medium">
            <span>📅 {appliedDate}</span>
            <span>💼 {experience}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-green-900">{match}% Match</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-sm">
          View Profile
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Shortlist
        </button>
      </div>
    </div>
  );
}

function JobPostCard({ title, applicants, posted, status }: any) {
  const statusColors: any = {
    "Active": "bg-green-100 text-green-800 border-green-300",
    "Expiring Soon": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Closed": "bg-gray-100 text-gray-800 border-gray-300",
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold mb-1 text-black">{title}</h4>
          <div className="flex items-center gap-4 text-xs text-gray-900 font-medium">
            <span>👥 {applicants} applicants</span>
            <span>📅 Posted {posted}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
          View Applications
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Edit
        </button>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, badge }: any) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
      <span className="text-xl">{icon}</span>
      <span className="flex-1 font-bold text-sm text-black">{label}</span>
      {badge && (
        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">{badge}</span>
      )}
    </button>
  );
}

function InterviewCard({ candidate, date, time, type }: any) {
  return (
    <div className="bg-white rounded-lg p-3 border border-blue-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {date.split(" ")[1]}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm mb-1 text-black">{candidate}</h4>
          <p className="text-xs text-gray-900 font-semibold mb-1">{type}</p>
          <p className="text-xs text-blue-900 font-bold">{date} • {time}</p>
        </div>
      </div>
    </div>
  );
}
