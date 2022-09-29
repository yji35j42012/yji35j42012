<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>

<body>
	<select id="sort">
		<option value="全素" <?php if(isset($_GET['sort']) && $_GET['sort']=='全素'){{echo 'selected' ;}} ?>>全素</option>
		<option value="奶素" <?php if(isset($_GET['sort']) && $_GET['sort']=='奶素'){{echo 'selected' ;}} ?>>奶素</option>
		<option value="蛋素" <?php if(isset($_GET['sort']) && $_GET['sort']=='蛋素'){{echo 'selected' ;}} ?>>蛋素</option>
	</select>



	<script>
		var sort = document.querySelector("#sort");

		function sortHander() {
			console.log('sortHander');
			location.href = "select.php?sort=" + sort.value;
		}
		sort.addEventListener('change', sortHander);
	</script>


	<select id="monSel">
		<?php
		$bir = "2022-09-16";
		if (!empty($bir)) {
			$birM = mb_split("-", $bir)[1];
			$birD = mb_split("-", $bir)[2];
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
	<select id="daySel">
		<?php
		for ($i = 1; $i < 32; $i++) {
			if ($birD == $i) {
				echo "<option style='display:none;' value='" . $i . "' selected>" . $i . "</option>";
			} else {
				echo "<option style='display:none;' value='" . $i . "'>" . $i . "</option>";
			}
		}
		?>
	</select>

	<script>
		var monSel = document.querySelector("#monSel");
		var daySel = document.querySelectorAll("#daySel option");
		var normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function changeHadner() {
			var dayCount = normal[monSel.value - 1];
			for (let i = 0; i < dayCount; i++) {
				daySel[i].style.display = 'block';
			}
		}
		monSel.addEventListener("change", changeHadner);
		changeHadner();
	</script>
</body>

</html>