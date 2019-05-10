<!--
CSC 435 Homework 6: Form validation
-->
<?php
$food = $_POST['item'];
$num = $_POST['quantity'];
$file_lines = file('inventory.txt');
foreach ($file_lines as $check){
	if (strpos($check, $food) !== false) {
    	$current = (explode("	",$check));
		}
}
if($current[1]<$num){
	echo "Not enough inventory.";
}
else{
	$total = $current[2]*$num;
	echo $total;
	$url="price.php" . "?total=" . $total . "&num=" . $num . "&item=" . $food;
	ob_start();
	header('Location: '.$url);
	ob_end_flush();
	exit(); 
}



?>