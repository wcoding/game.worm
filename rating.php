<?php

function save($name, $score) {
    $f = fopen('results.txt', 'a+');
	fwrite($f, $name . ":" . $score . "\n");
    fclose($f);
}

function output() {
	$data = file('results.txt');
	$pars = array();
	$array = array();
	foreach($data as $value) {
		$pars = explode(':', $value);
		$array[] = array('name' => $pars[0], 'score' => trim($pars[1])); 
	}
	echo json_encode($array);
}

if ( !empty($_POST) ) {
    $array = json_decode($_POST['json'], true);
	$name = $array['name'];
	$score = $array['score'];
	save($name, $score);
	output();
}
elseif ( isset($_GET['json']) ) {
    $array = json_decode($_GET['json'], true);
	$name = $array['name'];
	$score = $array['score'];
	save($name, $score);
	output();
} else {
	output();
}