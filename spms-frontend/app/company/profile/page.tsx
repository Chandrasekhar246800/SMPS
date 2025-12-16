"use client";

import { useEffect, useState } from "react";

export default function CompanyProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    companyName: "",
    email: "",
    website: "",
    phone: "",
    industry: "",
    companySize: "",
    founded: "",
    location: "",
    about: "",
    culture: "",
    benefits: [] as string[],
    perks: [] as string[],
    socialLinks: {
      linkedin: "",
      twitter: "",
      facebook: ""
    }
  });
  const [newBenefit, setNewBenefit] = useState("");
  const [newPerk, setNewPerk] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      const savedProfile = localStorage.getItem(`company_profile_${parsedUser.userId}`);
      if (savedProfile) {
        setCompanyData(JSON.parse(savedProfile));
      } else {
        setCompanyData(prev => ({
          ...prev,
          email: parsedUser.email || "",
          companyName: parsedUser.username || ""
        }));
      }
    }
  }, []);

  const handleSaveProfile = () => {
    if (user) {
      localStorage.setItem(`company_profile_${user.userId}`, JSON.stringify(companyData));
      setIsEditing(false);
      alert("Company profile saved successfully!");
    }
  };

  const handleAddBenefit = () => {
    if (newBenefit.trim()) {
      setCompanyData({
        ...companyData,
        benefits: [...companyData.benefits, newBenefit.trim()]
      });
      setNewBenefit("");
    }
  };

  const handleRemoveBenefit = (index: number) => {
    setCompanyData({
      ...companyData,
      benefits: companyData.benefits.filter((_, i) => i !== index)
    });
  };

  const handleAddPerk = () => {
    if (newPerk.trim()) {
      setCompanyData({
        ...companyData,
        perks: [...companyData.perks, newPerk.trim()]
      });
      setNewPerk("");
    }
  };

  const handleRemovePerk = (index: number) => {
    setCompanyData({
      ...companyData,
      perks: companyData.perks.filter((_, i) => i !== index)
    });
  };

  const calculateCompletion = () => {
    let completed = 0;
    const total = 8;
    
    if (companyData.companyName && companyData.email) completed++;
    if (companyData.website) completed++;
    if (companyData.about) completed++;
    if (companyData.culture) completed++;
    if (companyData.location) completed++;
    if (companyData.industry) completed++;
    if (companyData.benefits.length > 0) completed++;
    if (companyData.perks.length > 0) completed++;
    
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="relative">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
                  <p className="text-white">Manage your company information and branding</p>
                </div>
                <div className="flex gap-3">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-3 bg-white text-indigo-800 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-3 bg-white text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveProfile}
                        className="px-6 py-3 bg-white text-indigo-800 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-sm"
                      >
                        Save Changes
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Logo */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="text-center mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-5xl mb-4">
                      {companyData.companyName.charAt(0) || "C"}
                    </div>
                    <h2 className="text-xl font-bold text-black mb-1">{companyData.companyName || "Company Name"}</h2>
                    <p className="text-sm text-gray-900 font-semibold mb-2">{companyData.industry || "Industry"}</p>
                    <p className="text-sm text-gray-900 font-medium mb-4">{companyData.location || "Location"}</p>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Upload Logo
                    </button>
                    <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Upload Banner
                    </button>
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border border-purple-300 p-6">
                  <h3 className="font-bold mb-4 text-gray-900">Profile Completion</h3>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-900 font-semibold">Completion</span>
                      <span className="font-bold text-purple-800">{calculateCompletion()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: `${calculateCompletion()}%` }}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className={companyData.companyName && companyData.email ? "text-green-700 font-bold" : "text-yellow-700 font-bold"}>{companyData.companyName && companyData.email ? "✓" : "○"}</span>
                      <span className="text-gray-900 font-medium">Basic Info</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={companyData.about ? "text-green-700 font-bold" : "text-yellow-700 font-bold"}>{companyData.about ? "✓" : "○"}</span>
                      <span className="text-gray-900 font-medium">About Company</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={companyData.culture ? "text-green-700 font-bold" : "text-yellow-700 font-bold"}>{companyData.culture ? "✓" : "○"}</span>
                      <span className="text-gray-900 font-medium">Culture Info</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={companyData.benefits.length > 0 ? "text-green-700 font-bold" : "text-yellow-700 font-bold"}>{companyData.benefits.length > 0 ? "✓" : "○"}</span>
                      <span className="text-gray-900 font-medium">Benefits Added</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Company Information */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoField 
                      label="Company Name" 
                      value={companyData.companyName} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, companyName: e.target.value})}
                      placeholder="Enter company name"
                    />
                    <InfoField 
                      label="Email" 
                      value={companyData.email} 
                      isEditing={false}
                      placeholder="Email from registration"
                    />
                    <InfoField 
                      label="Website" 
                      value={companyData.website} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, website: e.target.value})}
                      placeholder="www.company.com"
                    />
                    <InfoField 
                      label="Phone" 
                      value={companyData.phone} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <InfoField 
                      label="Industry" 
                      value={companyData.industry} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, industry: e.target.value})}
                      placeholder="e.g., IT Services"
                    />
                    <InfoField 
                      label="Company Size" 
                      value={companyData.companySize} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, companySize: e.target.value})}
                      placeholder="e.g., 100-500"
                    />
                    <InfoField 
                      label="Founded" 
                      value={companyData.founded} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, founded: e.target.value})}
                      placeholder="e.g., 2015"
                    />
                    <InfoField 
                      label="Location" 
                      value={companyData.location} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, location: e.target.value})}
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                {/* About Company */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">About Company</h3>
                  {isEditing ? (
                    <textarea
                      value={companyData.about}
                      onChange={(e) => setCompanyData({...companyData, about: e.target.value})}
                      placeholder="Describe your company, mission, and vision..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-800">{companyData.about || "Click 'Edit Profile' to add information about your company."}</p>
                  )}
                </div>

                {/* Company Culture */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Company Culture</h3>
                  {isEditing ? (
                    <textarea
                      value={companyData.culture}
                      onChange={(e) => setCompanyData({...companyData, culture: e.target.value})}
                      placeholder="Describe your company culture, values, and work environment..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-800">{companyData.culture || "Click 'Edit Profile' to add company culture information."}</p>
                  )}
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Employee Benefits</h3>
                  </div>
                  {isEditing && (
                    <div className="flex gap-2 mb-4">
                      <input
                        type="text"
                        value={newBenefit}
                        onChange={(e) => setNewBenefit(e.target.value)}
                        placeholder="Add a benefit (e.g., Health Insurance)"
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button onClick={handleAddBenefit} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                        Add
                      </button>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {companyData.benefits.length > 0 ? companyData.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-2">
                        {benefit}
                        {isEditing && (
                          <button onClick={() => handleRemoveBenefit(idx)} className="text-green-600 hover:text-green-800">×</button>
                        )}
                      </span>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Add benefits to attract top talent" : "No benefits added yet."}</p>
                    )}
                  </div>
                </div>

                {/* Perks */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Office Perks</h3>
                  </div>
                  {isEditing && (
                    <div className="flex gap-2 mb-4">
                      <input
                        type="text"
                        value={newPerk}
                        onChange={(e) => setNewPerk(e.target.value)}
                        placeholder="Add a perk (e.g., Free Snacks)"
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button onClick={handleAddPerk} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                        Add
                      </button>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {companyData.perks.length > 0 ? companyData.perks.map((perk, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-2">
                        {perk}
                        {isEditing && (
                          <button onClick={() => handleRemovePerk(idx)} className="text-blue-600 hover:text-blue-800">×</button>
                        )}
                      </span>
                    )) : (
                      <p className="text-gray-700 text-sm">{isEditing ? "Add perks that make your workplace great" : "No perks added yet."}</p>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Social Media Links</h3>
                  <div className="grid gap-4">
                    <InfoField 
                      label="LinkedIn" 
                      value={companyData.socialLinks.linkedin} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, socialLinks: {...companyData.socialLinks, linkedin: e.target.value}})}
                      placeholder="https://linkedin.com/company/..."
                    />
                    <InfoField 
                      label="Twitter" 
                      value={companyData.socialLinks.twitter} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, socialLinks: {...companyData.socialLinks, twitter: e.target.value}})}
                      placeholder="https://twitter.com/..."
                    />
                    <InfoField 
                      label="Facebook" 
                      value={companyData.socialLinks.facebook} 
                      isEditing={isEditing} 
                      onChange={(e: any) => setCompanyData({...companyData, socialLinks: {...companyData.socialLinks, facebook: e.target.value}})}
                      placeholder="https://facebook.com/..."
                    />
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
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : (
        <p className="text-gray-900 font-medium">{value || "Not provided"}</p>
      )}
    </div>
  );
}
