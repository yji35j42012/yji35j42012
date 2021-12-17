<?php 
	header("Content-Type:text/html; charset=utf-8");
	require_once 'connectSql.php';

	$content = file_get_contents("php://input");// 從api中讀取資料到PHP變數
	$data = json_decode($content , true);// 把JSON字串轉成PHP陣列
	$done ="false";

	// $sql = "INSERT INTO `evaluate`(  `evaluate_store`, `evaluate_menu`, `evaluate_eat`, `evaluate_action`, `evaluate_amount`, `evaluate_experience`, `evaluate_user`, `evaluate_date`) 
	// 		VALUES ('". 
	// 		$data["evaluate_store"] ."','" . 
	// 		$data["evaluate_menu"] . "'," . 
	// 		$data["evaluate_eat"] . ",". 
	// 		$data["evaluate_action"] . "," . 
	// 		$data["evaluate_amount"] . ",'". 
	// 		$data["evaluate_experience"] . "','". 
	// 		$data["evaluate_user"] . "','". 
	// 		$data["evaluate_date"] ."')";
	$sql =" UPDATE `evaluate` SET 
			`evaluate_store`='".$data["evaluate_store"]."' , 
			`evaluate_menu`='".$data["evaluate_menu"]."' , 
			`evaluate_eat`='".$data["evaluate_eat"]."', 
			`evaluate_action`='".$data["evaluate_action"]."',
			`evaluate_amount`='".$data["evaluate_amount"]."',
			`evaluate_experience`='".$data["evaluate_experience"]."',
			`evaluate_user`='".$data["evaluate_user"]."',
			`evaluate_date`='".$data["evaluate_date"]."' WHERE `evaluate_id` = ".$data["evaluate_id"];

			// UPDATE `evaluate` SET `evaluate_store`=[value-2],`evaluate_menu`=[value-3],`evaluate_eat`=[value-4],`evaluate_action`=[value-5],`evaluate_amount`=[value-6],`evaluate_experience`=[value-7],`evaluate_user`=[value-8],`evaluate_date`=[value-9] WHERE 1
			
	echo($sql);
	mysqli_query($link,$sql);

?>