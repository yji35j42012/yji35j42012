<?php 
	header("Content-Type:text/html; charset=utf-8");
	require_once 'connectSql.php';

	$content = file_get_contents("php://input");// 從api中讀取資料到PHP變數
	$data = json_decode($content , true);// 把JSON字串轉成PHP陣列
	$done ="false";

	$sql = "INSERT INTO `evaluate`(  `evaluate_store`, `evaluate_menu`, `evaluate_eat`, `evaluate_action`, `evaluate_amount`, `evaluate_experience`, `evaluate_user`, `evaluate_date`) 
			VALUES ('". 
			$data["evaluate_store"] ."','" . 
			$data["evaluate_menu"] . "'," . 
			$data["evaluate_eat"] . ",". 
			$data["evaluate_action"] . "," . 
			$data["evaluate_amount"] . ",'". 
			$data["evaluate_experience"] . "','". 
			$data["evaluate_user"] . "','". 
			$data["evaluate_date"] ."')";

	mysqli_query($link,$sql);
	$sql = "SELECT * FROM `evaluate`";
	$result = mysqli_query($link,$sql );


	$arr=array();
	while($row=mysqli_fetch_row($result)){
		$arr[]= $row;
	}
	mysqli_free_result($result);

    echo(json_encode($arr));
	// $getSql = "SELECT * FROM `evaluate`";
	// $result = mysqli_query($link,$getSql );
	// $arr=array();
	// while($row=mysqli_fetch_row($result)){
	// 	$arr[]= $row;
	// }
	// mysqli_free_result($result);
	// echo (json_encode($arr));

	// echo($sql);
    // mysqli_free_result($result);

?>