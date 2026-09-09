# E-PRADHAN SEVA (ई-प्रधान सेवा)
### A Digital Platform for Government Scheme Awareness and Online Grievance Redressal
**MINOR PROJECT SYNOPSIS IMPLEMENTATION — DIPLOMA IN INFORMATION TECHNOLOGY (2026 - 2027)**  
**Department of Information Technology, Government Polytechnic, Khatima (Directorate of Technical Education, Uttarakhand)**

---

## 👥 Project Credentials (From Official Synopsis)

- **Guided By:** **NEERAJ VERMA** (Lecturer / Project Guide, Dept of IT)
- **Project Team Members (Students):**
  1. **KUNAL MEHRA**
  2. **AMIT**
  3. **ANKIT**
  4. **MUSKAN**
  5. **AMIT GOSWMI**
- **Institution:** Department of Information Technology, Government Polytechnic, Khatima (U.S. Nagar, Uttarakhand)

---

## 🌟 Key Features & Protocol Compliance

### 1. GIGW (Guidelines for Indian Government Websites) Protocol Compliance
- **Accessibility Toolbar:**
  - Font scaling: `A-` (Small), `A` (Normal), `A+` (Large).
  - High Contrast Theme (`🌓 Contrast`) for visual impairment / low-vision support.
  - Skip to Main Content keyboard navigational link.
- **Bilingual Language Toggle:**
  - Instant toggle between **English** and **हिन्दी (Devanagari)** across the entire platform.
- **Official Government Branding:**
  - Ashoka Emblem & Uttarakhand State colors (Navy Blue, Saffron, Ashoka Green).
  - Helpline Directory (CM Helpline 1905, Women Powerline 1090, Disaster Emergency 1077).
- **Academic Prototype Disclaimer:**
  - Prominent disclaimer on top ribbon as prescribed in Sections 1, 3, and 11 of the synopsis.

---

## 🚀 How to Run the Website

### Option A: Instant 1-Click Run in Any Web Browser (No Server Required!)
1. Open the project folder: `c:\Users\hp\OneDrive\Desktop\Project`
2. Simply double-click `index.html` (or right-click -> *Open with Google Chrome / Microsoft Edge*).
3. The platform will run with full features, local data persistence, interactive search, grievance submission, printable receipt generator, and tracking!

### Option B: Local XAMPP Server Deployment (As per Synopsis Section 8)
1. Install **XAMPP** (Apache + MariaDB/MySQL + phpMyAdmin).
2. Copy the entire `Project` folder into your XAMPP web directory:
   ```
   C:\xampp\htdocs\e-pradhan-seva
   ```
3. Start **Apache** and **MySQL** in XAMPP Control Panel.
4. Open your browser and visit: `http://localhost/phpmyadmin`
5. Create a new database named `e_pradhan_db`.
6. Click **Import** and upload the file `database.sql` located inside the project folder.
7. Access the application at: `http://localhost/e-pradhan-seva/`

---

## 📋 Core User Flow & Demo Data

```
LOGIN / लॉगिन  ➔  DASHBOARD / डैशबोर्ड  ➔  SCHEME AWARENESS / योजना जानकारी  ➔  COMPLAINT BOX / शिकायत बॉक्स  ➔  COMPLAINT ID / शिकायत आईडी  ➔  STATUS TRACKING / स्थिति ट्रैकिंग
```

### 🔑 Pre-Configured Demo Credentials:
- **Admin Desk:** `admin@epradhan.gov.in` | Password: `admin`
- **Citizen User:** `citizen@epradhan.gov.in` | Password: `password`

### 🔎 Pre-Loaded Complaint IDs for Live Tracking:
1. `EPS-UK-2026-1042` — **Status: Resolved** (Drinking Water Pipeline leak repair by Jal Sansthan)
2. `EPS-UK-2026-1088` — **Status: In Progress** (Old Age Pension delay verification by Social Welfare Dept)
3. `EPS-UK-2026-1120` — **Status: In Review** (Street transformer sparking inspection by UPCL Power Corp)

---

## 🗄️ Database Architecture (Section 7 Synopsis Mapping)

| Table Name | Purpose / उद्देश्य | Key Fields |
| :--- | :--- | :--- |
| `users` | Citizen accounts & credentials | `id`, `name`, `email`, `phone`, `password`, `village_ward`, `role` |
| `schemes` | Central & State welfare schemes | `id`, `scheme_code`, `title`, `category`, `eligibility`, `documents`, `benefits`, `portal_link` |
| `grievances`| Online citizen complaints | `id`, `complaint_id`, `citizen_name`, `phone`, `village_ward`, `category`, `priority`, `subject`, `description`, `status`, `officer_remarks` |
| `notifications` | Status update notifications | `id`, `user_id`, `complaint_id`, `message`, `status`, `created_at` |
| `admin` | Administrator login details | `id`, `name`, `email`, `password`, `designation` |

---

## 🎯 Diploma IT Viva-Voce Questions & Answers

1. **Q: What is the main objective of E-Pradhan Seva?**  
   *A:* To bridge the digital divide in rural governance by providing a single-window platform for government scheme awareness (eligibility & documents) and transparent online grievance redressal with real-time status tracking.

2. **Q: Why is this project compliant with GIGW?**  
   *A:* GIGW (Guidelines for Indian Government Websites) mandates accessibility standards like font resizing, high-contrast display for visually impaired individuals, bilingual support, and clear official disclaimers.

3. **Q: How does the 5-stage grievance pipeline work?**  
   *A:* The lifecycle consists of:
   1. *Login / Verification*
   2. *Submit (Complaint ID generated)*
   3. *Admin Review (Assigned to officer)*
   4. *In Progress (Field inspection / action initiated)*
   5. *Resolved (Resolution note & citizen rating)*.

4. **Q: How does data persist without a database in standalone mode?**  
   *A:* Using HTML5 `localStorage`, which saves records locally in the browser. For server-side XAMPP deployment, the system uses MySQL relational tables defined in `database.sql` and PHP PDO scripts in `php/api.php`.
