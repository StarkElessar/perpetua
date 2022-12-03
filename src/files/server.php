<?php

  // Файлы phpmailer
  require 'phpmailer/SMTP.php';
  require 'phpmailer/Exception.php';
  require 'phpmailer/PHPMailer.php';

  // Переменные, которые отправляет пользователь
  $name = $_POST['your-name'];
  $email = $_POST['email'];
  $company = $_POST['company'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];


  // Настройки PHPMailer
  $mail = new PHPMailer(true);
  $mail -> CharSet = 'UTF-8';
  $mail -> IsHTML(true);
    $mail->Host = 'yttrium.cloudhosting.uk';  // Specify main and backup SMTP servers
    $mail->Username = 'no-reply@perpetuadna.com';                 // SMTP username
    $mail->Password = '8h[h0&h9^tZx';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;   

  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
  $mail->Host = 'yttrium.cloudhosting.uk';// Specify main and backup SMTP servers
  $mail->Username = 'no-reply@perpetuadna.com';// SMTP username
  $mail->Password = '8h[h0&h9^tZx';// SMTP password
  $mail->SMTPSecure = 'tls';// Enable TLS encryption, `ssl` also accepted
  $mail->Port = 587;

  $mail -> setFrom('no-reply@perpetuadna.com', 'Perpetua DNA subscription');
  $mail->addAddress('genesisenrol@perpetuadna.com', 'Perpetua DNA subscription');
  $mail->addAddress('perpetua@perpetuadna.com', 'Perpetua DNA subscription'); // Add a recipient
  $mail -> Subject = 'Here is the new subject';

  $body = "
    <h2>here is your new subscriber:</h2>
    <b>Email:</b> $email<br><br>
    <b>Name:</b> $name<br><br>
    <b>Company:</b> $company<br><br>
    <b>Message:</b> $message<br><br>
  ";

  $mail -> Body = $body;

  if ($mail->send()) {
    $result = "success";
    $msg = "Message sent successfully";
  } else {
    $result = "error";
    $msg = "Message not sent. Try again later";
  }

  // Отображение результата
  echo json_encode([
    "result" => $result, 
    "resultfile" => $rfile, 
    "status" => $status,
    "message" => $msg
  ]);
