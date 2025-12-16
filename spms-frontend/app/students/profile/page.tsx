"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    regNumber: "",
    course: "",
    year: "",
    cgpa: "",
    about: "",
    skills: [] as string[],
    projects: [] as any[],
    education: [] as any[],
    experience: [] as any[],
    certifications: [] as string[]
  });
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Load profile data from localStorage if exists
      const savedProfile = localStorage.getItem(`profile_${parsedUser.userId}`);
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile));
      } else {
        // Initialize with user's basic info from registration
        setProfileData(prev => ({
          ...prev,
          email: parsedUser.email || "",
          fullName: parsedUser.username || ""
        }));
      }
    }
  }, []);

  const handleSaveProfile = () => {
    if (user) {
      localStorage.setItem(`profile_${user.userId}`, JSON.stringify(profileData));
      setIsEditing(false);
      alert("Profile saved successfully!");
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((_, i) => i !== index)
    });
  };

  const handleAddProject = () => {
    setProfileData({
      ...profileData,
      projects: [...profileData.projects, {
        name: "",
        description: "",
        tech: [],
        link: ""
      }]
    });
  };

  const handleAddEducation = () => {
    setProfileData({
      ...profileData,
      education: [...profileData.education, {
        degree: "",
        institution: "",
        year: "",
        cgpa: ""
      }]
    });
  };

  const handleAddExperience = () => {
    setProfileData({
      ...profileData,
      experience: [...profileData.experience, {
        role: "",
        company: "",
        duration: "",
        description: ""
      }]
    });
  };

  const handleAddCertification = () => {
    const cert = prompt("Enter certification name:");
    if (cert) {
      setProfileData({
        ...profileData,
        certifications: [...profileData.certifications, cert]
      });
    }
  };

  const calculateCompletion = () => {
    let completed = 0;
    let total = 8;
    
    if (profileData.fullName) completed++;
    if (profileData.email) completed++;
    if (profileData.phone) completed++;
    if (profileData.about) completed++;
    if (profileData.skills.length > 0) completed++;
    if (profileData.education.length > 0) completed++;
    if (profileData.cgpa) completed++;
    if (profileData.course) completed++;
    
    return Math.round((completed / total) * 100);
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
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">My Profile 👤</h1>
                  <p className="text-white">Manage your personal information and preferences</p>
                </div>
                <button
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors shadow-sm"
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    {profileData.fullName ? profileData.fullName.split(' ').map(n => n[0]).join('').toUpperCase() : user?.username?.[0]?.toUpperCase() || '?'}
                  </div>
                  <h2 className="text-xl font-bold mb-1">{profileData.fullName || user?.username || "Complete Your Profile"}</h2>
                  <p className="text-sm text-gray-800 mb-2">{profileData.regNumber || "Add Registration Number"}</p>
                  <p className="text-sm text-gray-800 mb-4">{profileData.course || "Add Course"}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">{profileData.cgpa || "-"}</div>
                      <div className="text-xs text-gray-800">CGPA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-500">{profileData.year || "-"}</div>
                      <div className="text-xs text-gray-800">Year</div>
                    </div>
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6">
                  <h3 className="font-bold mb-4">Profile Strength</h3>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-800">Completion</span>
                      <span className="font-semibold text-purple-500">{calculateCompletion()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{ width: `${calculateCompletion()}%` }}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className={profileData.fullName && profileData.email ? "text-green-500" : "text-yellow-500"}>{profileData.fullName && profileData.email ? "✓" : "○"}</span>
                      <span className="text-gray-800">Basic Info</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={profileData.education.length > 0 ? "text-green-500" : "text-yellow-500"}>{profileData.education.length > 0 ? "✓" : "○"}</span>
                      <span className="text-gray-800">Education</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={profileData.skills.length > 0 ? "text-green-500" : "text-yellow-500"}>{profileData.skills.length > 0 ? "✓" : "○"}</span>
                      <span className="text-gray-800">Skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={profileData.about ? "text-green-500" : "text-yellow-500"}>{profileData.about ? "✓" : "○"}</span>
                      <span className="text-gray-800">About Section</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                      Upload Resume
                    </button>
                    <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Download Resume
                    </button>
                    <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoField 
                      label="Full Name" 
                      value={profileData.fullName} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, fullName: e.target.value})}
                      placeholder="Enter your full name"
                    />
                    <InfoField 
                      label="Email" 
                      value={profileData.email} 
                      isEditing={false}
                      placeholder="Email from registration"
                    />
                    <InfoField 
                      label="Phone" 
                      value={profileData.phone} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, phone: e.target.value})}
                      placeholder="Enter phone number"
                    />
                    <InfoField 
                      label="Registration No." 
                      value={profileData.regNumber} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, regNumber: e.target.value})}
                      placeholder="Enter registration number"
                    />
                    <InfoField 
                      label="Course" 
                      value={profileData.course} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, course: e.target.value})}
                      placeholder="Enter course name"
                    />
                    <InfoField 
                      label="Year" 
                      value={profileData.year} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, year: e.target.value})}
                      placeholder="e.g., 3rd Year"
                    />
                    <InfoField 
                      label="CGPA" 
                      value={profileData.cgpa} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setProfileData({...profileData, cgpa: e.target.value})}
                      placeholder="Enter your CGPA"
                    />
                  </div>
                </div>

                {/* About */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">About Me</h3>
                  {isEditing ? (
                    <textarea
                      value={profileData.about}
                      onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                      placeholder="Tell us about yourself, your interests, and career goals..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.about || "Click 'Edit Profile' to add information about yourself."}</p>
                  )}
                </div>

                {/* Skills */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Skills</h3>
                    {isEditing && (
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                        + Add Skill
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
                        {skill}
                        {isEditing && (
                          <button className="ml-2 text-red-500">×</button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Projects</h3>
                    {isEditing && (
                      <button onClick={handleAddProject} className="px-3 py-1 bg-blue-50 text-blue-500 rounded-lg text-sm font-medium hover:bg-blue-100">
                        + Add Project
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {profileData.projects.length > 0 ? profileData.projects.map((project, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        {isEditing ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={project.name}
                              onChange={(e) => {
                                const newProjects = [...profileData.projects];
                                newProjects[idx].name = e.target.value;
                                setProfileData({...profileData, projects: newProjects});
                              }}
                              placeholder="Project Name"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <textarea
                              value={project.description}
                              onChange={(e) => {
                                const newProjects = [...profileData.projects];
                                newProjects[idx].description = e.target.value;
                                setProfileData({...profileData, projects: newProjects});
                              }}
                              placeholder="Project Description"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                              rows={2}
                            />
                            <input
                              type="text"
                              value={project.link}
                              onChange={(e) => {
                                const newProjects = [...profileData.projects];
                                newProjects[idx].link = e.target.value;
                                setProfileData({...profileData, projects: newProjects});
                              }}
                              placeholder="Project Link"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                          </div>
                        ) : (
                          <>
                            <h4 className="font-bold mb-2">{project.name}</h4>
                            <p className="text-sm text-gray-800 mb-3">{project.description}</p>
                            {project.link && (
                              <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                                {project.link}
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Click '+ Add Project' to add your projects" : "No projects added yet. Click 'Edit Profile' to add projects."}</p>
                    )}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Education</h3>
                    {isEditing && (
                      <button onClick={handleAddEducation} className="px-3 py-1 bg-blue-50 text-blue-500 rounded-lg text-sm font-medium hover:bg-blue-100">
                        + Add Education
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {profileData.education.length > 0 ? profileData.education.map((edu, idx) => (
                      <div key={idx} className="border-l-4 border-blue-400 pl-4">
                        {isEditing ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) => {
                                const newEducation = [...profileData.education];
                                newEducation[idx].degree = e.target.value;
                                setProfileData({...profileData, education: newEducation});
                              }}
                              placeholder="Degree (e.g., B.Tech in Computer Science)"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <input
                              type="text"
                              value={edu.institution}
                              onChange={(e) => {
                                const newEducation = [...profileData.education];
                                newEducation[idx].institution = e.target.value;
                                setProfileData({...profileData, education: newEducation});
                              }}
                              placeholder="Institution Name"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                value={edu.year}
                                onChange={(e) => {
                                  const newEducation = [...profileData.education];
                                  newEducation[idx].year = e.target.value;
                                  setProfileData({...profileData, education: newEducation});
                                }}
                                placeholder="Year (e.g., 2021-2025)"
                                className="px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                              />
                              <input
                                type="text"
                                value={edu.cgpa}
                                onChange={(e) => {
                                  const newEducation = [...profileData.education];
                                  newEducation[idx].cgpa = e.target.value;
                                  setProfileData({...profileData, education: newEducation});
                                }}
                                placeholder="CGPA"
                                className="px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <h4 className="font-bold">{edu.degree}</h4>
                            <p className="text-sm text-gray-800">{edu.institution}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-700 mt-1">
                              <span>{edu.year}</span>
                              {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                            </div>
                          </>
                        )}
                      </div>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Click '+ Add Education' to add your education details" : "No education added yet. Click 'Edit Profile' to add education."}</p>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Experience</h3>
                    {isEditing && (
                      <button onClick={handleAddExperience} className="px-3 py-1 bg-blue-50 text-blue-500 rounded-lg text-sm font-medium hover:bg-blue-100">
                        + Add Experience
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {profileData.experience.length > 0 ? profileData.experience.map((exp, idx) => (
                      <div key={idx} className="border-l-4 border-purple-400 pl-4">
                        {isEditing ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={exp.role}
                              onChange={(e) => {
                                const newExperience = [...profileData.experience];
                                newExperience[idx].role = e.target.value;
                                setProfileData({...profileData, experience: newExperience});
                              }}
                              placeholder="Role/Position"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => {
                                const newExperience = [...profileData.experience];
                                newExperience[idx].company = e.target.value;
                                setProfileData({...profileData, experience: newExperience});
                              }}
                              placeholder="Company Name"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <input
                              type="text"
                              value={exp.duration}
                              onChange={(e) => {
                                const newExperience = [...profileData.experience];
                                newExperience[idx].duration = e.target.value;
                                setProfileData({...profileData, experience: newExperience});
                              }}
                              placeholder="Duration (e.g., Jun 2024 - Aug 2024)"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                            />
                            <textarea
                              value={exp.description}
                              onChange={(e) => {
                                const newExperience = [...profileData.experience];
                                newExperience[idx].description = e.target.value;
                                setProfileData({...profileData, experience: newExperience});
                              }}
                              placeholder="Description of your work"
                              className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
                              rows={2}
                            />
                          </div>
                        ) : (
                          <>
                            <h4 className="font-bold">{exp.role}</h4>
                            <p className="text-sm text-gray-800">{exp.company}</p>
                            <p className="text-sm text-gray-700 mt-1">{exp.duration}</p>
                            <p className="text-sm text-gray-800 mt-2">{exp.description}</p>
                          </>
                        )}
                      </div>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Click '+ Add Experience' to add your work experience" : "No experience added yet. Click 'Edit Profile' to add experience."}</p>
                    )}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Certifications</h3>
                    {isEditing && (
                      <button onClick={handleAddCertification} className="px-3 py-1 bg-blue-50 text-blue-500 rounded-lg text-sm font-medium hover:bg-blue-100">
                        + Add Certification
                      </button>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {profileData.certifications.length > 0 ? profileData.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">{cert}</span>
                        {isEditing && (
                          <button onClick={() => {
                            setProfileData({
                              ...profileData,
                              certifications: profileData.certifications.filter((_, i) => i !== idx)
                            });
                          }} className="ml-auto text-red-500 hover:text-red-700 text-sm">Remove</button>
                        )}
                      </li>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Click '+ Add Certification' to add your certifications" : "No certifications added yet. Click 'Edit Profile' to add certifications."}</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoField({ label, value, isEditing, onChange, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">{label}</label>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <p className="text-gray-800 font-medium">{value || "Not added"}</p>
      )}
    </div>
  );
}
