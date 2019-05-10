<!--
CSC 435 Homework 6: Books
-->
<?php 
$file_lines = file('books.txt');
$thestring = "";
$array_of_JSON = [];
foreach ($file_lines as $line) {
    $current = explode("|",$line);
    $thestring = $thestring."{";
    $thestring = $thestring.'"Title":"'.$current[0].'",';
    $thestring = $thestring.'"Author":"'.$current[1].'",';
    $thestring = $thestring.'"Genre":"'.$current[2].'",';
    $thestring = $thestring.'"Year":"'.$current[3].'",';
    $thestring = $thestring.'"Price":"'.$current[4];
    $thestring = substr($thestring, 0,-1);
    $thestring = $thestring.'"}';
    $array_of_JSON[] = $thestring;
    //echo $thestring;
    //echo "<br>";
    $thestring = "";

}
//echo $array_of_JSON[0];
foreach ($array_of_JSON as $item) {
	var_dump(json_decode($item));
	echo "<br>";
}
?>
