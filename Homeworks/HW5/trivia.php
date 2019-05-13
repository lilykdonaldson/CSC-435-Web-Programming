<?php
$test = scandir('trivia/');
echo '<br>';
$homepage = file_get_contents('trivia/astronomy/astronomy1.txt');
echo $homepage;

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

#array of questions
echo '<script>';
echo 'var categories = ' . json_encode($categories) . ';';
echo '</script>';

?>



