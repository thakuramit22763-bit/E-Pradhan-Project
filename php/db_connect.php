<?php
/**
 * E-PRADHAN SEVA - Database Connection Handler
 * Minor Project - Diploma in Information Technology
 * Government Polytechnic, Khatima (Directorate of Technical Education, Uttarakhand)
 */

header('Content-Type: application/json; charset=utf-8');

$host = "localhost";
$dbname = "e_pradhan_db";
$username = "root";
$password = ""; // Default XAMPP MySQL password is blank

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
} catch (PDOException $e) {
    // If running standalone or without XAMPP MySQL running, return JSON notice
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed: " . $e->getMessage(),
        "tip" => "Ensure MySQL service is started in XAMPP and 'e_pradhan_db' database is imported using database.sql."
    ]);
    exit;
}
?>
