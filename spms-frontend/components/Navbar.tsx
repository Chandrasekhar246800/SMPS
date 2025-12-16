"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };
    
    checkUser();
    
    // Listen for storage changes (e.g., from other tabs or after login)
    window.addEventListener('storage', checkUser);
    
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, [pathname]); // Re-check user when route changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
    
    // Trigger storage event to update navbar/footer
    window.dispatchEvent(new Event('storage'));
    
    router.push("/");
  };

  const getRoleBasedDashboard = () => {
    if (!user) return "/";
    switch (user.role) {
      case "STUDENT":
        return "/students";
      case "COMPANY":
        return "/company";
      case "ADMIN":
        return "/admin";
      default:
        return "/";
    }
  };

  return (
    <header className="border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={user ? getRoleBasedDashboard() : "/"} className="flex items-center gap-2.5 font-bold tracking-tight group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-shadow">
              S
            </span>
            <span className="text-lg">SPMS</span>
          </Link>

          {mounted && (
            <>
              {user ? (
                // Logged in navigation
                <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                  {user.role === "STUDENT" && (
                    <>
                      <NavLink href="/students">Dashboard</NavLink>
                      <NavLink href="/students/jobs">Jobs</NavLink>
                      <NavLink href="/students/applications">Applications</NavLink>
                      <NavLink href="/students/profile">Profile</NavLink>
                    </>
                  )}
                  {user.role === "COMPANY" && (
                    <>
                      <NavLink href="/company">Dashboard</NavLink>
                      <NavLink href="/company/jobs">My Jobs</NavLink>
                      <NavLink href="/company/candidates">Candidates</NavLink>
                      <NavLink href="/company/profile">Company Profile</NavLink>
                    </>
                  )}
                  {user.role === "ADMIN" && (
                    <>
                      <NavLink href="/admin">Dashboard</NavLink>
                      <NavLink href="/admin/drives">Drives</NavLink>
                      <NavLink href="/admin/users">Users</NavLink>
                      <NavLink href="/admin/reports">Reports</NavLink>
                    </>
                  )}
                </nav>
              ) : (
                // Public navigation
                <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                  <NavLink href="/students-info">Students</NavLink>
                  <NavLink href="/recruiters-info">Recruiters</NavLink>
                  <NavLink href="/admin-info">Admin</NavLink>
                </nav>
              )}

              <div className="hidden md:flex items-center gap-2">
                {user ? (
                  <>
                    <div className="px-3 py-1.5 text-sm font-medium text-foreground/70 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      {user.username || user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg hover:from-red-700 hover:to-rose-700 transition-colors shadow-md"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">
                      Sign In
                    </Link>
                    <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </>
          )}

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="h-10 w-10 inline-flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25c0-.414.336-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && mounted && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {user ? (
              <>
                {user.role === "STUDENT" && (
                  <>
                    <MobileLink href="/students" onClick={() => setOpen(false)}>Dashboard</MobileLink>
                    <MobileLink href="/students/jobs" onClick={() => setOpen(false)}>Jobs</MobileLink>
                    <MobileLink href="/students/applications" onClick={() => setOpen(false)}>Applications</MobileLink>
                    <MobileLink href="/students/profile" onClick={() => setOpen(false)}>Profile</MobileLink>
                  </>
                )}
                {user.role === "COMPANY" && (
                  <>
                    <MobileLink href="/company" onClick={() => setOpen(false)}>Dashboard</MobileLink>
                    <MobileLink href="/company/jobs" onClick={() => setOpen(false)}>My Jobs</MobileLink>
                    <MobileLink href="/company/candidates" onClick={() => setOpen(false)}>Candidates</MobileLink>
                    <MobileLink href="/company/profile" onClick={() => setOpen(false)}>Company Profile</MobileLink>
                  </>
                )}
                {user.role === "ADMIN" && (
                  <>
                    <MobileLink href="/admin" onClick={() => setOpen(false)}>Dashboard</MobileLink>
                    <MobileLink href="/admin/drives" onClick={() => setOpen(false)}>Drives</MobileLink>
                    <MobileLink href="/admin/users" onClick={() => setOpen(false)}>Users</MobileLink>
                    <MobileLink href="/admin/reports" onClick={() => setOpen(false)}>Reports</MobileLink>
                  </>
                )}
                <div className="border-t border-black/5 dark:border-white/5 mt-2 pt-2 flex flex-col gap-2">
                  <div className="px-4 py-2 text-sm font-medium text-foreground/70 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    {user.username || user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg hover:from-red-700 hover:to-rose-700 transition-colors shadow-md text-center"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <MobileLink href="/students" onClick={() => setOpen(false)}>Students</MobileLink>
                <MobileLink href="/recruiters" onClick={() => setOpen(false)}>Recruiters</MobileLink>
                <MobileLink href="/admin" onClick={() => setOpen(false)}>Admin</MobileLink>
                <div className="border-t border-black/5 dark:border-white/5 mt-2 pt-2 flex flex-col gap-2">
                  <Link href="/login" onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors text-left">
                    Sign In
                  </Link>
                  <Link href="/signup" onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md text-center">
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      className="px-4 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
