<style scoped></style>

<template>
	<div class="rule_title">足球</div>
	<div class="rule_date">最後更新日期: 14/03/2024</div>
	<div class="rule_menu">
		<div class="rule_menu_btn" @click="moveHandler" name="General_Rules">一般規則</div>
		<div class="rule_menu_btn" @click="moveHandler" name="MainMarkets">主要市場</div>
		<div class="rule_menu_btn" @click="moveHandler" name="GoalMarkets">進球集錦</div>
	</div>
	<div class="rule_h2" id="General_Rules">{{ rule_data.rule_h2a }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2a1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a2 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a3 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a4 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a5 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a6 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a7 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a8 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a9 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a10 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a11 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a12 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a13 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a14 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2a15 }}</li>
	</ul>
	<div class="rule_h2" id="MainMarkets">{{ rule_data.rule_h2b }}</div>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3a }}</div>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3b }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3b1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3b2 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3b3 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3b4 }}</li>
		<li class="rule_li">
			{{ rule_data.rule_h2b5 }}
			<ul class="rule_ul_sec">
				<li class="rule_li_sec">{{ rule_data.rule_h2b_h3b5a }}</li>
				<li class="rule_li_sec">{{ rule_data.rule_h2b_h3b5b }}</li>
				<li class="rule_li_sec">{{ rule_data.rule_h2b_h3b5c }}</li>
			</ul>
		</li>
	</ul>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3c }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3c1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3c2 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3c3 }}</li>
	</ul>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3d }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3d1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3d2 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3d3 }}</li>
	</ul>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3e }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3e1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3e2 }}</li>
	</ul>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3f }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3f1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3f2 }}</li>
	</ul>
	<div class="rule_h3">{{ rule_data.rule_h2b_h3g }}</div>
	<ul class="rule_ul">
		<li class="rule_li">{{ rule_data.rule_h2b_h3g1 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3g2 }}</li>
		<li class="rule_li">{{ rule_data.rule_h2b_h3g3 }}</li>
	</ul>

	<div class="rule_h2" id="GoalMarkets">進球集錦</div>
</template>

<script>
module.exports = {
	data() {
		return {
			rule_data: {
				rule_h2a: "一般規則",
				rule_h2a1: "除非另有注明，所有足球投注的結算皆以球賽所規定的完場時間90分鐘為準。",
				rule_h2a2: "完場時間90分鐘包括球員傷停補時。加時賽、淘汰賽、點球，以及賽事後如果裁判或相關管理機構更改任何賽果則不計算在內。",
				rule_h2a3: "除非在個別玩法規則另有注明，所有滾球投注的結算將以90分鐘的賽果為準。",
				rule_h2a4: "完場時間45分鐘是指賽事上半場，其中包含傷停補時。加時賽、淘汰賽、點球，以及賽事後如果裁判或相關管理機構更改任何賽果則不計算在內。",
				rule_h2a5: "對於某些以全場完場時間為80分鐘（2 x40分鐘）的特定賽事或者友誼賽，所有投注的結算皆以完場時間為準。",
				rule_h2a6: "若少年賽、友誼賽的完場時間為70分鐘（2 x 35分鐘）或更少，本公司將在開賽前做出公佈，否則該場賽事的注單一律作廢。",
				rule_h2a7: "如果賽事中斷或延遲，並且沒有在36小時內重新開始，所有該場賽事的投注即被視為無效且取消，除非在個別投注類型規則里另有指定注明。",
				rule_h2a8: "如果賽事確認取消，所有該場賽事的投注即被視為無效且取消，除非在個別投注類型規則里另有指定注明。如果賽事是在上半場中斷，所有上半場的注單將被取消。如果賽事是在下半場中斷所有上半場的投注保持有效，但所有下半場的注單將被取消，除非在個別玩法規則另有注明。",
				rule_h2a9: "除非在個別玩法規則另有注明，烏龍球將予以計算在內。",
				rule_h2a10: "如果比賽或賽事取消，中斷或延遲並且沒有在官方指定開球時間的36小時內重新開始，所有該場賽事的投注即被視為無效且取消，除非在個別體育規則里另有指定注明。 某些無條件終止的盤口將會相應地結算。單獨的體育規則中對此類盤口的結算程序做了說明。公司取消該賽事所有注單的結果被視為最終決定，無需參考官方賽事裁判或相關部門的決定。連串投注將會繼續按照注單剩餘賽事的賽果結算，該取消賽事的賠率將會按照1計算。",
				rule_h2a11: "對於國際賽事，只要變更的場地仍在同一個國家內，所有注單將保持有效。",
				rule_h2a12: "對於國際賽事，只要變更的場地仍在聯賽原定舉辦的國家內，所有注單將保持有效。",
				rule_h2a13: "本公司保留權利取消任何因更換場地而可能對賽事結果有影響的注單。",
				rule_h2a14: "若賽事的確切開賽時間不明（比如，由於電視直播時間安排的問題），要是在原本開賽時間的72小時之內，本平台保留調整該開賽時間的權利。",
				rule_h2a15: "雙方球員人數必須在比賽正式開始時都是相同，注單方可視為有效。",

				rule_h2b: "主要市場",
				rule_h2b_h3a: "讓球盤",
				rule_h2b_h3b: "一般規則",
				rule_h2b_h3b1: "預測哪一支球隊在盤口指定的讓球數在全場/半場/賽事某個時節贏得比賽。",
				rule_h2b_h3b2: '"讓球盤"則定義為在比賽正式開始前，一方球隊已得到另一方讓的虛擬分數，以領先的情況下開始比賽。',
				rule_h2b_h3b3: "所有注單將按盤口開出的讓球數在玩法的時節結束後結算。",
				rule_h2b_h3b4: "讓球隊（優勢球隊）將給出讓球，讓球數將顯示在賠率的左側，讓球隊在盤面上也會以粗型字體顯示",
				rule_h2b_h3b5: "讓球盤的玩法分為以下幾種：",
				rule_h2b_h3b5a: "整數讓球也或稱為讓‘一球’（如：-1，-2，-3，等）",
				rule_h2b_h3b5b: "非整數讓球也或稱為‘半球’（如：-0.5，-1.5，-2.5，等）",
				rule_h2b_h3b5c: "混合以上讓‘半球/一球’的方式（如：-0/0.5，-0.5/1，-1/1.5，等）",
				rule_h2b_h3c: "讓球",
				rule_h2b_h3c1: "根據盤口讓球信息預測最終獲得勝利的球隊。",
				rule_h2b_h3c2: "投注的結算皆以球賽所規定的完場時間90分鐘為準。",
				rule_h2b_h3c3: "如果賽事在90分鐘結束前取消或中斷，所有注單將會被視為無效。",
				rule_h2b_h3d: "讓球 - 上半場",
				rule_h2b_h3d1: "所有上半場的投注將以上半場45分鐘其中包含傷停補時後的賽果結算。",
				rule_h2b_h3d2: "如果賽事在上半場時節因任何理由取消或中斷，所有上半場注單將被取消。",
				rule_h2b_h3d3: "如果賽事在下半場或加時賽因任何理由取消或中斷，所有上半場注單保持有效。",
				rule_h2b_h3e: "滾球讓球",
				rule_h2b_h3e1: "所有注單將按照盤口開出讓球信息，在相應投注類型結束後結算。",
				rule_h2b_h3e2: "結算是以投注時到比賽/時節結束後的賽果做裁決。即是以賽事完場比分減去投注當時的比分。上半場的滾球讓球投注將以上半場結束後的賽果結算。",
				rule_h2b_h3f: "加時賽 - 讓球",
				rule_h2b_h3f1: "所有注單將按照盤口開出讓球信息，在30分鐘加時賽結束後計算，包含補時。",
				rule_h2b_h3f2: "如果賽事在加時賽結束前取消或中斷，所有注單將會被視為無效。",
				rule_h2b_h3g: "加時賽 - 讓球-上半場",
				rule_h2b_h3g1: "所有注單將按照盤口開出讓球信息，在15分鐘加時賽結束後計算，包含補時。",
				rule_h2b_h3g2: "加時賽中如果賽事在上半場取消或中斷，所有上半場注單將會被視為無效。",
				rule_h2b_h3g3: "加時賽中如果賽事在下半場或補時階段取消或中斷，所有上半場注單將會被視為有效。",





			}
		}
	},
	components: {},
	computed: {},
	methods: {
		moveHandler(event) {
			// if(windo)
			var header_h = document.querySelector("#header");
			var scroll_tag = document.querySelector("#content_l");
			var n = event.target.getAttribute('name');
			let t = document.querySelector("#" + n);
			scroll_tag.scrollTo(0, t.offsetTop - header_h.offsetHeight);
		}
	},
}
</script>
