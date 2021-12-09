<?php 
    header("Content-Type:text/html; charset=utf-8");
	require_once 'connectSql.php';

    $content = file_get_contents("php://input");
    $data = json_decode($content , true);

    $sql = "DELETE FROM `m_download` WHERE `m_download_id` = ".$data;
    mysqli_query($link,$sql);

?>