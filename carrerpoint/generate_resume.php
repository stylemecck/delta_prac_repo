<?php
// PHP code to process form data and generate a PDF

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $jsonData = file_get_contents('php://input');
  $data = json_decode($jsonData, true);

  // Generate the resume PDF using a library of your choice
  // Example using the "FPDF" library
  require('fpdf/fpdf.php');

  // Create a new PDF instance
  $pdf = new FPDF();
  $pdf->AddPage();

  // Set font properties and output form data
  $pdf->SetFont('Arial', 'B', 12);
  $pdf->Cell(0, 10, 'Resume Builder - Form Data', 0, 1);
  $pdf->Ln(5);

  $pdf->SetFont('Arial', '', 12);
  foreach ($data as $key => $value) {
    $pdf->Cell(60, 10, $key . ':', 0, 0);
    $pdf->Cell(0, 10, $value, 0, 1);
    $pdf->Ln(5);
  }

  // Output the PDF as a string
  ob_start();
  $pdf->Output('I');
  $pdfData = ob_get_clean();

  // Send the PDF as a response
  header('Content-Type: application/pdf');
  header('Content-Disposition
