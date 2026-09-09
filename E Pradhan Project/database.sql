-- ========================================================================
-- E-PRADHAN SEVA DATABASE SCHEMA (e_pradhan_db)
-- Minor Project for Diploma in Information Technology (2026 - 2027)
-- Department of IT, Government Polytechnic, Khatima (Uttarakhand)
-- Guides & Authors: Neeraj Verma | Kunal Mehra, Amit, Ankit, Muskan, Amit Goswmi
-- Designed for MySQL / MariaDB (XAMPP Server Environment)
-- ========================================================================

CREATE DATABASE IF NOT EXISTS `e_pradhan_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `e_pradhan_db`;

-- ------------------------------------------------------------------------
-- Table 1: users (Citizen & General User Accounts)
-- Matches Section 7: id, name, email, phone, password, role
-- ------------------------------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `phone` VARCHAR(15) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `village_ward` VARCHAR(150) DEFAULT NULL,
  `aadhaar_last4` VARCHAR(4) DEFAULT NULL,
  `role` ENUM('citizen', 'admin') DEFAULT 'citizen',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Citizens
INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `village_ward`, `aadhaar_last4`, `role`) VALUES
(1, 'Ramesh Singh Bisht', 'citizen@epradhan.gov.in', '9876543210', '$2y$10$e0MYzXyjpJS7Pd0RVvHwHeoVd1q0O51WJ8v5W8tHjD9M1N4L8z7aK', 'Ward 4, Khatima Rural', '4921', 'citizen'),
(2, 'Sunita Rawat', 'sunita.rawat@mail.com', '9812345678', '$2y$10$e0MYzXyjpJS7Pd0RVvHwHeoVd1q0O51WJ8v5W8tHjD9M1N4L8z7aK', 'Village Melaghat, Khatima', '8834', 'citizen'),
(3, 'Mahesh Chandra Pant', 'mahesh.pant@mail.com', '9411223344', '$2y$10$e0MYzXyjpJS7Pd0RVvHwHeoVd1q0O51WJ8v5W8tHjD9M1N4L8z7aK', 'Ward 2, Chakarpur', '1159', 'citizen');

-- ------------------------------------------------------------------------
-- Table 2: admin (Administrator Accounts & System Roles)
-- Matches Section 7: id, name, email, password
-- ------------------------------------------------------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `designation` VARCHAR(100) DEFAULT 'Gram Pradhan / Administrator',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Admin (Default pass: admin)
INSERT INTO `admin` (`id`, `name`, `email`, `password`, `designation`) VALUES
(1, 'Neeraj Verma / Gram Pradhan Office', 'admin@epradhan.gov.in', '$2y$10$e0MYzXyjpJS7Pd0RVvHwHeoVd1q0O51WJ8v5W8tHjD9M1N4L8z7aK', 'Chief Administrator & Project Guide');

-- ------------------------------------------------------------------------
-- Table 3: schemes (Government Welfare & Development Schemes)
-- Matches Section 7: id, title, eligibility, documents, description
-- ------------------------------------------------------------------------
DROP TABLE IF EXISTS `schemes`;
CREATE TABLE `schemes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `scheme_code` VARCHAR(20) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `title_hi` VARCHAR(255) NOT NULL,
  `category` ENUM('welfare', 'financial', 'disaster', 'local', 'agri') NOT NULL,
  `department` VARCHAR(150) NOT NULL,
  `description` TEXT NOT NULL,
  `benefits` TEXT NOT NULL,
  `eligibility` TEXT NOT NULL,
  `documents` TEXT NOT NULL,
  `portal_link` VARCHAR(255) DEFAULT 'https://uk.gov.in',
  `is_active` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Schemes
INSERT INTO `schemes` (`scheme_code`, `title`, `title_hi`, `category`, `department`, `description`, `benefits`, `eligibility`, `documents`, `portal_link`) VALUES
('SCH-001', 'Atal Ayushman Uttarakhand Yojana', 'अटल आयुष्मान उत्तराखण्ड योजना', 'welfare', 'Dept of Medical Health & Family Welfare, UK', 'Cashless medical treatment for families in Uttarakhand.', 'Free health cover up to Rs 5 Lakh per family per year.', 'All permanent resident families of Uttarakhand with valid NFSA / Ration Card.', 'Aadhaar Card, Ration Card, State Family ID, Voter ID.', 'https://ayushmanuttarakhand.org'),
('SCH-002', 'PM-KISAN Samman Nidhi Yojana', 'प्रधानमंत्री किसान सम्मान निधि योजना', 'agri', 'Ministry of Agriculture & Farmers Welfare, GoI', 'Direct income support for farmer families with landholding.', 'Rs 6,000 per year transferred in 3 equal quarterly installments.', 'Small and marginal farmers holding cultivable land in revenue records.', 'Aadhaar Card, Land Record (Khatauni), Bank Passbook with NPCI.', 'https://pmkisan.gov.in'),
('SCH-003', 'Uttarakhand Vridhavastha Pension Yojana', 'उत्तराखण्ड वृद्धावस्था पेंशन योजना', 'welfare', 'Social Welfare Department, Uttarakhand', 'Monthly financial support for senior citizens.', 'Rs 1,500 monthly pension deposited directly to bank account.', 'Age 60 years or above belonging to BPL or annual income below Rs 48,000.', 'Age proof, Income Certificate, BPL Card, Bank Passbook, Photos.', 'https://socialwelfare.uk.gov.in'),
('SCH-004', 'Mukhyamantri Swarojgar Yojana (MSY)', 'मुख्यमंत्री स्वरोजगार योजना (MSY)', 'financial', 'Directorate of Industries, Uttarakhand', 'Subsidized self-employment credit scheme.', 'Term loans up to Rs 25 Lakh (Industry) and Rs 10 Lakh (Services) with 15-25% subsidy.', 'Uttarakhand permanent residents aged 18+ setting up enterprise.', 'Detailed Project Report (DPR), Domicile, Aadhaar, Bank Statement.', 'https://msy.uk.gov.in'),
('SCH-005', 'Gaura Devi Kanyadhan Yojana', 'नंदा गौरा / गौरा देवी कन्याधन योजना', 'welfare', 'Women Empowerment & Child Development, UK', 'Financial grant for girl child birth and higher education.', 'Rs 11,000 upon birth and Rs 51,000 upon passing 12th standard.', 'Girl students passing 12th from UK board with annual income under Rs 72,000.', '12th Marksheet, Domicile certificate, Income certificate, Aadhaar.', 'https://wecd.uk.gov.in'),
('SCH-006', 'Jal Jeevan Mission (Har Ghar Nal Se Jal)', 'जल जीवन मिशन (हर घर नल से जल)', 'local', 'Uttarakhand Jal Sansthan & Jal Nigam', 'Potable household piped tap water connection for rural families.', 'Clean tap water delivered at 55 liters per capita per day.', 'Rural households in Gram Panchayats without functional connection.', 'Aadhaar Card, Residence proof, Ration Card.', 'https://jaljeevanmission.gov.in');

-- ------------------------------------------------------------------------
-- Table 4: grievances (Citizen Grievance / Complaint Records)
-- Matches Section 7: id, user_id, subject, description, status, created_at
-- ------------------------------------------------------------------------
DROP TABLE IF EXISTS `grievances`;
CREATE TABLE `grievances` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `complaint_id` VARCHAR(50) NOT NULL UNIQUE,
  `user_id` INT DEFAULT NULL,
  `citizen_name` VARCHAR(120) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `village_ward` VARCHAR(150) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `priority` ENUM('Normal', 'High') DEFAULT 'Normal',
  `subject` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `status` ENUM('Pending', 'In Review', 'In Progress', 'Resolved', 'Rejected') DEFAULT 'Pending',
  `officer_name` VARCHAR(120) DEFAULT 'Under Assignment',
  `officer_remarks` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_grievance_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Grievances
INSERT INTO `grievances` (`complaint_id`, `user_id`, `citizen_name`, `phone`, `village_ward`, `category`, `priority`, `subject`, `description`, `status`, `officer_name`, `officer_remarks`) VALUES
('EPS-UK-2026-1042', 1, 'Ramesh Singh Bisht', '9876543210', 'Ward 4, Khatima Rural', 'water', 'High', 'Broken main pipeline causing water scarcity near primary school', 'The primary drinking water pipeline connecting Ward 4 has been cracked for 10 days. Water is leaking on road.', 'Resolved', 'Er. V. P. Joshi (Junior Engineer, Jal Sansthan)', 'Pipeline replaced by team on 07 Sept 2026. Water pressure normal.'),
('EPS-UK-2026-1088', 2, 'Sunita Rawat', '9812345678', 'Village Melaghat, Khatima', 'pension', 'Normal', 'Old age pension installment delayed for Q1 2026', 'My mother-in-law was receiving Old Age Pension regularly, but last installment is delayed.', 'In Progress', 'K. S. Chauhan (Assistant Social Welfare Officer)', 'Life certificate verified. Bank Aadhaar mapper re-linked. Disbursing in 3 days.'),
('EPS-UK-2026-1120', 3, 'Mahesh Chandra Pant', '9411223344', 'Ward 2, Chakarpur', 'electricity', 'High', 'Damaged street transformer causing heavy voltage fluctuation', '25 KVA transformer in Ward 2 is sparking intermittently and high voltage spikes damaging appliances.', 'In Review', 'S. K. Verma (SDO, Power Corporation)', 'Field team dispatched for load checking and transformer replacement order.');

-- ------------------------------------------------------------------------
-- Table 5: notifications (System & Status Change Notifications)
-- Matches Section 7: id, user_id, message, status, created_at
-- ------------------------------------------------------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT DEFAULT NULL,
  `complaint_id` VARCHAR(50) DEFAULT NULL,
  `message` VARCHAR(255) NOT NULL,
  `status` ENUM('unread', 'read') DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_notif_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `notifications` (`user_id`, `complaint_id`, `message`, `status`) VALUES
(1, 'EPS-UK-2026-1042', 'Your grievance EPS-UK-2026-1042 has been successfully RESOLVED by Jal Sansthan.', 'unread'),
(2, 'EPS-UK-2026-1088', 'Your grievance EPS-UK-2026-1088 is now IN PROGRESS with Social Welfare Desk.', 'unread'),
(3, 'EPS-UK-2026-1120', 'Your grievance EPS-UK-2026-1120 has been received and is IN REVIEW with UPCL.', 'read');
