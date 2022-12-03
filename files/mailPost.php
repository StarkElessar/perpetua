<?php
// Файлы phpmailer
require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

// Переменные, которые отправляет пользователь
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "You have been given contacts";
$body = "
<h2>You have been given contacts:</h2>
<b>First Name:</b> $first_name<br>
<b>Last Name:</b> $last_name<br>
<b>Email:</b> $email<br><br>
<b>Message:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    $mail->Host = 'yttrium.cloudhosting.uk';  // Specify main and backup SMTP servers
    $mail->Username = 'no-reply@perpetuadna.com';                 // SMTP username
    $mail->Password = '8h[h0&h9^tZx';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;   

    $mail->setFrom('no-reply@perpetuadna.com', 'Perpetua DNA subscription');
    $mail->addAddress('genesisenrol@perpetuadna.com', 'Perpetua DNA subscription');
    $mail->addAddress('perpetua@perpetuadna.com', 'Perpetua DNA subscription'); // Add a recipient

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "The message was not sent. The reason for the error: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
