<!DOCTYPE html>
<!--
CSC 435 Homework 6: Form validation
-->
<html>
	<head>
		<title>Order food</title>
	</head>
	<body>
		<p>Order successful! $<?php echo $_GET["total"]; ?> is your total price.<br>
		Here is what you ordered: 
		<?php 
		$food = $_GET["item"];
		for($num = 0; $num < $_GET["num"]; $num += 1) {
			$string = '<img src="'.$food.'.jpg" width="20">';
			echo $string;
		}
		
	 	?>
	 
	</p>
	</body>
</html>

