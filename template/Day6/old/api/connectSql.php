<?php
    header("Content-Type:text/html; charset=utf-8");

	$host = 'localhost';
	$dbuser ='id18087221_experience_data';
	$dbpassword = 'J?b*i5)PQ\ru{\|t';
	$dbname = 'id18087221_experience';
	$link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

	if($link){
        mysqli_query($link,'SET NAMES utf8');
        mysqli_query($link,"SET CHARACTER SET UTF8");
        mysqli_query( $link, "SET NAMES 'utf8'");
        // echo "正確連接資料庫";
	}
	else {
        echo "不正確連接資料庫</br>" . mysqli_connect_error();
	}
?>