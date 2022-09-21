<?php 

    
    $rData =  readfile("https://www.taifex.com.tw/cht/3/dailyFXRateDown/?queryStartDate=".$_GET['queryStartDate']."&queryEndDate=".$_GET['queryEndDate']);

    echo $rData;

    echo(json_encode($rData));//這裡用echo而不是return

?>