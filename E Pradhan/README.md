# E-PRADHAN SEVA (ई-प्रधान सेवा)
### Official Digital E-Governance Portal for Welfare Schemes & Public Grievance Redressal
**Department of Panchayati Raj, Government of Uttarakhand (उत्तराखण्ड शासन)**

---

## 🏛️ Portal Overview

**E-Pradhan Seva** is an integrated single-window rural e-governance portal developed for the **Department of Panchayati Raj, Government of Uttarakhand**. It empowers citizens with instant access to state and central welfare schemes, essential civic utilities, revenue services, and a transparent 5-stage online grievance redressal tracking pipeline under the **Uttarakhand Right to Public Service Act 2011**.

---

## 🌟 Core Modules & Architecture

### 1. Popular Citizen Services Directory (लोकप्रिय नागरिक ई-सेवाएँ)
Direct access to 12 core civic and departmental services with custom high-definition vector icons, guaranteed turnaround SLAs, and integrated application triggers:
- **Drinking Water Supply & Jal Jeevan Mission** (Uttarakhand Jal Sansthan — 48h SLA)
- **Electricity Outage & Street Lighting** (UPCL Power Corporation — 24h SLA)
- **Social Welfare Pensions** (Old Age, Widow, Disability — 7 Days SLA)
- **Revenue Certificates** (Caste, Income, Domicile via e-District — 5 Days SLA)
- **PM-Kisan Samman Nidhi & Crop Insurance** (Department of Agriculture — 7 Days SLA)
- **PMAY-G Rural Pucca Housing** (Rural Development Department)
- **NFSA Ration Card & Food Quota** (Food & Civil Supplies Department — 3 Days SLA)
- **Atal Ayushman ₹5 Lakh Health Cover** (Health & Family Welfare Department — 24h Golden Card)
- **Birth & Death Civil Registration** (Panchayat Registrar — 3 Days SLA)
- **Rural Roads, Drainage & Sanitation** (PWD & Gram Panchayat — 48h SLA)
- **MGNREGA Job Card & 100 Days Work** (Rural Development Department — 15 Days Work Guarantee)
- **24x7 Public Grievance Single Window** (E-Pradhan Redressal Desk — 48h SLA)

---

### 2. Citizen Self-Service Dashboard (नागरिक स्व-सेवा डैशबोर्ड)
A unified citizen portal featuring:
- **Aadhaar-Verified Citizen Profile Widget** with Ward and Gram Panchayat identification.
- **My Grievances Registry**: Filterable table by status (All, Resolved, Active) with 1-click live status tracker and printable official PDF registration slip.
- **Personalized Scheme Recommendations**: Filtered welfare initiatives based on family income, domicile, and farmer/resident category.
- **Digital Document Locker**: Verified DigiLocker integration for Aadhaar, Ration Card, Domicile, and Ayushman Golden Card.
- **Official Administrative Notifications Feed**: Real-time chronological audit alerts from field officers and departments.

---

### 3. Administrator & Officer Control Command Center (अधिकारी नियंत्रण कक्ष)
An executive command center for the Gram Pradhan, Panchayat Secretary (VDO), and Nodal Officers:
- **Live Command Bar**: Real-time server clock, nodal officer credential badge, and redressal engine status.
- **Executive KPI Cards**: Real-time metrics for total complaints, pending action, under investigation, and resolved on ground.
- **Departmental Resolution Efficiency Index**: Visual SLA progress track and department-wise resolution ratios (Jal Sansthan, UPCL, Social Welfare, PWD).
- **Grievance Redressal Registry & Dispatch**: One-click action modal to assign officers, add official resolution remarks, and update statuses.
- **Audit Export**: 1-click CSV export and printable official audit log.

---

### 4. Panchayat Administrative Hierarchy & Citizen Charter (नागरिक अधिकार पत्र)
- **Administrative Hierarchy**: Public Representatives and administrative officers (Gram Pradhan, Panchayat Secretary / VDO, Block Development Officer, District Panchayati Raj Officer).
- **Citizen Charter (सेवा का अधिकार अधिनियम 2011)**: Legal turnaround limits for civic services and designated appellate authorities.
- **RTI Cell & Toll-Free Directory**: Right to Information officer contact and 24x7 CM Helpline 1905 integration.

---

### 5. GIGW 3.0 Protocol & Accessibility Compliance
- **Accessibility Toolbar**: Font scaling (`A-`, `A`, `A+`), High Contrast Mode (`🌓 Contrast`), and Skip to Main Content keyboard link.
- **Bilingual Engine**: Instant real-time toggle between **English** and **हिन्दी (Devanagari)** across the entire portal.
- **Official State Branding**: Ashoka Emblem, Uttarakhand State colors, and toll-free emergency helplines (1905, 1090, 1077, 112).

---

## 🚀 How to Run the Portal

### Option A: Instant 1-Click Run in Any Web Browser (No Server Required!)
1. Open the project folder: `c:\Users\hp\OneDrive\Desktop\E Pradhan`
2. Double-click `index.html` (or right-click -> *Open with Chrome / Edge*).
3. The portal runs with full local data persistence (HTML5 LocalStorage), live search, grievance filing, tracking, printable slip generator, and bilingual switcher!

### Option B: Enterprise XAMPP / Apache Deployment
1. Install **XAMPP** (Apache + MariaDB/MySQL + PHP).
2. Copy the project folder into your XAMPP directory:
   ```
   C:\xampp\htdocs\e-pradhan-seva
   ```
3. Start **Apache** and **MySQL** in XAMPP Control Panel.
4. Visit `http://localhost/phpmyadmin` and create database `e_pradhan_db`.
5. Import `database.sql`.
6. Access the portal at: `http://localhost/e-pradhan-seva/`

---

## 🔑 Pre-Configured Demo Credentials
- **Admin Command Desk:** `admin@epradhan.gov.in` | Password: `admin`
- **Citizen User:** `citizen@epradhan.gov.in` | Password: `password`

### Pre-Loaded Grievance Token IDs for Live Tracking:
1. `EPS-UK-2026-1042` — **Status: Resolved** (Drinking Water Pipeline Repair by Jal Sansthan)
2. `EPS-UK-2026-1088` — **Status: In Progress** (Old Age Pension Verification by Social Welfare Dept)
3. `EPS-UK-2026-1120` — **Status: In Review** (Street Transformer Sparking by UPCL Power Corp)

---

## 🗄️ Database Architecture (`database.sql`)

| Table Name | Purpose | Key Fields |
| :--- | :--- | :--- |
| `users` | Citizen profiles & login credentials | `id`, `name`, `email`, `phone`, `password`, `village_ward`, `role` |
| `schemes` | Central & State welfare initiatives | `id`, `scheme_code`, `title`, `category`, `eligibility`, `documents`, `benefits`, `portal_link` |
| `grievances` | Online citizen complaints | `id`, `complaint_id`, `citizen_name`, `phone`, `village_ward`, `category`, `priority`, `subject`, `description`, `status`, `officer_remarks` |
| `notifications` | Administrative status update notifications | `id`, `user_id`, `complaint_id`, `message`, `status`, `created_at` |
| `admin` | Departmental officer credentials | `id`, `name`, `email`, `password`, `designation` |

---

## 📞 Official Contacts
- **Department:** Directorate of Panchayati Raj, Government of Uttarakhand
- **Secretariat Campus:** Subhash Road, Dehradun - 248001
- **CM Toll-Free Helpline:** 1905 (24x7)
- **Official Desk Email:** `panchayat-uk@nic.in`
