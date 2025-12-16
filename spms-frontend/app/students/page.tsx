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
    <div className="bg-background">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username || "Student"}! 👋</h1>
              <p className="text-white">Your student dashboard</p>
            </div>
            <button className="px-6 py-3 bg-white text-cyan-800 font-bold rounded-lg hover:bg-cyan-50 transition-colors shadow-sm">
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
            color="from-blue-600 to-cyan-600"
          />
          <StatCard
            icon="💼"
            title="Job Matches"
            value="45"
            subtitle="New this week"
            color="from-purple-600 to-pink-600"
          />
          <StatCard
            icon="📅"
            title="Interviews"
            value="3"
            subtitle="Scheduled"
            color="from-orange-600 to-red-600"
          />
          <StatCard
            icon="✅"
            title="Profile"
            value="85%"
            subtitle="Complete"
            color="from-green-600 to-emerald-600"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Job Postings */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
                <Link href="#" className="text-sm text-blue-800 hover:text-blue-900 font-bold">
                  View All →
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
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Applications</h2>
                <Link href="#" className="text-sm text-blue-800 hover:text-blue-900 font-bold">
                  View All →
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
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold mb-4 text-gray-900">Quick Actions</h3>
              <div className="space-y-3">
                <ActionButton icon="🔍" label="Search Jobs" />
                <ActionButton icon="📄" label="Update Resume" />
                <ActionButton icon="💬" label="Messages" badge="3" />
                <ActionButton icon="🔔" label="Notifications" badge="12" />
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border border-blue-300 p-6">
              <h3 className="font-bold mb-4 text-gray-900">Upcoming Interviews</h3>
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
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border border-purple-300 p-6">
              <h3 className="font-bold mb-4 text-gray-900">Complete Your Profile</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-900 font-semibold">Profile Strength</span>
                  <span className="font-bold text-purple-800">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span className="text-gray-900 font-medium">Basic Info Added</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span className="text-gray-900 font-medium">Resume Uploaded</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-700 font-bold">○</span>
                  <span className="text-gray-900 font-medium">Add Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-700 font-bold">○</span>
                  <span className="text-gray-900 font-medium">Add Projects</span>
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

function JobCard({ company, title, location, type, salary, posted, match }: any) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-black">{title}</h3>
          <p className="text-sm text-gray-900 font-semibold mb-2">{company}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">{location}</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">{type}</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-semibold">{salary}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-green-900">{match}% Match</div>
          <div className="text-xs text-gray-900 font-semibold mt-1">{posted}</div>
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors font-medium text-sm">
        Apply Now
      </button>
    </div>
  );
}

function ApplicationCard({ company, role, appliedDate, status, statusColor }: any) {
  const colors: any = {
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    red: "bg-red-100 text-red-800 border-red-300",
    green: "bg-green-100 text-green-800 border-green-300",
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-bold mb-1 text-black">{role}</h4>
          <p className="text-sm text-gray-900 font-semibold mb-2">{company}</p>
          <p className="text-xs text-gray-900 font-medium">Applied: {appliedDate}</p>
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
    <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
      <span className="text-xl">{icon}</span>
      <span className="flex-1 font-bold text-sm text-black">{label}</span>
      {badge && (
        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">{badge}</span>
      )}
    </button>
  );
}

function InterviewCard({ company, date, time, type }: any) {
  return (
    <div className="bg-white rounded-lg p-3 border border-blue-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
          {date.split(" ")[1]}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm mb-1 text-black">{company}</h4>
          <p className="text-xs text-gray-900 font-semibold mb-1">{type}</p>
          <p className="text-xs text-blue-900 font-bold">{date} • {time}</p>
        </div>
      </div>
    </div>
  );
}
