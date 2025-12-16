"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function JobsPage() {
  const [user, setUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: "all",
    location: "all",
    experience: "all",
    salary: "all"
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
      // Load applied jobs from localStorage
      const applied = localStorage.getItem(`applied_jobs_${JSON.parse(userData).userId}`);
      if (applied) {
        setAppliedJobs(new Set(JSON.parse(applied)));
      }
    }
  }, []);

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const confirmApply = () => {
    if (user && selectedJob) {
      const newApplied = new Set(appliedJobs);
      newApplied.add(selectedJob.id);
      setAppliedJobs(newApplied);
      localStorage.setItem(`applied_jobs_${user.userId}`, JSON.stringify([...newApplied]));
      alert(`Successfully applied to ${selectedJob.title} at ${selectedJob.company}!`);
      setShowApplyModal(false);
      setSelectedJob(null);
    }
  };

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-3xl font-bold mb-2">Find Your Dream Job 💼</h1>
              <p className="text-white">Browse and apply to opportunities that match your profile</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search jobs by title, company, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors">
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <select
                  value={selectedFilters.jobType}
                  onChange={(e) => setSelectedFilters({...selectedFilters, jobType: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="internship">Internship</option>
                  <option value="part-time">Part-time</option>
                </select>

                <select
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>

                <select
                  value={selectedFilters.experience}
                  onChange={(e) => setSelectedFilters({...selectedFilters, experience: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Any Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="2-5">2-5 Years</option>
                </select>

                <select
                  value={selectedFilters.salary}
                  onChange={(e) => setSelectedFilters({...selectedFilters, salary: e.target.value})}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Any Salary</option>
                  <option value="0-5">0-5 LPA</option>
                  <option value="5-10">5-10 LPA</option>
                  <option value="10-15">10-15 LPA</option>
                  <option value="15+">15+ LPA</option>
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Job Listings */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">245 Jobs Found</h2>
                  <select className="px-3 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm">
                    <option>Most Recent</option>
                    <option>Best Match</option>
                    <option>Highest Salary</option>
                  </select>
                </div>

                <JobCard
                  id="job1"
                  company="Tech Corp"
                  logo="TC"
                  title="Software Engineer Intern"
                  location="Remote"
                  type="Internship"
                  salary="₹40K/month"
                  skills={["React", "Node.js", "MongoDB"]}
                  posted="2 days ago"
                  applicants={145}
                  match={95}
                  onApply={handleApply}
                  isApplied={appliedJobs.has("job1")}
                />

                <JobCard
                  id="job2"
                  company="Data Systems Inc"
                  logo="DS"
                  title="Full Stack Developer"
                  location="Bangalore"
                  type="Full-time"
                  salary="₹8-12 LPA"
                  skills={["Java", "Spring Boot", "Angular"]}
                  posted="5 days ago"
                  applicants={203}
                  match={88}
                  onApply={handleApply}
                  isApplied={appliedJobs.has("job2")}
                />

                <JobCard
                  id="job3"
                  company="Cloud Solutions"
                  logo="CS"
                  title="DevOps Engineer"
                  location="Hybrid"
                  type="Full-time"
                  salary="₹10-15 LPA"
                  skills={["AWS", "Docker", "Kubernetes"]}
                  posted="1 week ago"
                  applicants={89}
                  match={82}
                  onApply={handleApply}
                  isApplied={appliedJobs.has("job3")}
                />

                <JobCard
                  id="job4"
                  company="Innovation Labs"
                  logo="IL"
                  title="Frontend Developer"
                  location="Mumbai"
                  type="Full-time"
                  salary="₹6-10 LPA"
                  skills={["React", "TypeScript", "Tailwind"]}
                  posted="3 days ago"
                  applicants={167}
                  match={90}
                  onApply={handleApply}
                  isApplied={appliedJobs.has("job4")}
                />

                <JobCard
                  id="job5"
                  company="StartupXYZ"
                  logo="SX"
                  title="Mobile Developer"
                  location="Remote"
                  type="Full-time"
                  salary="₹7-11 LPA"
                  skills={["React Native", "iOS", "Android"]}
                  posted="4 days ago"
                  applicants={98}
                  match={78}
                />

                <JobCard
                  company="Enterprise Tech"
                  logo="ET"
                  title="Backend Developer"
                  location="Hyderabad"
                  type="Full-time"
                  salary="₹9-14 LPA"
                  skills={["Python", "Django", "PostgreSQL"]}
                  posted="6 days ago"
                  applicants={134}
                  match={85}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-6">
                  <h3 className="font-bold mb-4">Your Stats</h3>
                  <div className="space-y-3">
                    <StatItem label="Profile Views" value="234" />
                    <StatItem label="Applications" value="12" />
                    <StatItem label="Shortlisted" value="5" />
                    <StatItem label="Interviews" value="3" />
                  </div>
                </div>

                {/* Featured Companies */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="font-bold mb-4">Featured Companies</h3>
                  <div className="space-y-3">
                    <CompanyCard name="Google" openings={23} />
                    <CompanyCard name="Microsoft" openings={18} />
                    <CompanyCard name="Amazon" openings={31} />
                    <CompanyCard name="Meta" openings={15} />
                  </div>
                </div>

                {/* Job Alerts */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6">
                  <h3 className="font-bold mb-2">🔔 Job Alerts</h3>
                  <p className="text-sm text-gray-800 mb-4">Get notified when new jobs match your profile</p>
                  <button className="w-full px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition-colors text-sm font-medium">
                    Set Up Alerts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowApplyModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Apply to {selectedJob.company}</h3>
            <div className="mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">{selectedJob.title}</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">{selectedJob.location}</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">{selectedJob.type}</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">{selectedJob.salary}</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Your profile will be submitted along with your resume and cover letter. The company will review your application and contact you if you're selected for the next round.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowApplyModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmApply}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors font-medium"
              >
                Confirm Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function JobCard({ id, company, logo, title, location, type, salary, skills, posted, applicants, match, onApply, isApplied }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {logo}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-gray-800">{company}</p>
            </div>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
              {match}% Match
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">{location}</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">{type}</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">{salary}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.map((skill: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-gray-700">
            <span>Posted {posted}</span>
            <span>{applicants} applicants</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {isApplied ? (
          <button 
            disabled
            className="flex-1 px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium text-sm cursor-not-allowed"
          >
            ✓ Applied
          </button>
        ) : (
          <button
            onClick={() => onApply({ id, title, company, location, type, salary })}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors font-medium text-sm"
          >
            Apply Now
          </button>
        )}
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

function StatItem({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-800">{label}</span>
      <span className="text-lg font-bold text-blue-500">{value}</span>
    </div>
  );
}

function CompanyCard({ name, openings }: any) {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-700">{openings} open positions</p>
      </div>
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
