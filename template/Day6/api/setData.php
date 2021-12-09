<?php 
	header("Content-Type:text/html; charset=utf-8");
	require_once 'connectSql.php';

	$content = file_get_contents("php://input");// 從api中讀取資料到PHP變數
	$data = json_decode($content , true);// 把JSON字串轉成PHP陣列
	$done ="false";

	$sql = "INSERT INTO `stock_list`(  `stock_name`, `date`, `merchandise`, `stock_price`, `stock_count`,`stock_handling`) 
			VALUES ('". $data["stockName"] ."','" . $data["addTime"] . "'," . $data["merchandise"] . ",". $data["price"] . "," . $data["count"] . ",". $data["handling"] .")";



	mysqli_query($link,$sql);

	$getSql = "SELECT * FROM `stock_list`";
	$result = mysqli_query($link,$getSql );
	$arr=array();
	while($row=mysqli_fetch_row($result)){
		$arr[]= $row;
	}
	mysqli_free_result($result);
	echo (json_encode($arr));
	// echo($sql);
    // mysqli_free_result($result);

?>