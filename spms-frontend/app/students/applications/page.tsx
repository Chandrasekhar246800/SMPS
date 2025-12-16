"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ApplicationsPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const tabs = [
    { id: "all", label: "All Applications", count: 12 },
    { id: "pending", label: "Pending", count: 3 },
    { id: "reviewing", label: "Under Review", count: 5 },
    { id: "shortlisted", label: "Shortlisted", count: 2 },
    { id: "rejected", label: "Rejected", count: 2 },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-3xl font-bold mb-2">My Applications 📝</h1>
              <p className="text-white">Track and manage all your job applications</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <StatCard icon="📝" label="Total" value="12" color="from-blue-400 to-cyan-400" />
              <StatCard icon="⏳" label="Pending" value="3" color="from-yellow-400 to-orange-400" />
              <StatCard icon="👀" label="Reviewing" value="5" color="from-purple-400 to-pink-400" />
              <StatCard icon="✅" label="Shortlisted" value="2" color="from-green-400 to-emerald-400" />
              <StatCard icon="❌" label="Rejected" value="2" color="from-red-400 to-rose-400" />
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
              <div className="border-b border-gray-200 overflow-x-auto">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? "border-b-2 border-blue-400 text-blue-500"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Applications List */}
              <div className="lg:col-span-2 space-y-4">
                <ApplicationCard
                  company="Tech Corp"
                  logo="TC"
                  role="Software Engineer Intern"
                  appliedDate="Dec 10, 2025"
                  status="Under Review"
                  statusColor="yellow"
                  location="Remote"
                  salary="₹40K/month"
                  timeline={[
                    { label: "Applied", date: "Dec 10", completed: true },
                    { label: "Screening", date: "Dec 12", completed: true },
                    { label: "Technical Round", date: "Dec 18", completed: false },
                    { label: "HR Round", date: "TBD", completed: false },
                  ]}
                />

                <ApplicationCard
                  company="Innovation Labs"
                  logo="IL"
                  role="Frontend Developer"
                  appliedDate="Dec 8, 2025"
                  status="Interview Scheduled"
                  statusColor="blue"
                  location="Mumbai"
                  salary="₹6-10 LPA"
                  timeline={[
                    { label: "Applied", date: "Dec 8", completed: true },
                    { label: "Screening", date: "Dec 10", completed: true },
                    { label: "Technical Round", date: "Dec 20 2PM", completed: false },
                    { label: "HR Round", date: "TBD", completed: false },
                  ]}
                />

                <ApplicationCard
                  company="Data Systems Inc"
                  logo="DS"
                  role="Full Stack Developer"
                  appliedDate="Dec 5, 2025"
                  status="Shortlisted"
                  statusColor="green"
                  location="Bangalore"
                  salary="₹8-12 LPA"
                  timeline={[
                    { label: "Applied", date: "Dec 5", completed: true },
                    { label: "Screening", date: "Dec 7", completed: true },
                    { label: "Technical Round", date: "Dec 12", completed: true },
                    { label: "HR Round", date: "Dec 22", completed: false },
                  ]}
                />

                <ApplicationCard
                  company="StartupXYZ"
                  logo="SX"
                  role="Mobile Developer"
                  appliedDate="Dec 3, 2025"
                  status="Rejected"
                  statusColor="red"
                  location="Remote"
                  salary="₹7-11 LPA"
                  timeline={[
                    { label: "Applied", date: "Dec 3", completed: true },
                    { label: "Screening", date: "Dec 5", completed: true },
                    { label: "Rejected", date: "Dec 8", completed: true },
                  ]}
                />

                <ApplicationCard
                  company="Cloud Solutions"
                  logo="CS"
                  role="DevOps Engineer"
                  appliedDate="Nov 28, 2025"
                  status="Pending"
                  statusColor="gray"
                  location="Hybrid"
                  salary="₹10-15 LPA"
                  timeline={[
                    { label: "Applied", date: "Nov 28", completed: true },
                    { label: "Screening", date: "Pending", completed: false },
                  ]}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Application Tips */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    Application Tips
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Follow up after 3-5 days if no response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Keep your resume updated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Prepare for common interview questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Research the company before interviews</span>
                    </li>
                  </ul>
                </div>

                {/* Upcoming Interviews */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="font-bold mb-4">📅 Upcoming Interviews</h3>
                  <div className="space-y-3">
                    <InterviewItem
                      company="Tech Corp"
                      date="Dec 18"
                      time="10:00 AM"
                      type="Technical"
                    />
                    <InterviewItem
                      company="Innovation Labs"
                      date="Dec 20"
                      time="2:00 PM"
                      type="Technical"
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6">
                  <h3 className="font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Link href="/students/jobs" className="block w-full px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition-colors text-sm font-medium text-center">
                      Find More Jobs
                    </Link>
                    <button className="w-full px-4 py-2 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium">
                      Update Resume
                    </button>
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

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-xl mb-3`}>
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs text-gray-800">{label}</div>
    </div>
  );
}

function ApplicationCard({ company, logo, role, appliedDate, status, statusColor, location, salary, timeline }: any) {
  const statusColors: any = {
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    red: "bg-red-50 text-red-600 border-red-200",
    green: "bg-green-50 text-green-600 border-green-200",
    gray: "bg-gray-50 text-gray-800 border-gray-200",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {logo}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg mb-1">{role}</h3>
              <p className="text-sm text-gray-800">{company}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[statusColor]}`}>
              {status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{location}</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">{salary}</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Applied: {appliedDate}</span>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="flex items-center justify-between">
              {timeline.map((step: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                    step.completed ? "bg-green-400 text-white" : "bg-gray-200 text-gray-800"
                  }`}>
                    {step.completed ? "✓" : idx + 1}
                  </div>
                  <div className="text-xs text-center">
                    <div className="font-medium">{step.label}</div>
                    <div className="text-gray-700">{step.date}</div>
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className={`absolute top-4 left-1/2 w-full h-0.5 ${
                      step.completed ? "bg-green-300" : "bg-gray-200"
                    }`} style={{ zIndex: -1 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-200">
        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
          View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Withdraw
        </button>
      </div>
    </div>
  );
}

function InterviewItem({ company, date, time, type }: any) {
  return (
    <div className="p-3 border border-blue-200 rounded-lg bg-blue-50">
      <div className="flex items-center justify-between mb-1">
        <p className="font-semibold text-sm">{company}</p>
        <span className="px-2 py-0.5 bg-blue-200 text-blue-700 text-xs rounded-full">{type}</span>
      </div>
      <p className="text-xs text-gray-800">{date} • {time}</p>
    </div>
  );
}
