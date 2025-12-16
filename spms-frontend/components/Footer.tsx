"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };
    
    checkUser();
    
    // Listen for storage changes
    window.addEventListener('storage', checkUser);
    
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, [pathname]); // Re-check user when route changes

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold">
                S
              </span>
              <span className="font-bold text-lg">SPMS</span>
            </div>
            <p className="text-sm text-foreground/60 max-w-sm">
              Modern placement portal connecting students, recruiters, and administrators for seamless campus recruitment.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              {user ? (
                <>
                  {user.role === "STUDENT" && (
                    <>
                      <li><Link href="/students" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                      <li><Link href="/students/jobs" className="hover:text-foreground transition-colors">Jobs</Link></li>
                      <li><Link href="/students/applications" className="hover:text-foreground transition-colors">Applications</Link></li>
                    </>
                  )}
                  {user.role === "COMPANY" && (
                    <>
                      <li><Link href="/company" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                      <li><Link href="/company/jobs" className="hover:text-foreground transition-colors">My Jobs</Link></li>
                      <li><Link href="/company/candidates" className="hover:text-foreground transition-colors">Candidates</Link></li>
                    </>
                  )}
                  {user.role === "ADMIN" && (
                    <>
                      <li><Link href="/admin" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                      <li><Link href="/admin/drives" className="hover:text-foreground transition-colors">Drives</Link></li>
                      <li><Link href="/admin/users" className="hover:text-foreground transition-colors">Users</Link></li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li><Link href="/students-info" className="hover:text-foreground transition-colors">Students</Link></li>
                  <li><Link href="/company-info" className="hover:text-foreground transition-colors">Recruiters</Link></li>
                  <li><Link href="/admin-info" className="hover:text-foreground transition-colors">Admin</Link></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 dark:border-white/5 text-sm text-foreground/50 text-center">
          <p>© {new Date().getFullYear()} SPMS. All rights reserved. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
