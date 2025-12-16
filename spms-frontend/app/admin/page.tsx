"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleAction = (action: string) => {
    setModalType(action);
    setShowActionModal(true);
  };

  const closeModal = () => {
    setShowActionModal(false);
    setModalType("");
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
        
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.username || "Admin"}! 👨‍💼</h1>
                  <p className="text-white/90 text-lg">Complete control over the placement ecosystem</p>
                </div>
                <button 
                  onClick={() => handleAction("settings")}
                  className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  System Settings
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard icon="👨‍🎓" label="Total Students" value="1,245" color="from-blue-600 to-cyan-600" />
                  <StatCard icon="🏢" label="Companies" value="86" color="from-purple-600 to-pink-600" />
                  <StatCard icon="📝" label="Active Drives" value="12" color="from-green-600 to-emerald-600" />
                  <StatCard icon="✅" label="Placements" value="542" color="from-orange-600 to-red-600" />
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Recent Activities</h2>
                  <div className="space-y-4">
                    <ActivityItem 
                      icon="🎉"
                      title="New Company Registered"
                      description="TCS joined the platform"
                      time="2 hours ago"
                      type="success"
                    />
                    <ActivityItem 
                      icon="📝"
                      title="Drive Created"
                      description="Infosys Campus Drive 2025 scheduled"
                      time="5 hours ago"
                      type="info"
                    />
                    <ActivityItem 
                      icon="👨‍🎓"
                      title="Student Registered"
                      description="25 new students joined"
                      time="1 day ago"
                      type="success"
                    />
                    <ActivityItem 
                      icon="⚠️"
                      title="System Alert"
                      description="Database backup completed"
                      time="2 days ago"
                      type="warning"
                    />
                  </div>
                </div>

                {/* Active Drives */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Active Placement Drives</h2>
                    <Link href="/admin/drives" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
                      View All →
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <DriveCard 
                      company="Infosys"
                      position="Software Engineer"
                      applicants={234}
                      deadline="Dec 20, 2025"
                      status="Active"
                    />
                    <DriveCard 
                      company="TCS"
                      position="System Engineer"
                      applicants={189}
                      deadline="Dec 22, 2025"
                      status="Active"
                    />
                    <DriveCard 
                      company="Wipro"
                      position="Project Engineer"
                      applicants={156}
                      deadline="Dec 25, 2025"
                      status="Active"
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
                    <ActionButton icon="📝" label="Create New Drive" onClick={() => handleAction("drive")} />
                    <ActionButton icon="👨‍🎓" label="Add Student" onClick={() => handleAction("student")} />
                    <ActionButton icon="🏢" label="Add Company" onClick={() => handleAction("company")} />
                    <ActionButton icon="📊" label="Generate Report" onClick={() => window.location.href = "/admin/reports"} />
                    <ActionButton icon="📧" label="Send Notification" onClick={() => handleAction("notification")} />
                    <ActionButton icon="⚙️" label="System Settings" onClick={() => handleAction("settings")} />
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-300 p-6">
                  <h3 className="font-bold mb-4 text-gray-900">System Status</h3>
                  <div className="space-y-3">
                    <StatusItem label="Database" status="Operational" color="green" />
                    <StatusItem label="Email Service" status="Operational" color="green" />
                    <StatusItem label="Storage" status="85% Used" color="yellow" />
                    <StatusItem label="Last Backup" status="2 hours ago" color="green" />
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl border border-orange-300 p-6">
                  <h3 className="font-bold mb-4 text-gray-900">Pending Approvals</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 font-medium">Company Registrations</span>
                      <span className="px-2 py-1 bg-orange-200 text-orange-900 text-xs font-bold rounded-full">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 font-medium">Student Verifications</span>
                      <span className="px-2 py-1 bg-orange-200 text-orange-900 text-xs font-bold rounded-full">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 font-medium">Drive Requests</span>
                      <span className="px-2 py-1 bg-orange-200 text-orange-900 text-xs font-bold rounded-full">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Modal */}
      {showActionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {modalType === "drive" && <CreateDriveForm onClose={closeModal} />}
            {modalType === "student" && <AddStudentForm onClose={closeModal} />}
            {modalType === "company" && <AddCompanyForm onClose={closeModal} />}
            {modalType === "notification" && <SendNotificationForm onClose={closeModal} />}
            {modalType === "settings" && <SystemSettingsForm onClose={closeModal} />}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="group bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 shadow-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-3 shadow-lg`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-foreground/70 font-semibold">{label}</div>
    </div>
  );
}

function ActivityItem({ icon, title, description, time, type }: any) {
  const colors: any = {
    success: "bg-green-100 text-green-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800"
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <span className={`text-2xl ${colors[type]} px-2 py-1 rounded-lg`}>{icon}</span>
      <div className="flex-1">
        <h4 className="font-bold text-sm text-black">{title}</h4>
        <p className="text-sm text-gray-900 font-medium">{description}</p>
        <p className="text-xs text-gray-700 font-medium mt-1">{time}</p>
      </div>
    </div>
  );
}

function DriveCard({ company, position, applicants, deadline, status }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-black">{company}</h4>
          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full">{status}</span>
        </div>
        <p className="text-sm text-gray-900 font-medium mb-2">{position}</p>
        <div className="flex items-center gap-4 text-xs text-gray-700 font-medium">
          <span>👥 {applicants} applicants</span>
          <span>📅 {deadline}</span>
        </div>
      </div>
      <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Manage
      </button>
    </div>
  );
}

function ActionButton({ icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="w-full px-4 py-3 flex items-center gap-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </button>
  );
}

function StatusItem({ label, status, color }: any) {
  const colors: any = {
    green: "bg-green-200 text-green-900",
    yellow: "bg-yellow-200 text-yellow-900",
    red: "bg-red-200 text-red-900"
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-900 font-medium">{label}</span>
      <span className={`px-2 py-1 ${colors[color]} text-xs font-bold rounded-full`}>{status}</span>
    </div>
  );
}

// Form Components
function CreateDriveForm({ onClose }: any) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    package: "",
    eligibility: "",
    deadline: "",
    description: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Placement drive created successfully!");
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Create New Placement Drive</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Company Name</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="e.g., Infosys"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Position</label>
          <input
            type="text"
            required
            value={formData.position}
            onChange={(e) => setFormData({...formData, position: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="e.g., Software Engineer"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Package (LPA)</label>
            <input
              type="text"
              required
              value={formData.package}
              onChange={(e) => setFormData({...formData, package: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="e.g., 7-9"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Deadline</label>
            <input
              type="date"
              required
              value={formData.deadline}
              onChange={(e) => setFormData({...formData, deadline: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Eligibility Criteria</label>
          <input
            type="text"
            required
            value={formData.eligibility}
            onChange={(e) => setFormData({...formData, eligibility: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="e.g., B.Tech CSE/IT - CGPA 7.0+"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Description</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Enter drive description..."
          />
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium"
          >
            Create Drive
          </button>
        </div>
      </form>
    </div>
  );
}

function AddStudentForm({ onClose }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Student added successfully!");
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Add New Student</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Full Name</label>
            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Registration Number</label>
            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
            <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Course</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500">
              <option value="">Select Course</option>
              <option>B.Tech Computer Science</option>
              <option>B.Tech IT</option>
              <option>B.Tech Electronics</option>
              <option>B.Tech Mechanical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Year</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500">
              <option value="">Select Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Final Year</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">Cancel</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium">Add Student</button>
        </div>
      </form>
    </div>
  );
}

function AddCompanyForm({ onClose }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Company added successfully!");
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Add New Company</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Company Name</label>
            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Industry</label>
            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
            <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Website</label>
          <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" />
        </div>
        <div className="flex gap-3 pt-4">
          <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">Cancel</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium">Add Company</button>
        </div>
      </form>
    </div>
  );
}

function SendNotificationForm({ onClose }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Notification sent successfully!");
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Notification</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Recipient Group</label>
          <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500">
            <option value="">Select Group</option>
            <option>All Students</option>
            <option>All Companies</option>
            <option>Final Year Students</option>
            <option>Specific Department</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Subject</label>
          <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="Enter notification subject" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
          <textarea required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="Enter notification message..." />
        </div>
        <div className="flex gap-3 pt-4">
          <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">Cancel</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium">Send Notification</button>
        </div>
      </form>
    </div>
  );
}

function SystemSettingsForm({ onClose }: any) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">System Settings</h3>
      <div className="space-y-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Email Notifications</h4>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-5 h-5" />
            <span className="text-sm text-gray-800">Enable email notifications</span>
          </label>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Auto-backup</h4>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-5 h-5" />
            <span className="text-sm text-gray-800">Enable daily auto-backup</span>
          </label>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Maintenance Mode</h4>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-sm text-gray-800">Enable maintenance mode</span>
          </label>
        </div>
        <div className="flex gap-3 pt-4">
          <button onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">Close</button>
          <button onClick={() => { alert("Settings saved!"); onClose(); }} className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium">Save Settings</button>
        </div>
      </div>
    </div>
  );
}

