# ConnectHours — WebSpark 2026

> **Faculty Appointment & Office Hours Portal** for a fictional/demo ABESEC (ABES Engineering College) hackathon environment.

> **Note:** All names and accounts in this repository are demo data. They are not intended to represent actual ABESEC faculty, students, or institutional records.

---

## 📌 Overview

**ConnectHours** connects **Students ↔ Faculty ↔ HOD/Admin** around office hours and appointments.

The prototype prioritizes **reliable business flows, intelligent scheduling, and a polished demo experience** over unnecessary enterprise complexity.

### ✨ What This Prototype Demonstrates

* Role-based login for **Student, Faculty, and HOD/Admin**
* Faculty discovery with search and department filtering
* Faculty profiles, subjects, and office hours
* Server-side booking validation
* Double-booking and appointment overlap prevention
* Past-slot prevention
* Blocked-period prevention
* Smart nearby-slot conflict resolution
* Waitlist with preferred date and time
* Automatic waitlist filling after cancellation
* In-app notifications
* Explainable no-show risk scoring
* Student appointment history
* Student cancellation and rescheduling
* Faculty appointment approval and rejection
* Appointment completion and no-show marking
* Recurring office hours
* One-time office hours
* Faculty blocked periods
* Faculty utilization statistics
* HOD/Admin analytics dashboard
* Appointment volume charts
* Appointment status charts
* Peak-hour analytics
* Faculty-level utilization analytics
* Seeded demo data
* Responsive layouts
* Basic accessibility and keyboard focus states

---

# 🛠️ Tech Stack


<div align="center">

<a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15"/>
</a>
<a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
</a>
<a href="https://react.dev/">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19"/>
</a>
<a href="https://tailwindcss.com/">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</a>

<br/>

<a href="https://www.sqlite.org/">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
</a>
<a href="https://github.com/WiseLibs/better-sqlite3">
  <img src="https://img.shields.io/badge/better--sqlite3-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="better-sqlite3"/>
</a>
<a href="https://recharts.org/">
  <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Recharts"/>
</a>
<a href="https://lucide.dev/">
  <img src="https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React"/>
</a>

</div>

## Why SQLite?

The submitted prototype uses **SQLite** so judges can run the application without configuring an external database or API credentials.

The repository also contains a **Supabase/PostgreSQL schema reference** for future production deployment.

For a production environment, SQLite can be replaced with **Supabase/PostgreSQL** with proper authentication and Row Level Security.

---

# 🚀 Quick Start

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set a random `SESSION_SECRET` for a shared environment.

> **Important:** Never commit `.env.local` or real secrets to GitHub.

## 4. Start the Development Server

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```

The SQLite database is automatically created at:

```text
data/webspark.db
```

The database is seeded automatically when the application starts.

---

# 🔐 Demo Accounts

| Role          | Email                      | Password     |
| ------------- | -------------------------- | ------------ |
| **Student**   | `student1.demo@abesec.edu` | `student123` |
| **Faculty**   | `ananya.demo@abesec.edu`   | `faculty123` |
| **HOD/Admin** | `hod.demo@abesec.edu`      | `admin123`   |

> All accounts are fictional demo accounts created only for the WebSpark prototype.

---

# 🎓 Student Features

Students can:

* 🔐 Login securely
* 🔎 Search faculty
* 🏫 Filter faculty by department
* 📚 View faculty subjects
* 👤 View faculty profiles
* 🕐 View office hours
* 📅 Book appointments
* 🔄 Reschedule appointments
* ❌ Cancel appointments
* ⏳ Join waitlists
* 🔔 Receive waitlist notifications
* 📜 View appointment history
* 📊 View appointment status
* 🔔 View appointment reminders
* ⚠️ View basic no-show risk information

---
## 📸 Screenshots

### Student Dashboard

<img width="1920" height="1080" alt="Screenshot 2026-08-11 223250" src="https://github.com/user-attachments/assets/26da0700-4a3c-40ad-b660-24f7e535a4e3" />


---

### Faculty Appointments

<img width="1920" height="1080" alt="Screenshot 2026-08-11 222353" src="https://github.com/user-attachments/assets/3e2234a5-2a89-4995-8620-6c308a754232" />


---

### Faculty Calendar

<img width="1920" height="1080" alt="Screenshot 2026-08-11 222602" src="https://github.com/user-attachments/assets/ef90199f-c1e8-437f-9b2b-0ae701214c8a" />


---

### Faculty Dashboard

<img width="1920" height="1080" alt="Screenshot 2026-08-11 222653" src="https://github.com/user-attachments/assets/e976847d-f1a4-494a-8d8f-7f12d02737fd" />


---

### HOD/Admin Analytics

<img width="1920" height="1080" alt="Screenshot 2026-08-11 222931" src="https://github.com/user-attachments/assets/66cc3f0d-7610-44c3-812a-fe463e8c904d" />


<img width="1920" height="1080" alt="Screenshot 2026-08-11 222931" src="https://github.com/user-attachments/assets/5f3c33b5-5ca9-45a7-8965-fd52e1b6081a" />


---


> **Note:** Screenshots show the fictional/demo environment created for **WebSpark 2026**.

---

# 👨‍🏫 Faculty Features

Faculty users can:

* Login to the faculty dashboard
* View today's appointments
* View upcoming appointments
* Create recurring office hours
* Create one-time office hours
* Block unavailable periods
* Approve appointments
* Reject appointments
* Cancel appointments
* Mark appointments as completed
* Mark students as no-show
* View availability
* View utilization statistics

---

# 📊 HOD/Admin Features

HOD/Admin users can view:

* Total appointments
* Completed appointments
* Cancelled appointments
* No-show appointments
* Completion rate
* No-show rate
* Slot utilization
* Faculty-level utilization
* Appointment volume
* Peak appointment periods
* Department-level analytics

---

# 🧠 Smart Booking Engine

The booking engine performs **server-side validation** before creating an appointment.

It checks:

1. Whether the selected slot belongs to an active office hour.
2. Whether the faculty has blocked the requested period.
3. Whether another appointment already occupies the slot.
4. Whether the appointment overlaps another appointment.
5. Whether the requested time is in the past.

This prevents relying only on frontend validation.

---

# 🚫 Double Booking Prevention

The system prevents two students from booking the same faculty time slot.

If a requested slot is already occupied:

1. The booking request is rejected.
2. The system searches for nearby available alternatives.
3. The student is shown feasible alternative slots.

---

# 🔄 Smart Conflict Resolution

If the requested slot is unavailable, **ConnectHours** searches for nearby available slots.

The alternatives are ranked using:

1. Same day
2. Closest available time
3. Faculty availability
4. Student preference

### Example

> **Requested:** 2:00 PM
> **Status:** Unavailable
>
> **Suggested alternatives:**
>
> * 2:30 PM
> * 3:00 PM
> * Tomorrow at 11:00 AM

The student can select an alternative and continue booking.

---

# ⏳ Waitlist + Auto-Fill

When no suitable appointment slot is available, students can join a faculty waitlist.

Students can specify:

* Preferred date
* Preferred time
* Faculty
* Appointment type

When an appointment is cancelled:

1. Matching waitlist entries are searched.
2. Eligible students are ranked.
3. The best matching student is selected.
4. The cancelled slot is assigned.
5. A notification is created.
6. The waitlist entry is updated.

> For the prototype, this process runs immediately after cancellation instead of using a background job.

---

# ⚠️ Explainable No-Show Risk Scoring

The prototype **does not use machine learning**.

Instead, it uses an **explainable deterministic scoring system**.

## Base Score

```text
20
```

## Risk Factors

| Factor                         | Score |
| ------------------------------ | ----: |
| Previous no-show               |   +30 |
| Previous late cancellation     |   +20 |
| Short booking lead time        |   +10 |
| Multiple upcoming appointments |   +10 |
| Strong attendance history      |   -15 |

The final score is clamped between `0` and `100`.

## Risk Levels

|  Score | Risk      |
| -----: | --------- |
|   0–30 | 🟢 Low    |
|  31–60 | 🟡 Medium |
| 61–100 | 🔴 High   |

The UI also displays the contributing factors.

### Example

> **Medium Risk** — Previous late cancellation + short booking lead time

This is intentionally designed as a **simple explainable prototype feature** rather than a claimed ML prediction model.

---

# 🕐 Faculty Availability

Faculty can create three types of availability.

## Recurring Office Hours

Example:

```text
Monday
10:00 AM – 12:00 PM

Wednesday
2:00 PM – 4:00 PM
```

## One-Time Availability

Example:

```text
August 15
11:00 AM – 1:00 PM
```

## Blocked Time

Example:

```text
August 15
12:00 PM – 1:00 PM

Reason: Department Meeting
```

The booking engine automatically respects blocked periods.

---

# 🔔 Notifications

The prototype includes an **in-app notification system**.

Notifications can be generated for:

* Appointment booked
* Appointment approved
* Appointment rejected
* Appointment cancelled
* Appointment rescheduled
* Waitlist slot available
* Appointment reminder

> External email, WhatsApp, and push notifications are **not claimed as implemented**.

---

# 📜 Appointment History

## Students Can View

* Upcoming appointments
* Completed appointments
* Cancelled appointments
* No-show appointments

## Faculty Can View

* Student
* Subject
* Date
* Time
* Status
* Appointment reason

---

# 📈 Faculty Utilization

The system calculates faculty utilization from available and booked appointment slots.

The dashboard provides:

* Available slots
* Booked slots
* Completed appointments
* Cancelled appointments
* No-shows
* Utilization percentage
* Appointment volume
* Peak demand periods

---

# 📊 HOD Analytics

The HOD/Admin dashboard includes detailed analytics.

## KPI Cards

* **Total Appointments**
* **Completion Rate**
* **No-Show Rate**
* **Slot Utilization**

## Charts

* Appointment volume
* Appointment status distribution
* Faculty utilization
* Peak appointment hours

Charts are implemented using **Recharts**.

---



## Demo Flow 1 — Student Booking

```text
Login as Student
        ↓
Find Faculty
        ↓
Search / Filter Faculty
        ↓
Open Faculty Profile
        ↓
Select Available Slot
        ↓
Enter Appointment Reason
        ↓
Confirm Booking
        ↓
View Appointment in Dashboard
```

---

## Demo Flow 2 — Conflict Resolution

```text
Select a Busy Appointment Slot
        ↓
System Detects Conflict
        ↓
Nearby Available Alternatives Displayed
        ↓
Student Selects Alternative
        ↓
Appointment Created
```

---

## Demo Flow 3 — Waitlist

```text
Select Faculty with No Available Slots
        ↓
Join Waitlist
        ↓
Switch to Faculty Account
        ↓
Cancel Existing Appointment
        ↓
Waitlisted Student Receives
Available-Slot Notification
```

---

## Demo Flow 4 — Faculty Management

```text
Login as Faculty
        ↓
Create Office Hours
        ↓
Block a Period
        ↓
View Appointments
        ↓
Approve / Reject Appointments
        ↓
Mark Appointment Completed / No-Show
```

---

## Demo Flow 5 — HOD Analytics

```text
Login as HOD/Admin
        ↓
Open Analytics
        ↓
View Appointment Statistics
        ↓
View Utilization
        ↓
View No-Show Statistics
        ↓
View Appointment Trends
        ↓
Filter by Department
```

---

# 🧪 Testing

The core business logic is kept separately so it can be tested independently.

Run the test suite:

```bash
npm test
```

## Important Business Logic Tests

* Valid booking
* Double-booking prevention
* Blocked slot prevention
* Past-slot prevention
* Conflict resolution
* Alternative slot generation
* Waitlist matching
* No-show score calculation
* Risk classification
* Authorization

---

# 🔒 Security

The prototype includes:

* Role-based authentication
* Protected routes
* Server-side validation
* Role-based access control
* Environment-based secrets
* Database-backed session handling

### Production Security

For production deployment, the following should be added:

* Supabase Auth
* Row Level Security (RLS)
* Production-grade session management
* Production database security policies

---

# 📱 Responsive Design

The application is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The primary demo experience is optimized for **laptop and desktop screens**.

---

# ♿ Accessibility

The prototype includes basic accessibility features:

* Semantic HTML
* Form labels
* Keyboard-accessible controls
* Visible focus states
* Accessible dialogs
* Clear loading states
* Clear error states
* Responsive layouts

---

# 🌱 Demo Data

The application includes fictional seeded data for a realistic hackathon demonstration.

The seed data contains:

* Departments
* Subjects
* Faculty
* Students
* Recurring office hours
* One-time office hours
* Blocked periods
* Existing appointments
* Completed appointments
* Cancelled appointments
* No-show appointments
* Waitlist entries
* Notifications

> All identities and records are fictional demo data.

---

# 💡 Why This Is More Than a Booking Calendar

ConnectHours is built around **four intelligent scheduling features**.

## 1. Smart Conflict Resolution

Instead of simply rejecting a conflicting booking, the system recommends nearby feasible slots.

## 2. Smart Waitlist

Cancelled slots can automatically be assigned to suitable waiting students.

## 3. Explainable No-Show Risk

The system provides a simple transparent risk score based on appointment history.

## 4. Faculty Utilization Intelligence

HOD/Admin users can understand how faculty office hours are being utilized.

These features make the platform more than a simple appointment calendar.

---

# 🏗️ Project Structure

```text
app/
├── login/
├── student/
├── faculty/
├── admin/
└── api/

components/
├── layout/
└── ui/

lib/
├── business.ts
├── data.ts
├── db.ts
├── seed.ts
└── schema.sql

supabase/
└── schema.sql

tests/

.env.example
README.md
package.json
```

---

# 🌐 Production Deployment

The current demo uses **SQLite** for simplicity.

For production deployment:

1. Create a Supabase project.
2. Run `supabase/schema.sql`.
3. Replace the SQLite data layer with Supabase/PostgreSQL queries.
4. Use Supabase Auth.
5. Add Row Level Security policies.
6. Configure production environment variables.
7. Deploy the Next.js application.

> For Vercel deployment, use **Supabase/PostgreSQL instead of the local SQLite database**.

---

# 🔮 Future Integrations

The following are intentionally **not faked** in the prototype:

* ABESEC ERP / SSO
* College authentication
* Timetable synchronization
* Academic calendar
* Email notifications
* WhatsApp notifications
* Google Calendar
* Push notifications
* Background job processing
* Production-grade Supabase Auth
* Production-grade RLS

These can be added after the initial pilot.

---

# 📈 Scalability

The project can be expanded gradually.

### Phase 1 — Pilot

Start with 1–2 departments.

### Phase 2 — Department Expansion

Expand to multiple departments.

### Phase 3 — College Deployment

Roll out across the college.

### Phase 4 — Campus Appointment Ecosystem

Expand beyond faculty appointments.

Potential future use cases include:

* Academic advising
* Student mentorship
* Project consultations
* Lab consultations
* Department appointments
* Administrative appointments

---

# 👥 Team

* **Shreya Singh**
* **Shrinkhla Saxena**
* **Rudraksh Chauhan**

---

# 🏆 WebSpark 2026

**ABES Engineering College (ABESEC)**

## Project Vision

> **ConnectHours makes faculty time discoverable, appointments predictable, and campus scheduling more efficient.**

Built as a working prototype for **WebSpark 2026**.

---

## 📌 Disclaimer

ConnectHours is a fictional/demo prototype created for the **WebSpark 2026 hackathon environment**.

All faculty names, student accounts, credentials, departments, appointments, and other records are fictional and should not be interpreted as real institutional data.
