<?php
$users = array(
	'Анатолий',
	'Андрей',
	'Александр',
	'Алексей',
	'Борода',
	'Владимир',
	'Володя',
	'Евгений',
	'Евгения',
	'Михаил',
	'Ольга',
	'Омак',
	'Павел',
	'Паша',
	'Женя',
	'Роман',
	'Сергей'
);

if (isset($_GET['term'])) {

	$searchString = $_GET['term'];
	
	$resultArray = array();
	
	foreach($users as $user) {
		$comparePos = stripos($user, $searchString);
		if ( false !== $comparePos ) {
			if ($comparePos == 0) {
				array_unshift($resultArray, $user);
			} else {
				array_push($resultArray, $user);
			}
		} else {
			$compareLeven = levenshtein($searchString, $user);
			if ($compareLeven >= 0 && $compareLeven < 3) {
				array_push($resultArray, $user);
			}
		}
	}
	
	echo json_encode($resultArray);
}