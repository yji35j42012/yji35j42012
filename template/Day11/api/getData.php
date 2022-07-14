<?php 
    header("Content-Type:text/html; charset=utf-8");
	require_once 'connectSql.php';
	$datas = array();
	$sql = "SELECT * FROM `evaluate`";
	$result = mysqli_query($link,$sql );
	// 查詢筆數
	// $result_num = mysqli_num_rows($result);
	
	// $row = mysqli_fetch_assoc($result);
	$arr=array();

	// while($row = mysqli_fetch_assoc($result)){
	// 	$arr[]= $row['text_name'];
	// }
	while($row=mysqli_fetch_row($result)){
		$arr[]= $row;
	}
	// echo(json_encode($row));
    // 釋放資料庫查到的記憶體
    mysqli_free_result($result);

    echo(json_encode($arr));//這裡用echo而不是return
?>