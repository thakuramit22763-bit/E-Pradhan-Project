<?php
/**
 * E-PRADHAN SEVA - REST API Controller
 * Minor Project - Diploma in Information Technology
 * Government Polytechnic, Khatima (2026 - 2027)
 */

require_once __DIR__ . '/db_connect.php';

// Enable CORS for local testing
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$action = $_GET['action'] ?? '';

switch ($action) {

    // 1. Fetch All Government Schemes
    case 'get_schemes':
        try {
            $stmt = $pdo->query("SELECT * FROM `schemes` WHERE `is_active` = 1 ORDER BY `id` ASC");
            $schemes = $stmt->fetchAll();
            echo json_encode(["status" => "success", "data" => $schemes]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
        break;

    // 2. Track Grievance by ID
    case 'track':
        $complaint_id = $_GET['id'] ?? '';
        if (empty($complaint_id)) {
            echo json_encode(["status" => "error", "message" => "Complaint ID is required."]);
            exit;
        }

        $stmt = $pdo->prepare("SELECT * FROM `grievances` WHERE UPPER(`complaint_id`) = UPPER(:id)");
        $stmt->execute(['id' => $complaint_id]);
        $record = $stmt->fetch();

        if ($record) {
            echo json_encode(["status" => "success", "data" => $record]);
        } else {
            echo json_encode(["status" => "not_found", "message" => "No grievance found with Complaint ID: " . htmlspecialchars($complaint_id)]);
        }
        break;

    // 3. Submit New Grievance
    case 'submit_grievance':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            echo json_encode(["status" => "error", "message" => "POST request required."]);
            exit;
        }

        $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

        $name = trim($input['citizenName'] ?? '');
        $phone = trim($input['phone'] ?? '');
        $village = trim($input['village'] ?? '');
        $category = trim($input['category'] ?? '');
        $priority = trim($input['priority'] ?? 'Normal');
        $subject = trim($input['subject'] ?? '');
        $description = trim($input['description'] ?? '');

        if (empty($name) || empty($phone) || empty($village) || empty($subject) || empty($description)) {
            echo json_encode(["status" => "error", "message" => "All mandatory fields must be filled."]);
            exit;
        }

        // Generate Complaint ID format: EPS-UK-2026-XXXX
        $complaint_id = 'EPS-UK-2026-' . rand(1000, 9999);

        try {
            $stmt = $pdo->prepare("INSERT INTO `grievances` 
                (`complaint_id`, `citizen_name`, `phone`, `village_ward`, `category`, `priority`, `subject`, `description`, `status`) 
                VALUES (:cid, :cname, :cphone, :cvillage, :ccat, :cpriority, :csubject, :cdesc, 'Pending')");
            
            $stmt->execute([
                'cid' => $complaint_id,
                'cname' => $name,
                'cphone' => $phone,
                'cvillage' => $village,
                'ccat' => $category,
                'cpriority' => $priority,
                'csubject' => $subject,
                'cdesc' => $description
            ]);

            echo json_encode([
                "status" => "success",
                "message" => "Grievance registered successfully!",
                "complaint_id" => $complaint_id
            ]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
        break;

    // 4. Update Grievance Status (Admin Desk)
    case 'update_status':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            echo json_encode(["status" => "error", "message" => "POST request required."]);
            exit;
        }

        $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
        $complaint_id = trim($input['complaint_id'] ?? '');
        $new_status = trim($input['status'] ?? '');
        $officer_name = trim($input['officer_name'] ?? 'Authorized Officer');
        $remarks = trim($input['remarks'] ?? '');

        if (empty($complaint_id) || empty($new_status)) {
            echo json_encode(["status" => "error", "message" => "Complaint ID and Status are required."]);
            exit;
        }

        try {
            $stmt = $pdo->prepare("UPDATE `grievances` SET 
                `status` = :status, 
                `officer_name` = :officer, 
                `officer_remarks` = :remarks 
                WHERE `complaint_id` = :cid");

            $stmt->execute([
                'status' => $new_status,
                'officer' => $officer_name,
                'remarks' => $remarks,
                'cid' => $complaint_id
            ]);

            echo json_encode(["status" => "success", "message" => "Grievance status updated successfully!"]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
        break;

    default:
        echo json_encode([
            "status" => "online",
            "platform" => "E-PRADHAN SEVA API Layer",
            "version" => "1.0",
            "institute" => "Government Polytechnic, Khatima",
            "endpoints" => [
                "GET ?action=get_schemes",
                "GET ?action=track&id=EPS-UK-2026-1042",
                "POST ?action=submit_grievance",
                "POST ?action=update_status"
            ]
        ]);
        break;
}
?>
