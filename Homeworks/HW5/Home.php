<?php
$test = scandir('trivia/');
//echo '<br>';
//$homepage = file_get_contents('trivia/astronomy/astronomy1.txt');
//echo $homepage;

#get category names
$categories=[];
for ($i = 2; $i <= 10; $i++) {
    array_push($categories,$test[$i]);
} 

#get number of files in each category
#*make sure there is no DS_store file mac users
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




<html>
	<head>
		<title>Trivia!</title>
		<link rel="stylesheet" type="text/css" href="trivia.css">
    <?php $my_var = 3; ?>
    <script src="trivia.js" type="text/javascript"></script>
	</head>
	<body>
		<h1>Trivia-It!</h1>

    <main>
      <div class="controls">
		    <button onclick="displayCategories()"id="view-all">List Categories</button>
      </div>
      <div class="hidden" id="category-view">
        <h2 class="hidden" id="categories-heading">Categories:</h2>
		    <ul id="categories"></ul>
      </div>
      <div class="hidden" id="question-view">
        <div class="controls">
		      <button id="next">Next Question</button>
        </div>
		    <div class="hidden" id="card"></div>
      </div>
      <p> <span id="factors"></span></p>
    </main>

	</body>
</html>
