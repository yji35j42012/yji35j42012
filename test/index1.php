<?php 

	require __DIR__. '/getCurrent.php';
	echo '<br>';
	echo 'index1 start';
	$t_sql ="SELECT COUNT(1)FROM `evaluate` WHERE 1";
	echo '<br>';
	echo 'p_sql'.$p_sql;
	$per_page=4;
	$total_rows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];
	echo '<br>';
	echo "total_rows:".$total_rows;
	$total_pages = ceil($total_rows/$per_page);
	// $sql = "SELECT * FROM `evaluate` WHERE 1";
	// $stmt = $pdo->prepare($sql);
	// echo '$stmt'.$stmt;
	// $stmt->execute([
	// 	$_POST['evaluate_store'],
	// ]);
	echo '<br>';
	echo "total_pages:".$total_pages;
	echo '<br>';
	// $count = $stmt->rowCount();
	echo "count".$count;


	$sql = "SELECT * FROM `evaluate` WHERE 1"; 
	$stmt = $pdo->query($sql);
	// $row = $stmt->fetch(PDO::FETCH_ASSOC);
	// $row = $stmt->fetch(PDO::FETCH_ASSOC);
	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		echo '<br>';
		echo "row:".$row['evaluate_store'];
	}

	// $p_sql = sprintf("SELECT * FROM products $where LIMIT %s, %s ",
	// ($page-1)*$per_page, $per_page);
	// $p_stmt = $pdo->query($p_sql);
?>