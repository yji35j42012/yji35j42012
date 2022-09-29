<?php
session_start();
// 如果已經登入會員
if (!empty($_SESSION['user'])) {
	echo "<script> var setwhere = 'php' </script>";
	// header('Location: ./');
	// exit;
} else {
	// 如果session沒有會員資料
	echo "	<script> 
				var setwhere = 'local';
				var pushArr = [];
				var showData = JSON.parse(sessionStorage.getItem('collect'));
				if(showData !== null){
					pushArr = showData
				}

				console.log('showData',pushArr);
			</script>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			list-style: none;
			box-sizing: border-box;
		}

		body,
		html {
			width: 100%;
			height: 100%;
		}

		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
		}

		button {
			width: 50px;
			height: 50px;
		}

		button+button {
			margin-left: 5px;
		}
	</style>
</head>

<body>

	<div class="container">
		<button id="show">顯示</button>
		<button id="remove">刪除</button>
		<?php
		for ($i = 0; $i < 5; $i++) {
			echo "<button name='collectBtn' data-collectid='$i'>$i</button>";
		}
		?>
	</div>

	<script>
		var collectBtn = document.querySelectorAll("[name='collectBtn']");
		for (let i = 0; i < collectBtn.length; i++) {
			const element = collectBtn[i];
			element.onclick = function() {
				console.log('setwhere', setwhere);
				var pushArr = [];
				pushArr.push({
					coll: element.getAttribute('data-collectid')
				})
				if (setwhere == 'local') {
					sessionStorage.setItem('collect', JSON.stringify(pushArr))
				}
			}
		}

		var show = document.querySelector("#show");
		var remove = document.querySelector("#remove");

		show.addEventListener('click', function() {
			// JSON.parse(myJSON)
			var showData = sessionStorage.getItem('collect')
			console.log('show', JSON.parse(showData));

		});
		remove.addEventListener('click', function() {
			sessionStorage.removeItem('collect')
			console.log('remove', sessionStorage.getItem('collect'));

		});
	</script>
</body>

</html>