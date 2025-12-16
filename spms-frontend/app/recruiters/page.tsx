"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RecruitersPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-rose-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(192,38,211,0.1),transparent_50%)]" />
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username || "Recruiter"}! 💼</h1>
              <p className="text-purple-100">Your recruitment dashboard</p>
            </div>
            <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg">
              Post New Job
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="📢"
            title="Active Jobs"
            value="8"
            subtitle="3 closing soon"
            color="from-purple-500 to-pink-500"
          />
          <StatCard
            icon="📝"
            title="Applications"
            value="234"
            subtitle="New this week"
            color="from-blue-500 to-cyan-500"
          />
          <StatCard
            icon="👥"
            title="Candidates"
            value="156"
            subtitle="In pipeline"
            color="from-orange-500 to-red-500"
          />
          <StatCard
            icon="✅"
            title="Hired"
            value="42"
            subtitle="This season"
            color="from-green-500 to-emerald-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Job Postings */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Active Job Postings</h2>
                <Link href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                <JobPostingCard
                  title="Software Engineer"
                  location="Remote"
                  type="Full-time"
                  applications={45}
                  shortlisted={12}
                  posted="3 days ago"
                  status="active"
                />
                <JobPostingCard
                  title="Data Analyst"
                  location="Bangalore"
                  type="Internship"
                  applications={67}
                  shortlisted={8}
                  posted="1 week ago"
                  status="active"
                />
                <JobPostingCard
                  title="Product Manager"
                  location="Hybrid"
                  type="Full-time"
                  applications={23}
                  shortlisted={5}
                  posted="2 days ago"
                  status="closing"
                />
              </div>
            </div>

            {/* Candidate Pipeline */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Candidate Pipeline</h2>
                <Link href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Manage →
                </Link>
              </div>
              <div className="space-y-4">
                <CandidateCard
                  name="Rahul Sharma"
                  role="Software Engineer"
                  skills={["React", "Node.js", "MongoDB"]}
                  cgpa="8.5"
                  status="Interview Scheduled"
                  statusColor="blue"
                />
                <CandidateCard
                  name="Priya Patel"
                  role="Data Analyst"
                  skills={["Python", "SQL", "Tableau"]}
                  cgpa="9.2"
                  status="Under Review"
                  statusColor="yellow"
                />
                <CandidateCard
                  name="Amit Kumar"
                  role="Product Manager"
                  skills={["Product Strategy", "Agile", "Analytics"]}
                  cgpa="8.8"
                  status="Selected"
                  statusColor="green"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-lg p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <ActionButton icon="➕" label="Post Job" />
                <ActionButton icon="🔍" label="Search Candidates" />
                <ActionButton icon="📅" label="Schedule Interview" />
                <ActionButton icon="💬" label="Messages" badge="5" />
              </div>
            </div>

            {/* Scheduled Interviews */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6">
              <h3 className="font-bold mb-4">Scheduled Interviews</h3>
              <div className="space-y-3">
                <InterviewCard
                  candidate="Rahul Sharma"
                  date="Dec 18"
                  time="10:00 AM"
                  round="Technical"
                />
                <InterviewCard
                  candidate="Neha Gupta"
                  date="Dec 19"
                  time="2:00 PM"
                  round="HR"
                />
                <InterviewCard
                  candidate="Vijay Singh"
                  date="Dec 20"
                  time="11:00 AM"
                  round="Final"
                />
              </div>
            </div>

            {/* Application Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="font-bold mb-4">Application Trends</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-lg font-bold text-blue-600">87</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Week</span>
                  <span className="text-lg font-bold text-gray-700">64</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                  <span className="text-sm text-gray-600">Growth</span>
                  <span className="text-lg font-bold text-green-600">+36%</span>
                </div>
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
    <div className="bg-white rounded-2xl border border-black/10 shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-lg`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600 font-medium">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
    </div>
  );
}

function JobPostingCard({ title, location, type, applications, shortlisted, posted, status }: any) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {status === "closing" && (
              <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                Closing Soon
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">{location}</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{type}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-gray-600">Applications: </span>
              <span className="font-semibold">{applications}</span>
            </div>
            <div>
              <span className="text-gray-600">Shortlisted: </span>
              <span className="font-semibold text-green-600">{shortlisted}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">{posted}</div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium text-sm">
          View Applications
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Edit
        </button>
      </div>
    </div>
  );
}

function CandidateCard({ name, role, skills, cgpa, status, statusColor }: any) {
  const colors: any = {
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    red: "bg-red-100 text-red-700 border-red-200",
    green: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{name}</h4>
          <p className="text-sm text-gray-600 mb-2">{role}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {skills.map((skill: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500">CGPA: {cgpa}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[statusColor]}`}>
          {status}
        </span>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
          View Profile
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, badge }: any) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
      <span className="text-xl">{icon}</span>
      <span className="flex-1 font-medium text-sm">{label}</span>
      {badge && (
        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">{badge}</span>
      )}
    </button>
  );
}

function InterviewCard({ candidate, date, time, round }: any) {
  return (
    <div className="bg-white rounded-lg p-3 border border-purple-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
          {date.split(" ")[1]}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-1">{candidate}</h4>
          <p className="text-xs text-gray-600 mb-1">{round} Round</p>
          <p className="text-xs text-purple-600 font-medium">{date} • {time}</p>
        </div>
      </div>
    </div>
  );
}
