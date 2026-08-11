# ConnectHours — WebSpark 2026

**Faculty Appointment & Office Hours Portal** for a fictional/demo ABESEC (ABES Engineering College) hackathon environment.

> All names and accounts in this repository are demo data. They are not intended to represent actual ABESEC faculty, students, or institutional records.

## What this prototype demonstrates

ConnectHours connects **Students ↔ Faculty ↔ HOD/Admin** around office hours and appointments. The demo intentionally prioritizes reliable business flows over enterprise complexity.

### Implemented

- Role-based login for Student, Faculty and HOD/Admin
- Faculty discovery with search and department filtering
- Faculty profiles, subjects and office hours
- Server-side booking validation
- Double-booking / overlap prevention
- Past-slot prevention
- Blocked-period prevention
- Smart nearby-slot conflict resolution
- Waitlist with preferred date/time
- Automatic waitlist fill after cancellation
- In-app notifications
- Explainable no-show risk scoring
- Student appointment history
- Student cancellation and rescheduling
- Faculty approval/rejection/completion/no-show actions
- Recurring and one-time office hours
- Faculty blocked periods
- Faculty utilization view
- HOD analytics with KPI cards and Recharts
- Faculty-level utilization table
- Appointment volume, status and peak-hour charts
- Rich seeded demo data
- Basic accessibility/focus states and responsive layouts

## Tech stack

- Next.js 15 + TypeScript
- React 19
- Tailwind CSS
- SQLite + better-sqlite3 for a zero-credential hackathon demo
- Recharts
- Lucide React

### Why SQLite instead of Supabase in the submitted demo?

The prototype is intentionally self-contained so judges can run it immediately with no external credentials. The repository also includes `supabase/schema.sql` and `.env.example` as the PostgreSQL/Supabase migration reference. For a production deployment, replace the small SQLite data layer with Supabase/PostgreSQL and enable RLS.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The SQLite database is created automatically at `data/webspark.db` and seeded on first start.

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Student | `student1.demo@abesec.edu` | `student123` |
| Faculty | `ananya.demo@abesec.edu` | `faculty123` |
| HOD/Admin | `hod.demo@abesec.edu` | `admin123` |

All are fictional demo accounts.

## Judge demo flows

### 1. Student booking

Student login → Find Faculty → search/filter → open profile → choose date/time → enter reason → request appointment → open My Appointments.

### 2. Smart conflict resolution

Try a busy faculty/time → server rejects the overlap → the booking UI shows the closest available alternatives → select an alternative → submit.

### 3. Waitlist auto-fill

Join a faculty waitlist → switch to Faculty login → cancel an active appointment → the waitlist matcher selects the best matching student → creates a confirmed appointment and notification.

### 4. Faculty management

Faculty login → Office Hours → add recurring/one-time availability or block a period → Appointments → approve/reject → mark completed/no-show.

### 5. HOD analytics

HOD/Admin login → Analytics → show total appointments, completion rate, no-show rate, utilization, volume, faculty utilization, status distribution and peak hours.

## No-show scoring

This is **not ML**. It is an explainable deterministic score:

- Base: 20
- +30 previous no-show
- +20 previous late cancellation
- +10 short booking lead time
- +10 multiple upcoming appointments
- -15 strong attendance history

Score is clamped to 0–100:

- 0–30 Low
- 31–60 Medium
- 61–100 High

The UI also displays the contributing factors.

## Environment

Copy `.env.example` to `.env.local` and set a random `SESSION_SECRET` for any shared environment.

No API keys are required for the local demo.

## Production deployment path

The current demo uses SQLite because it is deterministic and easy to evaluate. For a real multi-user deployment:

1. Create a Supabase project.
2. Run `supabase/schema.sql`.
3. Move the functions in `lib/data.ts` and `lib/business.ts` to Supabase queries/RPCs.
4. Use Supabase Auth instead of the demo password table.
5. Add RLS policies for student/faculty/admin access.
6. Store secrets only in the deployment environment.
7. Deploy the Next.js app to a Node-capable host. If using Vercel, the database must be Supabase/Postgres rather than the included local SQLite file.

## Project structure

```text
app/
  login/
  student/
  faculty/
  admin/
  api/
components/
  layout/
  ui/
lib/
  business.ts       # booking, conflicts, waitlist, scoring
  data.ts           # read models
  db.ts             # local SQLite connection
  seed.ts           # demo dataset
  schema.sql        # local schema
supabase/
  schema.sql        # PostgreSQL reference schema
tests/
.env.example
README.md
```

## Testing

Business logic is intentionally kept in `lib/business.ts` so it can be unit-tested independently. The `tests/` folder contains the critical business-logic test suite.

```bash
npm test
```

## Deferred / planned integrations

These are deliberately **not faked** in the demo:

- ABESEC ERP / SSO
- College timetable synchronization
- Academic calendar integration
- Email delivery
- WhatsApp delivery
- Google Calendar sync
- Push notifications
- Background job/queue infrastructure
- Production-grade Supabase Auth + RLS migration

## Team
Shreya Singh
Shrinkhla Saxena
Rudraksh Chauhan
