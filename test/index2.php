<!DOCTYPE html>
<html>
<body>
    <?php
    $countryName = [
        "臺北市" => ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],
        "新北市" => [],
    ];
    ?>
    <select class="formItem1_select area" name="district" id="district_select" onchange="area()">
        <option class="selet11" value="" <?php if(!isset($_GET['area'])){ ?> selected <?php } ?>>請選擇地區</option>
        <?php foreach ( $countryName["臺北市"] as $key => $value ) { ?>
		<option value="<?php echo $value ?>" <?php if($_GET['area'] == $value){ ?> selected <?php } ?>><?php echo $value ?></option>
        <?php } ?>
	</select>
    
<select class="formItem1_select area" name="district" id="district_select" onchange="area()">
<option class="selet11" value="" <?php if(!isset($_GET['area'])){ ?> selected <?php } ?>>請選擇地區</option>
<option value="中正區" <?php if($_GET['area'] == '中正區'){ ?> selected <?php } ?> >中正區</option>
<option value="大同區" <?php if($_GET['area'] == '大同區'){ ?> selected <?php } ?>>大同區</option>
<option value="中山區" <?php if($_GET['area'] == '中山區'){ ?> selected <?php } ?>>中山區</option>
<option value="松山區" <?php if($_GET['area'] == '松山區'){ ?> selected <?php } ?>>松山區</option>
<option value="大安區" <?php if($_GET['area'] == '大安區'){ ?> selected <?php } ?>>大安區</option>
<option value="萬華區" <?php if($_GET['area'] == '萬華區'){ ?> selected <?php } ?>>萬華區</option>
<option value="信義區" <?php if($_GET['area'] == '信義區'){ ?> selected <?php } ?>>信義區</option>

</select>
</body>
</html>
