<style scoped>
.box{
	position: absolute;
	width: 50px;
	height: 50%;
	background-color: #ccc;
}
.dargbtn {
	position: absolute;
	width: 50px;
	height: 50px;
}
</style>

<template>
	<div class="box box2" :style="box2Style" ref="box2" id="box2">
		<div class="dargbtn" @mousedown="box2ButtonDown">點此拖拽2</div>
		<div class="delay-box">
			<span
				v-for="(item, index) in testData2"
				:key="index"
				:data-testdata="testFun('box2')"
				>{{ item.value }}</span
			>
		</div>
	</div>
</template>
<script>
module.exports = {
	data() {
		return {
			// 2
			box2X: 0,
			box2Y: 0,
			box2L: 0,
			box2T: 0,
			box2CurrentX: 0,
			box2CurrentY: 100,
		};
	},
	computed: {
		box2Style() {
			return {
				top: "100px",
				left: "0px",
			};
		},
	},
	methods: {
		box2Start(e) {
			let dv = this.$refs.box2;
			this.box2X = e.clientX;
			this.box2Y = e.clientY;

			this.box2L = dv.offsetLeft;
			this.box2T = dv.offsetTop;
		},
		box2Move(e) {
			console.log("box2 move");
			let nx = e.clientX;
			let ny = e.clientY;
			let nl = nx - (this.box2X - this.box2L);
			let nt = ny - (this.box2Y - this.box2T);

			// 程式碼關鍵處
			this.box2CurrentX = nl;
			this.box2CurrentY = nt;
			// let legendBox = this.$refs.box2;
			let legendBox = document.getElementById('box2');
			legendBox.style.left = nl + "px";
			legendBox.style.top = nt + "px";
		},
		box2End(e) {
			window.removeEventListener("mousemove", this.box2Move);
			window.removeEventListener("mouseup", this.box2End);
		},
		box2ButtonDown(e) {
			this.box2Start(e);
			window.addEventListener("mousemove", this.box2Move);
			window.addEventListener("mouseup", this.box2End);
		},
	},
};
</script>
