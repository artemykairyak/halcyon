<?php
	$filename = 'email.txt';
	$date = date("d F Y H:i:s");
	$email = $_POST['email'];
	
	$f = fopen('email.txt', 'a+'); // Открываем файл
	fwrite($f, $date." ".$email."\r\n"); // Записываем данные
	fclose($f); // Закрываем файл

	// $text = file_get_contents($filename);
?>