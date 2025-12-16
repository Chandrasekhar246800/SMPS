SPMS (Student Placement Management System) is a modern placement portal built with Next.js and Tailwind CSS.
It serves students, recruiters, and administrators by centralizing job postings, applications, interview schedules, and placement reports.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Key files:

- Landing: `app/page.tsx`
- Layout (Navbar/Footer): `app/layout.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`
- Placeholders: `app/students/page.tsx`, `app/recruiters/page.tsx`, `app/admin/page.tsx`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- TypeScript

## Next Steps

- Students dashboard: profile, resume upload, job listings, applications
- Recruiter flows: job posting, candidate filters, interview scheduling
- Admin console: eligibility rules, drive scheduling, analytics
- Auth & RBAC, API integration, form validation
