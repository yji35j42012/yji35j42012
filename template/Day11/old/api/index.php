
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="./connectSql.php">資料庫連線</a>
    <a href="./getData.php">取得Sotck資料</a>
    <div id="app">
        <form method="post" enctype="multipart/form-data" action="upload.php">
            <input type="file" name="my_file" style="position: relative; left:40px;" id="change"> 
            <input type="submit" value="上傳檔案" style="position: relative; right:40px;">

			<img src="" alt="" id="showImg">
        </form>
    </div>

	<script>
		var change =  document.getElementById("change");
		var showImg =  document.getElementById("showImg");
		function changeHander(e){
			const file = this.files[0];
			const fr = new FileReader();
			console.log('this',this);
			console.log('file',file);
			fr.onload = function (e) {
				showImg.setAttribute('src', e.target.result)
			}
			fr.readAsDataURL(file);
		}
		change.addEventListener('change' , changeHander);
	</script>
</body>
</html>