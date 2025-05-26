<style scoped></style>

<template>
	<div class="rule_title">一般體育說明</div>
	<div class="rule_date">最後更新日期: 16/09/2021</div>
	<div class="rule_title_sec">概述</div>
	<div class="rule_txt">{{ rule_data.rule_txta }}</div>
	<div class="rule_txt">{{ rule_data.rule_txtb }}</div>
	<div class="rule_txt">{{ rule_data.rule_txtc }}</div>
	<ul class="rule_ul">
		<li class="rule_subtitle">{{ rule_data.rule_txtd_title1 }}</li>
		<li class="list_none">
			{{ rule_data.rule_txtd1 }}
			<ul class="rule_ul">
				<li>{{ rule_data.rule_txtd1_1 }}</li>
				<li>{{ rule_data.rule_txtd1_2 }}</li>
				<li>{{ rule_data.rule_txtd1_3 }}</li>
				<li>{{ rule_data.rule_txtd1_4 }}</li>
				<li>{{ rule_data.rule_txtd1_5 }}</li>
				<li>{{ rule_data.rule_txtd1_6 }}</li>
				<li>{{ rule_data.rule_txtd1_7 }}</li>
				<li>{{ rule_data.rule_txtd1_8 }}</li>
				<li>{{ rule_data.rule_txtd1_9 }}</li>
				<li>{{ rule_data.rule_txtd1_10 }}</li>
				<li>{{ rule_data.rule_txtd1_11 }}</li>
				<li>
					{{ rule_data.rule_txtd1_12 }}
					<ol class="rule_ol">
						<li>{{ rule_data.rule_txtd1_12a }}</li>
						<li>{{ rule_data.rule_txtd1_12b }}</li>
						<li>{{ rule_data.rule_txtd1_12c }}</li>
						<li>{{ rule_data.rule_txtd1_12d }}</li>
					</ol>
				</li>
				<li>{{ rule_data.rule_txtd1_13 }}</li>
				<li>{{ rule_data.rule_txtd1_14 }}</li>
			</ul>
		</li>
		<li class="rule_subtitle">
			{{ rule_data.rule_txtd_title2 }}
			<ul class="rule_ul">
				<li>{{ rule_data.rule_txtd2_1 }}</li>
				<li>{{ rule_data.rule_txtd2_1 }}</li>
				<li>{{ rule_data.rule_txtd2_1 }}</li>
				<li>{{ rule_data.rule_txtd2_1 }}</li>
			</ul>
		</li>
		<li class="rule_subtitle">
			{{ rule_data.rule_txtd_title3 }}
			<ul class="rule_ul">
				<li>{{ rule_data.rule_txtd2_1 }}</li>
			</ul>
		</li>
	</ul>


</template>

<script>
module.exports = {
	data() {
		return {
			rule_data: {
				rule_txta: "此規則與條款將適用於本公司所有的投注種類。會員們有責任確保您獲知所有的規則與條款，我們保留隨時修改條款的權利，並且會將修改的內容公佈在本網站上。公佈在網站公告上的信息可作為投注附加的規則與條款，若有任何差異或矛盾的地方，將以附加信息為準。",
				rule_txtb: "本公司對此條款視為公平公正的，若您有任何意見或疑問，您可以聯絡我們的客服部，我們的客服團隊將熱誠協助每位客戶，並確保能及時友善的解決您的問題。對於任何錯誤或爭論，我們的客服團隊將竭力提供服務。",
				rule_txtc: "所有的條款用於在會員與公司之間建立一般的原則。對產生的任何爭議，希望通過該條款讓雙方都得到滿意的解決方案。",
				rule_txtd_title1: "一般體育規則",
				rule_txtd1: "所有在本公司進行的投注都需要依照以下規則與條款處理。在個別體育項目裡註明的規則將視為體育主要規則:",
				rule_txtd1_1: "所有投注項目的最高和最低投注額將由公司決定，如有任何更改無需提前通知。",
				rule_txtd1_2: "會員申請賬戶時需提供正確的個人信息，本公司對提供偽造或錯誤信息的賬戶將不負任何責任。",
				rule_txtd1_3: '會員將全權負責賬戶提交的所有交易。在投注前請仔細檢查選項，一旦投注提交成功後，將無法更改或取消。公司對會員自身原因造成的遺漏或重復投注不負任何責任。會員可以在"交易記錄"中查看詳情確保所有提交的注單已成功。',
				rule_txtd1_4: '在任何投訴中，如果在公司的數據庫中沒有存儲任何記錄，公司將不接受也不認可任何會員提供的復印件或單據。',
				rule_txtd1_5: '公司保留在任何時候關閉或凍結會員賬號的權利。',
				rule_txtd1_6: '公司保留在任何時候暫停/中止會員對任何盤口進行投注的權利。',
				rule_txtd1_7: '公司保留對已預先知道賽果的投注作出取消的權利。如果由於"滾球現場"延遲而引起盤口的賠率錯誤，此期間的注單將視為無效。',
				rule_txtd1_8: '關於賽事的信息，例如日期，時間,比分，數據統計，紅牌和中立場等信息僅供會員參考，公司對提供此信息的準確性不負任何責任。',
				rule_txtd1_9: '如果比賽或賽事取消，中斷或延遲並且沒有在官方指定開球時間的36小時內重新開始，所有該場賽事的投注即被視為無效且取消，除非在個別體育規則里另有指定注明。 某些無條件終止的盤口將會相應地結算。單獨的體育規則中對此類盤口的結算程序做了說明。公司取消該賽事所有注單的結果被視為最終決定，無需參考官方賽事裁判或相關部門的決定。連串投注將會繼續按照注單剩餘賽事的賽果結算，該取消賽事的賠率將會按照1計算。',
				rule_txtd1_10: '如果比賽或是賽事取消，所有該場賽事的投注即被視為無效且取消，除非在個別體育規則里另有指定注明。對於取消的定義和處理本公司擁有最終解釋權。',
				rule_txtd1_11: '如果對其它語言版本的信息或球賽隊名有爭議，請以英文網站的名稱為準。',
				rule_txtd1_12: '由以下事件造成的任何損失，公司不賦予任何責任:',
				rule_txtd1_12a: '公司的網站、服務器或網絡中斷。',
				rule_txtd1_12b: '公司數據庫、服務器丟失信息或信息遭受破壞。',
				rule_txtd1_12c: '不法分子攻擊網站、服務器或網絡供應商。',
				rule_txtd1_12d: '進入網站時由於網絡供應商原因造成的網絡緩慢。',
				rule_txtd1_13: '如果系統發生不可預知的事件而導致已投注的注單出現爭議，公司將會根據數據庫的資料為準。',
				rule_txtd1_14: '如果對此規則與條款的內容有任何疑義，請以公司的解釋為準。',
				rule_txtd_title2: "賽果與派彩",
				rule_txtd2_1: "賽果均在賽事結束後判定，除非在個別體育規則里另有注明。賽果公佈72小時後，若對任何賽果有爭議，本公司將不認可。在賽果公佈72小時內,除了任何體育紀律委員會所重新裁決之賽果，本公司只會修正人為、系統或參考賽果的相關網頁失誤等原因的錯誤。",
				rule_txtd2_2: "投注通常在賽事結束後派彩。但考慮到會員的利益，某些投注會在官方公佈賽事結果之前就進行派彩。這些投注會在無條件確定結果的情況下派彩，可以包括被放棄，暫停或推遲的賽事。為此，公司保留對此而造成的錯誤進行更改的權利。",
				rule_txtd2_3: "派彩是根據官方來源或相關體育權威機構判定的結果為準。如果無法從相關體育權威機構判定結果，公司將會根據其他數據來源判定結果進行派彩，同時此數據會在被認定為合理的前提下。",
				rule_txtd2_4: "所有的交易將以公司最新備份數據記錄為準，公司不接納任何投訴或爭議，除非會員提供交易記錄的截圖或影印證據，否則公司的數據記錄將作為最終證明。",
				rule_txtd_title3: "滾球類型投注規則",
				rule_txtd3: "滾球投注是指對正在進行比賽的賽事進行投注。注單會在比賽開始後開始接收並且在盤口關盤後停止所有交易。個別體育會開出多個滾球種類的盤口供投注。",
				rule_txtd3_1: "所有滾球投注均需要遵守系統驗收程序。這可能會導致每筆投注延遲確認或出現投注失敗的情況。",
				rule_txtd3_2: '所有在注單上顯示"待確認"的字眼則表示注單正在等待系統的判斷投注是否成功。這表示注單在等待被確認或可能被取消。',
				rule_txtd3_3: "在賽事有事件發生或出現其他特殊情況時，所有待確認中的注單將不被確認並視為投注失敗。",
				rule_txtd3_4: "",
				rule_txtd3_5: "",
			}
		}
	},
	components: {},
	computed: {},
	methods: {},
}
</script>
