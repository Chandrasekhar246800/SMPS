"use client";

import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedReport, setSelectedReport] = useState("placement");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleExportReport = () => {
    // Generate report content
    const reportContent = generateReportHTML();
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(reportContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Trigger print dialog after content loads
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const handleEmailReport = () => {
    if (email) {
      // Simulate sending email
      alert(`Report will be sent to ${email}`);
      setShowEmailModal(false);
      setEmail("");
    }
  };

  const generateReportHTML = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Placement Report - ${currentDate}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: Arial, sans-serif; 
            padding: 40px; 
            background: white;
            color: #000;
          }
          .header { 
            text-align: center; 
            margin-bottom: 40px; 
            border-bottom: 3px solid #475569;
            padding-bottom: 20px;
          }
          .header h1 { 
            font-size: 32px; 
            color: #475569; 
            margin-bottom: 10px;
          }
          .header p { 
            color: #64748b; 
            font-size: 14px;
          }
          .stats-grid { 
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            gap: 20px; 
            margin-bottom: 40px;
          }
          .stat-card { 
            border: 2px solid #e2e8f0; 
            padding: 20px; 
            border-radius: 8px;
            text-align: center;
          }
          .stat-card .value { 
            font-size: 28px; 
            font-weight: bold; 
            color: #000;
            margin-bottom: 5px;
          }
          .stat-card .label { 
            font-size: 12px; 
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
          }
          .section { 
            margin-bottom: 40px;
            page-break-inside: avoid;
          }
          .section-title { 
            font-size: 20px; 
            font-weight: bold; 
            margin-bottom: 20px;
            color: #475569;
            border-left: 4px solid #475569;
            padding-left: 15px;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 20px;
          }
          th, td { 
            padding: 12px; 
            text-align: left; 
            border-bottom: 1px solid #e2e8f0;
          }
          th { 
            background: #f1f5f9; 
            font-weight: bold;
            color: #475569;
          }
          tr:hover { background: #f8fafc; }
          .progress-bar { 
            background: #e2e8f0; 
            height: 20px; 
            border-radius: 10px; 
            overflow: hidden;
            margin-top: 5px;
          }
          .progress-fill { 
            background: #475569; 
            height: 100%; 
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 11px;
            font-weight: bold;
          }
          .footer { 
            text-align: center; 
            margin-top: 60px; 
            padding-top: 20px; 
            border-top: 2px solid #e2e8f0;
            color: #64748b;
            font-size: 12px;
          }
          @media print {
            body { padding: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📊 Student Placement Management System</h1>
          <p>Comprehensive Placement Report - Academic Year 2024-25</p>
          <p>Generated on ${currentDate}</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="value">87.3%</div>
            <div class="label">Placement Rate</div>
          </div>
          <div class="stat-card">
            <div class="value">542</div>
            <div class="label">Students Placed</div>
          </div>
          <div class="stat-card">
            <div class="value">₹6.5L</div>
            <div class="label">Average Package</div>
          </div>
          <div class="stat-card">
            <div class="value">₹45L</div>
            <div class="label">Highest Package</div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Department-wise Placement Statistics</h2>
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Total Students</th>
                <th>Placed</th>
                <th>Placement %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Computer Science</strong></td>
                <td>345</td>
                <td>317</td>
                <td>92%</td>
              </tr>
              <tr>
                <td><strong>Information Technology</strong></td>
                <td>280</td>
                <td>249</td>
                <td>89%</td>
              </tr>
              <tr>
                <td><strong>Electronics</strong></td>
                <td>220</td>
                <td>172</td>
                <td>78%</td>
              </tr>
              <tr>
                <td><strong>Mechanical</strong></td>
                <td>180</td>
                <td>117</td>
                <td>65%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2 class="section-title">Package Distribution</h2>
          <table>
            <thead>
              <tr>
                <th>Package Range</th>
                <th>Students Count</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>₹10L+ (High)</strong></td>
                <td>45</td>
                <td>8.3%</td>
              </tr>
              <tr>
                <td><strong>₹6-10L (Medium)</strong></td>
                <td>234</td>
                <td>43.2%</td>
              </tr>
              <tr>
                <td><strong>₹3-6L (Standard)</strong></td>
                <td>263</td>
                <td>48.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2 class="section-title">Top Recruiting Companies</h2>
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Students Hired</th>
                <th>Average Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Infosys</strong></td>
                <td>89</td>
                <td>₹7.2L</td>
              </tr>
              <tr>
                <td><strong>TCS</strong></td>
                <td>76</td>
                <td>₹3.8L</td>
              </tr>
              <tr>
                <td><strong>Wipro</strong></td>
                <td>65</td>
                <td>₹4.2L</td>
              </tr>
              <tr>
                <td><strong>Cognizant</strong></td>
                <td>54</td>
                <td>₹5.5L</td>
              </tr>
              <tr>
                <td><strong>Accenture</strong></td>
                <td>48</td>
                <td>₹6.8L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2 class="section-title">Recent High-Value Placements</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Reg. No.</th>
                <th>Company</th>
                <th>Package</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rajesh Kumar</strong></td>
                <td>21CS101</td>
                <td>Amazon</td>
                <td><strong>₹45L</strong></td>
                <td>Dec 15, 2025</td>
              </tr>
              <tr>
                <td><strong>Priya Sharma</strong></td>
                <td>21IT102</td>
                <td>Google</td>
                <td><strong>₹42L</strong></td>
                <td>Dec 14, 2025</td>
              </tr>
              <tr>
                <td><strong>Amit Patel</strong></td>
                <td>21CS103</td>
                <td>Microsoft</td>
                <td><strong>₹38L</strong></td>
                <td>Dec 13, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="footer">
          <p><strong>Student Placement Management System</strong></p>
          <p>This is an automatically generated report. For queries, contact placement@university.edu</p>
        </div>
      </body>
      </html>
    `;
  };

  const reportTypes = [
    { id: "placement", label: "Placement Statistics", icon: "📊" },
    { id: "company", label: "Company Analytics", icon: "🏢" },
    { id: "student", label: "Student Performance", icon: "👨‍🎓" },
    { id: "drive", label: "Drive Reports", icon: "📝" },
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
                  <h1 className="text-3xl font-bold mb-2">Reports & Analytics 📊</h1>
                  <p className="text-white">Comprehensive placement statistics and insights</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handleExportReport}
                    className="px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
                  >
                    📥 Export Report
                  </button>
                  <button 
                    onClick={() => setShowEmailModal(true)}
                    className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    📧 Email Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Report Types */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-fit">
                <h3 className="font-bold mb-4 text-gray-900">Report Types</h3>
                <div className="space-y-2">
                  {reportTypes.map((report) => (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report.id)}
                      className={`w-full px-4 py-3 flex items-center gap-3 rounded-lg transition-colors text-left ${
                        selectedReport === report.id
                          ? "bg-slate-700 text-white"
                          : "border border-gray-300 hover:bg-gray-50 text-gray-900"
                      }`}
                    >
                      <span className="text-xl">{report.icon}</span>
                      <span className="text-sm font-medium">{report.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Overview Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard icon="🎯" label="Placement Rate" value="87.3%" color="from-green-600 to-emerald-600" />
                  <StatCard icon="👨‍🎓" label="Students Placed" value="542" color="from-blue-600 to-cyan-600" />
                  <StatCard icon="💰" label="Avg Package" value="₹6.5L" color="from-purple-600 to-pink-600" />
                  <StatCard icon="🏆" label="Highest Package" value="₹45L" color="from-orange-600 to-red-600" />
                </div>

                {/* Placement Statistics */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Placement Statistics 2024-25</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Department-wise Placements</h3>
                      <div className="space-y-3">
                        <ProgressBar label="Computer Science" value={92} total={345} color="blue" />
                        <ProgressBar label="Information Technology" value={89} total={280} color="cyan" />
                        <ProgressBar label="Electronics" value={78} total={220} color="purple" />
                        <ProgressBar label="Mechanical" value={65} total={180} color="orange" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Package Distribution</h3>
                      <div className="space-y-3">
                        <PackageBar label="₹10L+ (High)" count={45} color="green" />
                        <PackageBar label="₹6-10L (Medium)" count={234} color="blue" />
                        <PackageBar label="₹3-6L (Standard)" count={263} color="yellow" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Monthly Placement Trend</h3>
                    <div className="grid grid-cols-6 gap-2">
                      <TrendBar month="Jul" count={42} />
                      <TrendBar month="Aug" count={68} />
                      <TrendBar month="Sep" count={95} />
                      <TrendBar month="Oct" count={125} />
                      <TrendBar month="Nov" count={142} />
                      <TrendBar month="Dec" count={70} />
                    </div>
                  </div>
                </div>

                {/* Top Recruiters */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Top Recruiters</h2>
                  <div className="space-y-4">
                    <RecruiterRow company="Infosys" hired={89} avgPackage="₹7.2L" logo="I" />
                    <RecruiterRow company="TCS" hired={76} avgPackage="₹3.8L" logo="T" />
                    <RecruiterRow company="Wipro" hired={65} avgPackage="₹4.2L" logo="W" />
                    <RecruiterRow company="Cognizant" hired={54} avgPackage="₹5.5L" logo="C" />
                    <RecruiterRow company="Accenture" hired={48} avgPackage="₹6.8L" logo="A" />
                  </div>
                </div>

                {/* Recent Placements */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Recent Placements</h2>
                  <div className="space-y-4">
                    <PlacementRow 
                      student="Rajesh Kumar"
                      regNo="21CS101"
                      company="Amazon"
                      package="₹45L"
                      date="Dec 15, 2025"
                    />
                    <PlacementRow 
                      student="Priya Sharma"
                      regNo="21IT102"
                      company="Google"
                      package="₹42L"
                      date="Dec 14, 2025"
                    />
                    <PlacementRow 
                      student="Amit Patel"
                      regNo="21CS103"
                      company="Microsoft"
                      package="₹38L"
                      date="Dec 13, 2025"
                    />
                    <PlacementRow 
                      student="Sneha Reddy"
                      regNo="21IT104"
                      company="Infosys"
                      package="₹8.5L"
                      date="Dec 12, 2025"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowEmailModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Email Report</h3>
            <p className="text-sm text-gray-700 mb-6">Enter the email address where you want to receive the placement report.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-6"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleEmailReport}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg hover:from-slate-800 hover:to-gray-800 transition-colors font-medium"
              >
                Send Report
              </button>
            </div>
          </div>
        </div>
      )}
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

function ProgressBar({ label, value, total, color }: any) {
  const percentage = Math.round((value / 100) * 100);
  const colorClasses: any = {
    blue: "bg-blue-600",
    cyan: "bg-cyan-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600"
  };

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-900 font-medium">{label}</span>
        <span className="font-bold text-black">{value}% ({total})</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${colorClasses[color]} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function PackageBar({ label, count, color }: any) {
  const colorClasses: any = {
    green: "bg-green-100 text-green-800 border-green-300",
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300"
  };

  return (
    <div className={`${colorClasses[color]} border-2 rounded-lg p-3`}>
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-xs font-medium">students</div>
    </div>
  );
}

function TrendBar({ month, count }: any) {
  const height = (count / 150) * 100;
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-bold text-black mb-1">{count}</div>
      <div className="w-full bg-gray-200 rounded-t-lg h-32 flex items-end">
        <div className="w-full bg-gradient-to-t from-slate-700 to-gray-700 rounded-t-lg" style={{ height: `${height}%` }}></div>
      </div>
      <div className="text-xs font-medium text-gray-900 mt-2">{month}</div>
    </div>
  );
}

function RecruiterRow({ company, hired, avgPackage, logo }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-gray-700 flex items-center justify-center text-white font-bold text-xl">
          {logo}
        </div>
        <div>
          <h4 className="font-bold text-black">{company}</h4>
          <p className="text-sm text-gray-900 font-medium">{hired} students hired</p>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-black">{avgPackage}</div>
        <div className="text-xs text-gray-900 font-medium">Avg Package</div>
      </div>
    </div>
  );
}

function PlacementRow({ student, regNo, company, package: pkg, date }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold">
          {student.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-black">{student}</h4>
          <p className="text-sm text-gray-900 font-medium">{regNo} • {company}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-green-800">{pkg}</div>
        <div className="text-xs text-gray-700 font-medium">{date}</div>
      </div>
    </div>
  );
}
