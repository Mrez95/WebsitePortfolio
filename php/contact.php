<?php>
	$name = $_POST['client'];
	$email = $_POST['address'];
	$content = $_POST['message'];

	$to = "ez95@live.ca";
	$subject = "NEW Greeting from Bazhanga";
	$headers = "From: webmaster@example.com" . "\r\n" .
	"CC: mrez95@gmail.com";

	mail($to,$subject,$content,$headers);

?>