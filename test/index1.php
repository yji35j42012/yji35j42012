<?php 

  $_GET['']
  $rData = readfile("https://www.taifex.com.tw/cht/3/dailyFXRateDown/?queryStartDate=2022/07/01&queryEndDate=2022/08/01");
  echo(json_encode($rData));//這裡用echo而不是return
?>