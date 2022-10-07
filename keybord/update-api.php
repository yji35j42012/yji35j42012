<?php

require __DIR__ . '/connect_db.php';
// 要回傳的資料
$output = [
    'success' => false,
    'error' => '',
    'code' => 0,
    'address' => $_POST['address'],
    'email' => $_POST['email'],
    'mobile' => $_POST['mobile'],
    'acc' => $_SESSION['user']['email'],
    'sql' => null,
    'address' => $_POST['address'],
    'password' => $_POST['password'],
    'newpassword' => $_POST['newpassword'],
    'ttt' => null,
    'birthday' => $_POST['birthday'],
    'gender' => $_POST['gender'],
];
// 判斷密碼欄位有無內容
if (!empty($_POST['password'])) {
    // 密碼欄位有內容及去跟資料庫確認密碼是否正確
    $sql = "SELECT * FROM members WHERE email=?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$_POST['email']]);
    $row = $stmt->fetch();
    if (password_verify($_POST['password'], password_hash($row['password'], PASSWORD_DEFAULT))) {
        // 如果正確，修改密碼指令就會執行
        $pwd = password_hash($_POST['newpassword'], PASSWORD_DEFAULT);

        $sql = "UPDATE members SET gender='" . $_POST['gender'] . "',birthday='" . $_POST['birthday'] . "',email='" . $_POST['email'] . "', address='" . $_POST['address'] . "',password='" . $pwd . "' where email='" . $_SESSION['user']['email'] . "'";
    } else {
        $output['error'] = '密碼錯誤';
        echo json_encode($output, JSON_UNESCAPED_UNICODE);
        exit;
    }
} else {
    $sql = "UPDATE members SET gender='" . $_POST['gender'] . "',birthday='" . $_POST['birthday'] . "',email='" . $_POST['email'] . "', address='" . $_POST['address'] . "' where email='" . $_SESSION['user']['email'] . "'";
}


$output['sql'] = $sql;
$stmt = $pdo->query($sql);

// 這行指的是暫存 
$_SESSION['user'] = [
    'id' => $_SESSION['user']['id'],
    'email' => $_POST['email'],
];
$output['success'] = true;


echo json_encode($output, JSON_UNESCAPED_UNICODE);
