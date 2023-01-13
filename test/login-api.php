<?php

require './getCurrent.php';

$output = [
    'success' => false,
    'error' => '',
    'code' => 0,
    'sql' => null,
    'pass1' => null,
    'pass2' => null,
    'pass3' => null,
];

// 1. 先欄位資料是否足夠
if(empty($_POST['email']) or empty($_POST['password'])){
    $output['error'] = '參數不足';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

// $sql = "SELECT * FROM member WHERE email='".$_POST['email']."'";
$sql = "SELECT * FROM member WHERE email=?";
$stmt = $pdo->prepare($sql);
$stmt->execute([ $_POST['email'] ]);
$row = $stmt->fetch();
// 2. 以 email 去查詢資料
if(empty($row)){
    $output['error'] = '帳號或密碼錯誤';
    $output['code'] = 400;
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$output['sql'] =$sql.$row['email'];
// 3. 驗證密碼
if( password_verify($_POST['password'], $row['password']) ){
    // 密碼是正確的
    $output['success'] = true;
    $_SESSION['user'] = [
        'id' => $row['member_id'],
        'email' => $row['email'],
        // 'nickname' => $row['pa'],
    ];

} else {
    // 密碼是錯誤的
    $output['error'] = '帳號或密碼錯誤';
    $output['code'] = 420;
    $output['sql'] =$sql;
    $output['pass1'] = $_POST['password'];
    $output['pass2'] =  $row['password'];
    $hash = $row['password'];
    $output['pass3'] = password_hash("5566", PASSWORD_DEFAULT);
    // if (password_verify($_POST['password'], $hash)) {
    //     $output['pass3'] = 'same';
    // }else{
    //     $output['pass3'] = 'unsame';
    // }
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);