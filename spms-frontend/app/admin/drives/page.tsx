"use client";

import { useEffect, useState } from "react";

export default function DrivesPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const tabs = [
    { id: "all", label: "All Drives", count: 28 },
    { id: "active", label: "Active", count: 12 },
    { id: "upcoming", label: "Upcoming", count: 8 },
    { id: "completed", label: "Completed", count: 8 },
  ];

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50/30 to-zinc-50/30" />
        
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Placement Drives 📝</h1>
                  <p className="text-white">Manage all campus recruitment drives</p>
                </div>
                <button className="px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
                  + Create New Drive
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard icon="📝" label="Total Drives" value="28" color="from-slate-600 to-gray-600" />
              <StatCard icon="✅" label="Active" value="12" color="from-green-600 to-emerald-600" />
              <StatCard icon="📅" label="Upcoming" value="8" color="from-blue-600 to-cyan-600" />
              <StatCard icon="🏆" label="Completed" value="8" color="from-purple-600 to-pink-600" />
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
                          ? "border-b-2 border-slate-700 text-slate-700"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drives List */}
            <div className="grid gap-6">
              <DriveCard
                company="Infosys"
                logo="I"
                position="Software Engineer"
                type="Full-Time"
                ctc="₹7-9 LPA"
                eligibility="B.Tech CSE/IT - CGPA 7.0+"
                deadline="Dec 20, 2025"
                applicants={234}
                shortlisted={45}
                selected={0}
                status="Active"
                description="Looking for talented software engineers to join our team"
              />
              <DriveCard
                company="TCS"
                logo="T"
                position="System Engineer"
                type="Full-Time"
                ctc="₹3.5-4 LPA"
                eligibility="B.Tech All Branches - CGPA 6.0+"
                deadline="Dec 22, 2025"
                applicants={189}
                shortlisted={38}
                selected={0}
                status="Active"
                description="Mass recruitment drive for system engineer roles"
              />
              <DriveCard
                company="Wipro"
                logo="W"
                position="Project Engineer"
                type="Full-Time"
                ctc="₹3.8-4.5 LPA"
                eligibility="B.Tech All Branches - CGPA 6.5+"
                deadline="Dec 25, 2025"
                applicants={156}
                shortlisted={32}
                selected={0}
                status="Active"
                description="Project engineer positions across multiple domains"
              />
              <DriveCard
                company="Amazon"
                logo="A"
                position="SDE Intern"
                type="Internship"
                ctc="₹80,000/month"
                eligibility="B.Tech CSE/IT Final Year - CGPA 8.0+"
                deadline="Jan 5, 2026"
                applicants={0}
                shortlisted={0}
                selected={0}
                status="Upcoming"
                description="6-month internship with PPO opportunity"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-lg mb-2`}>
        {icon}
      </div>
      <div className="text-xl font-bold text-black mb-1">{value}</div>
      <div className="text-xs text-gray-900 font-semibold">{label}</div>
    </div>
  );
}

function DriveCard({ company, logo, position, type, ctc, eligibility, deadline, applicants, shortlisted, selected, status, description }: any) {
  const statusColors: any = {
    Active: "bg-green-100 text-green-800",
    Upcoming: "bg-blue-100 text-blue-800",
    Completed: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-gray-700 flex items-center justify-center text-white font-bold text-2xl">
          {logo}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-xl text-black">{company}</h3>
            <span className={`px-3 py-1 ${statusColors[status]} text-xs font-bold rounded-full`}>{status}</span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">{position}</h4>
          <p className="text-sm text-gray-800 mb-3">{description}</p>
          
          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-900 font-medium mb-4">
            <div>💼 {type}</div>
            <div>💰 {ctc}</div>
            <div>🎓 {eligibility}</div>
            <div>📅 Deadline: {deadline}</div>
          </div>

          <div className="flex gap-6 text-sm mb-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Applicants:</span>
              <span className="font-bold text-black">{applicants}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Shortlisted:</span>
              <span className="font-bold text-black">{shortlisted}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Selected:</span>
              <span className="font-bold text-black">{selected}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium text-sm">
              View Details
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
              View Applicants
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Edit Drive
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              ⋮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
