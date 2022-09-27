<?php 
    $db_host = 'localhost';
    $db_name = 'id18087221_experience';
    $db_user = 'id18087221_experience_data';
    $db_pass = 'J?b*i5)PQ\ru{\|t';

    $db_charset = 'utf8';
    $db_collate = 'utf8_unicode_ci';
    $dsn = "mysql:host={$db_host};dbname={$db_name};charset={$db_charset}";
    $pdo_options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES {$db_charset} COLLATE
        {$db_collate}"
    ];
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass, $pdo_options);
        // echo 'suss';
    } catch(PDOException $ex) {
        echo 'Connection failed:'. $ex->getMessage();
    }



?>