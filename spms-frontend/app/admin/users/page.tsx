"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const tabs = [
    { id: "all", label: "All Users", count: 1331 },
    { id: "students", label: "Students", count: 1245 },
    { id: "companies", label: "Companies", count: 86 },
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
                  <h1 className="text-3xl font-bold mb-2">User Management 👥</h1>
                  <p className="text-white">Manage students, companies, and administrators</p>
                </div>
                <button className="px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
                  + Add New User
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Search and Stats */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by name, email, or registration number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white font-semibold rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors">
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard icon="👥" label="Total Users" value="1,331" color="from-slate-600 to-gray-600" />
                <StatCard icon="👨‍🎓" label="Students" value="1,245" color="from-blue-600 to-cyan-600" />
                <StatCard icon="🏢" label="Companies" value="86" color="from-purple-600 to-pink-600" />
                <StatCard icon="✅" label="Active Today" value="423" color="from-green-600 to-emerald-600" />
              </div>
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

            {/* Users List */}
            <div className="grid gap-6">
              {activeTab !== "companies" && (
                <>
                  <UserCard
                    type="student"
                    name="Rajesh Kumar"
                    email="rajesh.kumar@email.com"
                    phone="+91 98765 43210"
                    regNumber="21CS101"
                    course="B.Tech Computer Science"
                    year="Final Year"
                    cgpa="8.5"
                    status="Active"
                    joinDate="Sep 2021"
                  />
                  <UserCard
                    type="student"
                    name="Priya Sharma"
                    email="priya.sharma@email.com"
                    phone="+91 98765 43211"
                    regNumber="21IT102"
                    course="B.Tech Information Technology"
                    year="Final Year"
                    cgpa="9.2"
                    status="Active"
                    joinDate="Sep 2021"
                  />
                </>
              )}
              {activeTab !== "students" && (
                <>
                  <UserCard
                    type="company"
                    name="Infosys Limited"
                    email="hr@infosys.com"
                    phone="+91 80 2852 0261"
                    industry="IT Services"
                    size="250,000+ employees"
                    location="Bangalore"
                    activeJobs="5"
                    status="Verified"
                    joinDate="Jan 2024"
                  />
                  <UserCard
                    type="company"
                    name="TCS"
                    email="recruitment@tcs.com"
                    phone="+91 22 6778 9595"
                    industry="IT Services"
                    size="500,000+ employees"
                    location="Mumbai"
                    activeJobs="3"
                    status="Verified"
                    joinDate="Feb 2024"
                  />
                </>
              )}
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

function UserCard({ type, name, email, phone, status, joinDate, ...details }: any) {
  const isStudent = type === "student";
  
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-full ${isStudent ? "bg-gradient-to-br from-blue-600 to-cyan-600" : "bg-gradient-to-br from-purple-600 to-pink-600"} flex items-center justify-center text-white font-bold text-2xl`}>
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-xl text-black">{name}</h3>
            <span className={`px-3 py-1 ${status === "Active" || status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} text-xs font-bold rounded-full`}>
              {status}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">
              {isStudent ? "Student" : "Company"}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-2 mb-4 text-sm text-gray-900 font-medium">
            <div>📧 {email}</div>
            <div>📱 {phone}</div>
            {isStudent ? (
              <>
                <div>🎓 {details.course}</div>
                <div>📚 {details.year}</div>
                <div>🔢 Reg: {details.regNumber}</div>
                <div>📊 CGPA: {details.cgpa}</div>
              </>
            ) : (
              <>
                <div>🏢 {details.industry}</div>
                <div>👥 {details.size}</div>
                <div>📍 {details.location}</div>
                <div>📝 {details.activeJobs} Active Jobs</div>
              </>
            )}
            <div>📅 Joined: {joinDate}</div>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium text-sm">
              View Full Profile
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
              Edit
            </button>
            <button className="px-4 py-2 bg-yellow-50 text-yellow-700 border border-yellow-300 rounded-lg hover:bg-yellow-100 transition-colors text-sm font-medium">
              Suspend
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
