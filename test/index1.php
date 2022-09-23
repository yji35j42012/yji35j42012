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
	$count = [
		'{
			"districts": [
				{
					"zip": "100",
					"name": "中正區"
				},
				{
					"zip": "103",
					"name": "大同區"
				},
				{
					"zip": "104",
					"name": "中山區"
				},
				{
					"zip": "105",
					"name": "松山區"
				},
				{
					"zip": "106",
					"name": "大安區"
				},
				{
					"zip": "108",
					"name": "萬華區"
				},
				{
					"zip": "110",
					"name": "信義區"
				},
				{
					"zip": "111",
					"name": "士林區"
				},
				{
					"zip": "112",
					"name": "北投區"
				},
				{
					"zip": "114",
					"name": "內湖區"
				},
				{
					"zip": "115",
					"name": "南港區"
				},
				{
					"zip": "116",
					"name": "文山區"
				}
			],
			"name": "臺北市"
		}',
	];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<?php
      $name = [
          "臺北市" => ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],
          "新北市" => [],
      ];
  ?>
 	<select name="" id="">
    	<?php foreach ( $name["臺北市"] as $key => $value ) { ?>
		<option value=""><?php echo $value ?></option>
        <?php } ?>
	</select>
</body>
</html>