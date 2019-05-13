<?php
// get the parameter q from URL
$q=$_REQUEST["q"];

$test = scandir('trivia/');

#get category names
$categories=[];
for ($i = 2; $i <= 10; $i++) {
    array_push($categories,$test[$i]);
} 

#get number of files in each category
#make sure there is no DS_store file mac users
$j=0;
$file_num_list = [];
foreach ($categories as $cat){
	$astring = ('trivia/'.$categories[$j]);
	//echo $cat;
	$fi = new FilesystemIterator($astring, FilesystemIterator::SKIP_DOTS);
	array_push($file_num_list,iterator_count($fi));
	$j++;
}
$key = array_search($q, $categories);
$num_ran = mt_rand(0,$file_num_list[$key]);
$random=array_rand($categories);
/*echo($random);
echo($file_num_list[$key]);
echo("<br>");*/
$filename = "trivia/".$q."/".$q.$random.".txt";

$HERE = file_get_contents($filename);
$crash_prevent = 0;
while((!$HERE)&&$crash_prevent<500){
	$key = array_search($q, $categories);
	$num_ran = mt_rand(0,$file_num_list[$key]);
	$random=array_rand($categories);
	$filename = "trivia/".$q."/".$q.$random.".txt";
	$crash_prevent = $crash_prevent+1;
}
if(!$HERE){
	echo("Try again.");
}
echo($HERE);


?>