<?php
require __DIR__ . '/mengParts/connect_db.php';
$pageName = 'member'; // 頁面名稱
// session_start();
?>
<?php include __DIR__ . '/mengParts/html-head.php'; ?>
<?php include __DIR__ . '/mengParts/myStyle.php'; ?>
<?php include __DIR__ . '/mengParts/navbar.php'; ?>

<link rel="stylesheet" href="./mengParts/css/mamber_data.css">
<?php
// 在還沒做login時候的測試
// $acc = 'retaerg@gmail.com';
// $acc = 'vzdvg@gmail.com';
$acc = $_SESSION['user']['email'];
// $acc 代表帳號的變數，因為帳號是隨機的，所以無法固定寫在sql裡面
$sql = "SELECT * FROM `members` WHERE `email`='$acc';";
// 把sql指令丟到資料庫
$stmt = $pdo->query($sql);
// 接收資料庫回傳的資料
$data = $stmt->fetch(PDO::FETCH_ASSOC);



?>

<div class="my_wrap">
    <div class="container">
        <div class="row">
            <div class="member_main col-md-2 p-0  text-center">
                <div class="head">
                    <img src="./images/mascot_12.png" alt="">
                </div>
                <span class="headnew">更新頭像</span>
                <div class="share">
                    <h3>已分享食譜0</h3>
                </div>
                <!-- 會員資料bar -->
                <?php include __DIR__ . '/mengParts/navmember.php'; ?>

            </div>
            <!-- 會員資料卡 -->
            <div class="member_info col-md-10">

                <div class="member_title">
                    <h1>修改會員資料</h1>
                    <!-- <div class="chang_member ">
                    <p>修改會員資料</p>
                </div> -->
                </div>

                <div class="member_box">
                    <table class="member_box12">
                        <tr class="member_box1">
                            <td>
                                <h2>姓名</h2>
                            </td>
                            <td>

                                <h3 class="bottom_bd23">
                                    <?php echo $data['name']; ?>
                                </h3>
                            </td>

                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>暱稱</h2>
                            </td>
                            <td>
                                <h3>
                                    <?php echo $data['nickname']; ?>
                                </h3>
                            <td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>性別</h2>
                            </td>
                            <td class="">
                                <div class="member_box1b">
                                    <input value="男" name="gender" class="boxradio1" type="radio" <?php if ($data['gender'] == '男') { echo 'checked'; } ?>>
                                    <h3>男</h3>
                                    <input value="女" name="gender" class="boxradio2" type="radio" <?php if ($data['gender'] == '女') { echo 'checked'; } ?>>
                                    <h3>女</h3>
                                </div>
                            <td>
                        </tr>
                        <tr class="member_box1">
                            <td class="member_box2b">
                                <h2>生日</h2>
                            </td>
                            <td>
                                <h3 class="member_box123">
                                    <!-- <select class="select_month" name="month" id="month_select">
                                        <option class="selet11" value="">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select> -->
                                    <select class="select_month" name="month" id="month_select">
                                        <?php $bir = $data['birthday'];;
                                        // 分割處理 月＆日
                                        // 2022-09-22
                                        // $bir)[0] =2022
                                        // $bir)[1] = 09
                                        // $bir)[2 = 22
                                        // 1992-10-05
                                        // $bir)[0] = 1992
                                        // $bir)[1] = 10
                                        // $bir)[2 = 05
                                        if (!empty($bir)) {
                                            $birY = mb_split("-", $bir)[0];
                                            echo " <script>var birY = $birY </script>";
                                            $birM = mb_split("-", $bir)[1];
                                            $birD = mb_split("-", $bir)[2];
                                            // 如果生日的資料欄位是空的，為了怕程式出錯所以給他一個空值 ex如果沒有日期就會顯示1月1日
                                        } else {
                                            $birM = '';
                                            $birD = '';
                                        }
                                        for ($i = 1; $i < 13; $i++) {
                                            if ($birM == $i) {
                                                echo "<option value='" . $i . "' selected>" . $i . "</option>";
                                            } else {
                                                echo "<option value='" . $i . "'>" . $i . "</option>";
                                            }
                                        }
                                        ?>
                                    </select>
                                    月
                                    <!-- <select class="select_month" name="month" id="month_select">
                                        <option class="selet11" value="">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select> -->

                                    <select class="select_month" name="month" id="day_select">
                                        <?php
                                        for ($i = 1; $i < 32; $i++) {
                                            if ($birD == $i) {
                                                echo "<option value='" . $i . "' selected>" . $i . "</option>";
                                            } else {
                                                echo "<option value='" . $i . "'>" . $i . "</option>";
                                            }
                                        }
                                        ?>
                                    </select>
                                    日
                                </h3>
                            </td>
                        </tr>


                        <tr class="member_box1">
                            <td>
                                <h2>手機</h2>
                            </td>
                            <td>
                                <h3 class="bottom_bd">
                                    <input id="mobile" type="text" name="name" placeholder="" value="<?php echo $data['mobile']; ?>">
                                </h3>
                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>

                                <h2>地址</h2>
                            </td>
                            <td>
                                <h3 class="bottom_bd">
                                    <input id="addresss" type="text" name="name" placeholder="" value="<?php echo $data['address']; ?> ">
                                </h3>
                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>Email</h2>
                            </td>
                            <td>

                                <h3 class="bottom_bd">
                                    <input id="email" type="text" name="name" placeholder="" value="<?php echo $data['email']; ?>">
                                </h3>
                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>修改密碼</h2>
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>舊密碼</h2>
                            </td>
                            <td>
                                <h3 class="bottom_bd">
                                    <input id="oldpassword" type="text" name="name" placeholder="請輸入舊密碼" value="">
                                </h3>
                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>新密碼</h2>
                            </td>
                            <td>
                                <h3 class="bottom_bd">
                                    <input id="newpassword" type="text" name="name" placeholder="請輸入新密碼" value="">
                                </h3>
                            </td>
                        </tr>
                        <tr class="member_box1">
                            <td>
                                <h2>確認新密碼</h2>
                            </td>
                            <td>
                                <h3 class="bottom_bd">
                                    <input id="checkpassword" type="text" name="name" placeholder="請再次輸入新密碼" value="">
                                </h3>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="changgg" id="update">
                    <p>儲存修改</p>
                </div>
            </div>
        </div>

    </div>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
<script>
    // 抓取每個月有幾天的回圈
    // 抓取月份下拉的指令
    var monSel = document.querySelector("#month_select");
    var daySel = document.querySelectorAll("#day_select option");
    // 陣列是從0開始算
    var normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function changeHadner() {
        // 去指定的位置（指月份）抓value 
        var month = monSel.value;
        // 抓取月份去轉換需要的天數
        var dayCount = normal[monSel.value - 1];
        // 把所有天數先隱藏
        for (let i = 0; i < 31; i++) {
            daySel[i].style.display = 'none';
        }
        // 打開要顯示的天數
        for (let i = 0; i < dayCount; i++) {
            daySel[i].style.display = 'block';
        }
    }
    // 月份下拉去執行change(改變)的事件
    monSel.addEventListener("change", changeHadner);
    changeHadner();


    var update = document.querySelector("#update");

    function updateHandler() {
        // console.log('updateHandler', $('#addresss').val());
        // console.log('updateHandler', $('#email').val()); //undefine
        // console.log('updateHandler', $('#mobile').val());
        // 沒填入資料會顯示需要填入的提示字
        if (!$('#mobile').val()) {
            alert('請填寫手機');
            return;
        }
        if (!$('#addresss').val()) {
            alert('請填寫地址');
            return;
        }
        if (!$('#email').val()) {
            alert('請填寫email');
            return;
        }


        // console.log('newpassword', $('#newpassword').val()); //undefine
        // console.log('checkpassword', $('#checkpassword').val());

        if ($('#newpassword').val() || $('#checkpassword').val()) {
            if ($('#newpassword').val() !== $('#checkpassword').val()) {
                alert('請確認輸入的新密碼是否相同');
                return;
            }
            if (!$('#oldpassword').val()) {
                alert('請輸入舊密碼');
                return;
            }
        }

        console.log('gender', $("[name='gender']:checked").val());
        // month_select
        // 把資料丟給api
        var updateObj = {
            address: $('#addresss').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#oldpassword').val(),
            newpassword: $('#newpassword').val(),
            birthday: birY + "-" + $('#month_select').val() + "-" +
                $('#day_select').val(),
            gender: $("[name='gender']:checked").val(),
            // month_select,
        }
        // 把資料丟給api
        $.post(
            "./mengParts/update-api.php",
            updateObj,
            // $(document.form1).serialize(),
            function(data) {
                console.log(data);
                if (data.success) {
                    // 修改成功後可顯示資料或把畫面導向別對地方
                    alert('修改成功');
                    location.href = './member.php';
                } else {
                    // 輸入失敗會顯示的東西
                    alert(data.error);
                }
            },
            'json'
        );
    }
    update.addEventListener("click", updateHandler);
</script>

<?php include __DIR__ . '/mengParts/scripts.php'; ?>

<?php include __DIR__ . '/mengParts/html-foot.php'; ?>