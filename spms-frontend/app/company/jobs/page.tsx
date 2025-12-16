"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CompanyJobsPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const tabs = [
    { id: "all", label: "All Jobs", count: 12 },
    { id: "active", label: "Active", count: 8 },
    { id: "closed", label: "Closed", count: 3 },
    { id: "draft", label: "Draft", count: 1 },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">My Job Posts 📋</h1>
                  <p className="text-white">Manage your job listings and applications</p>
                </div>
                <button className="px-6 py-3 bg-white text-indigo-800 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-sm">
                  + Post New Job
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard icon="📋" label="Total Jobs" value="12" color="from-blue-600 to-cyan-600" />
              <StatCard icon="👥" label="Total Applicants" value="342" color="from-purple-600 to-pink-600" />
              <StatCard icon="👁️" label="Total Views" value="1,245" color="from-green-600 to-emerald-600" />
              <StatCard icon="✅" label="Hired" value="12" color="from-orange-600 to-red-600" />
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
                          ? "border-b-2 border-indigo-500 text-indigo-600"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job List */}
            <div className="grid gap-6">
              <JobCard
                title="Software Engineer Intern"
                location="Remote"
                type="Internship"
                salary="₹40K/month"
                posted="3 days ago"
                applicants={89}
                views={234}
                status="Active"
                skills={["React", "Node.js", "MongoDB"]}
              />
              <JobCard
                title="Full Stack Developer"
                location="Bangalore"
                type="Full-time"
                salary="₹8-12 LPA"
                posted="1 week ago"
                applicants={145}
                views={456}
                status="Active"
                skills={["Java", "Spring Boot", "Angular"]}
              />
              <JobCard
                title="DevOps Engineer"
                location="Hybrid"
                type="Full-time"
                salary="₹10-15 LPA"
                posted="2 weeks ago"
                applicants={67}
                views={189}
                status="Expiring Soon"
                skills={["AWS", "Docker", "Kubernetes"]}
              />
              <JobCard
                title="Frontend Developer"
                location="Mumbai"
                type="Full-time"
                salary="₹7-11 LPA"
                posted="3 weeks ago"
                applicants={98}
                views={312}
                status="Active"
                skills={["React", "TypeScript", "Tailwind"]}
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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-xl mb-3`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-black mb-1">{value}</div>
      <div className="text-xs text-gray-900 font-semibold">{label}</div>
    </div>
  );
}

function JobCard({ title, location, type, salary, posted, applicants, views, status, skills }: any) {
  const statusColors: any = {
    "Active": "bg-green-100 text-green-800 border-green-300",
    "Expiring Soon": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Closed": "bg-gray-100 text-gray-800 border-gray-300",
    "Draft": "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-xl text-black">{title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">{location}</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">{type}</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-semibold">{salary}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.map((skill: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="text-xs text-gray-900 font-medium mb-1">Applicants</div>
          <div className="text-xl font-bold text-black">{applicants}</div>
        </div>
        <div>
          <div className="text-xs text-gray-900 font-medium mb-1">Views</div>
          <div className="text-xl font-bold text-black">{views}</div>
        </div>
        <div>
          <div className="text-xs text-gray-900 font-medium mb-1">Posted</div>
          <div className="text-sm font-semibold text-gray-900">{posted}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Link
          href="/company/candidates"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-sm text-center"
        >
          View Applications
        </Link>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Edit
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          •••
        </button>
      </div>
    </div>
  );
}
