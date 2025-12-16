"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CandidatesPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    experience: "all",
    location: "all",
    skills: "all"
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const tabs = [
    { id: "all", label: "All Candidates", count: 342 },
    { id: "shortlisted", label: "Shortlisted", count: 45 },
    { id: "interviewing", label: "Interviewing", count: 18 },
    { id: "hired", label: "Hired", count: 12 },
    { id: "rejected", label: "Rejected", count: 67 },
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
              <h1 className="text-3xl font-bold mb-2">Candidate Management 👥</h1>
              <p className="text-white">Review and manage all job applicants</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search candidates by name, skills, or position..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <select
                  value={selectedFilters.experience}
                  onChange={(e) => setSelectedFilters({...selectedFilters, experience: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>

                <select
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Locations</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>

                <select
                  value={selectedFilters.skills}
                  onChange={(e) => setSelectedFilters({...selectedFilters, skills: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Skills</option>
                  <option value="react">React</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="aws">AWS</option>
                </select>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <StatCard icon="👥" label="Total" value="342" color="from-blue-600 to-cyan-600" />
              <StatCard icon="⭐" label="Shortlisted" value="45" color="from-yellow-600 to-orange-600" />
              <StatCard icon="💬" label="Interviewing" value="18" color="from-purple-600 to-pink-600" />
              <StatCard icon="✅" label="Hired" value="12" color="from-green-600 to-emerald-600" />
              <StatCard icon="❌" label="Rejected" value="67" color="from-red-600 to-rose-600" />
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

            {/* Candidates List */}
            <div className="grid gap-6">
              <CandidateCard
                name="Rajesh Kumar"
                email="rajesh.kumar@email.com"
                phone="+91 98765 43210"
                position="Software Engineer Intern"
                appliedDate="Dec 10, 2025"
                experience="Final Year"
                education="B.Tech Computer Science"
                location="Bangalore"
                skills={["React", "Node.js", "MongoDB", "TypeScript"]}
                match={95}
                resume="resume_rajesh.pdf"
              />
              <CandidateCard
                name="Priya Sharma"
                email="priya.sharma@email.com"
                phone="+91 98765 43211"
                position="Full Stack Developer"
                appliedDate="Dec 8, 2025"
                experience="2 years"
                education="B.Tech IT"
                location="Mumbai"
                skills={["Java", "Spring Boot", "Angular", "MySQL"]}
                match={88}
                resume="resume_priya.pdf"
              />
              <CandidateCard
                name="Amit Patel"
                email="amit.patel@email.com"
                phone="+91 98765 43212"
                position="DevOps Engineer"
                appliedDate="Dec 5, 2025"
                experience="3 years"
                education="B.E. Electronics"
                location="Pune"
                skills={["AWS", "Docker", "Kubernetes", "Jenkins"]}
                match={82}
                resume="resume_amit.pdf"
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

function CandidateCard({ name, email, phone, position, appliedDate, experience, education, location, skills, match, resume }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
            {name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-bold text-xl text-black">{name}</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                {match}% Match
              </span>
            </div>
            <p className="text-sm text-gray-900 font-semibold mb-2">Applied for: {position}</p>
            <div className="grid md:grid-cols-2 gap-2 mb-3 text-sm text-gray-900 font-medium">
              <div>📧 {email}</div>
              <div>📱 {phone}</div>
              <div>💼 {experience}</div>
              <div>🎓 {education}</div>
              <div>📍 {location}</div>
              <div>📅 Applied: {appliedDate}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-sm">
          View Full Profile
        </button>
        <button className="px-4 py-2 bg-green-50 text-green-700 border border-green-300 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
          Shortlist
        </button>
        <button className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
          Schedule Interview
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          📄 Resume
        </button>
      </div>
    </div>
  );
}
