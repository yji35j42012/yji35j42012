<style scoped></style>

<template>
	<div id="showBody" class="re_container">
		<!-- 上方功能 -->
		<div class="re_function">
			<!-- 條件bar -->
			<div class="re_range">
				<label
					for="status_sel"
					data-sreachitem="帳號狀態"
					class="re_range_select"
				>
					<select id="status_sel" name="sel" data-func="up_sel">
						<option value="ALL">全部</option>
						<option value="Y" selected="">啟用</option>
						<option value="N">停用</option>
						<option value="S">只能看帳</option>
						<option value="L">禁止登入</option>
					</select>
				</label>

				<label for="level_sel" data-sreachitem="層級" class="re_range_select">
					<select data-func="up_sel">
						<option value="s">總代理</option>
						<option value="a">代理</option>
					</select>
				</label>

				<label for="level_sel" data-sreachitem="查詢類型" class="re_range_select">
					<select data-func="field_sel">
						<option value="username">帳號</option>
						<option value="alias">名稱</option>
						<option value="adddate">開戶日期</option>
					</select>
				</label>

				<label class="re_search">
					<input type="text" placeholder="請輸入查詢帳號"/>
					<i id="clean_input" class="del_btn"></i>
					<i id="search_btn" name="up_btn" class="sumbit_btn"></i>
				</label>

				<label
					class="re_search"
					id="search_alias_div"
					style="display:none"
				>
					<input
						id="alias_input"
						name="text"
						type="text"
						data-input="a_z_nums"
						placeholder="請輸入查詢名稱"
						required=""
					/>
					<i id="alias_clean_input2" class="del_btn"></i>
					<i id="alias_btn" name="up_btn" class="sumbit_btn"></i>
				</label>

				<label data-sreachitem="日期" class="re_range_date">
					<span>2022-01-12</span>
					<i class="to"></i>
					<span>2022-01-12</span>
				</label>

				<button id="add_set" name="up_btn" class="re_add_btn">
					新增代理商
				</button>
				<button id="btn_total_excel" class="re_excel_btn"></button>
				<button id="btn_noMoney_ag" class="re_range_btn">
					負數代理查詢
				</button>
			</div>
			<!-- 條件bar end -->
		</div>
		<!-- 上方功能end -->

		<!-- 資料表格 -->
		<div id="table_view" class="re_tb_outside">
			<!-- header -->
			<div id="re_head_scroll" class="re_head1024_fixed">
				<div class="re_tb_fixedW1024" id="head_scroll_div">
					<table class="re_tb_main">
						<thead>
							<!-- 第一行head -->
							<tr class="re_tb_head">
								<td class="td_w12 fixedShadow td_fixed">
									<div class="inside">
										<span class="re_sort">代理商名稱</span>
									</div>
								</td>
								<td class="td_w12">
									<span class="re_sort">代理帳號</span>
								</td>
								<td class="td_w10">會員數</td>
								<td class="td_w10">卡片代號</td>
								<td class="td_w18">
									<span class="re_sort">新增日期</span>
								</td>
								<td class="td_w12">帳號狀況</td>
								<td class="td_w16">功能</td>
								<td class="td_w10">額度</td>
							</tr>
						</thead>
					</table>
				</div>
			</div>
			<!-- header end -->

			<!-- body -->
			<div id="div_show_body" class="re_body_scroll" style="">
				<div class="re_tb_fixedW1024">
					<table class="re_tb_main">
						<tbody id="show_body">
							<tr class="re_tb_body">
								<td class="td_w12 fixedShadow td_fixed">
									<div class="inside">5556</div>
								</td>
								<td class="td_w12">5556</td>
								<td class="td_w10">0</td>
								<td class="td_w10">TA</td>
								<td class="td_w18">2014-09-28 22:49:03</td>
								<td class="td_w12">
									<!-- 要打開下方選單時加上.active use_animate-->
									<div class="re_switch">
										<span>啟用</span>
										<ul class="use_animate">
											<li>啟用</li>
											<li>停用</li>
											<li>只能看帳</li>
											<li>禁止登入</li>
										</ul>
									</div>
								</td>
								<td class="td_w16">
									<div class="re_box">
										<button class="re_edit_btn btn_msg" data-msg="修改"></button>
										<button class="re_set_btn btn_msg" data-msg="詳細設定"></button>
										<button class="re_del_btn btn_msg" data-msg="刪除"></button>
										<button class="re_book_btn btn_msg" data-msg="現金簿"></button>
									</div>
								</td>
								<td class="td_w10">
									<button class="ok_btn">查詢</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- body end -->

			<!-- 無資料 -->
			<div id="noData" class="data_none">無資料</div>
			<!-- 無資料 end -->

			<!-- 頁碼 -->
			<div class="re_page_box" style="display:none">
				<ul id="ul_detail_page" class="pc_page">
					<li name="page" id="btn_page_left"></li>
					<li name="page" id="btn_page_1" class="active">1</li>
					<li name="page" id="btn_page_2" class="">2</li>
					<li name="page" id="btn_page_3" class="">3</li>
					<li name="page" id="btn_page_4" class="">4</li>
					<li name="page" id="btn_page_5" class="">5</li>
					<li name="page" id="btn_page_right"></li>
				</ul>
			</div>
			<!-- 頁碼 end -->
		</div>
		<!-- 資料表格end -->

		<!-- 刪除確認彈出視窗 -->
		<div id="delete_alert" class="alert_mask" style="display: none;">
			<div class="alert_box">
				<h2>
					<button
						id="delete_close"
						name="alert"
						class="close_btn"
					></button>
				</h2>

				<div class="info">
					<div class="msg">
						<span>
							確定刪除 代理
							<tt id="delete_username" class="word_orange"></tt>
							?
						</span>
					</div>
				</div>

				<div class="btn">
					<button class="ok_btn" id="delete_submit" name="alert">
						確定
					</button>
				</div>
			</div>
		</div>
		<!-- 刪除確認彈出視窗 end -->

		<!-- 代理商幣值額度彈出視窗 -->
		<div id="cur_alert" class="alert_mask" style="display: none">
			<div class="alert_box bigtb">
				<h2>
					<span class="title">
						代理商
						<tt id="cur_username" class="word_orange"></tt>
						幣值額度
					</span>
					<button
						id="cur_close"
						name="alert"
						class="close_btn"
					></button>
				</h2>

				<div id="alert_div" class="info">
					<h3>
						<button
							class="ok_btn bg_green"
							id="cur_settleRecord"
							name="alert"
						>
							交收紀錄
						</button>
						<button class="renew_btn" id="cur_update" name="alert">
							0s
						</button>
					</h3>
					<table id="cur_alert_body" class="alert_bigtb"></table>
				</div>

				<!-- 無額度狀態 -->
				<div id="alert_nodata_div" class="msg" style="display: none;">
					目前無開放幣別
				</div>
				<!-- 無額度狀態 end -->
			</div>
		</div>
		<!-- 代理商幣值額度彈出視窗 end -->

		<!-- 交收彈出視窗 -->
		<div id="settle_alert" class="alert_mask" style="display: none;">
			<div class="alert_box">
				<h2>
					<span id="settle_currency" class="title"></span>
					<button
						id="settle_close"
						name="alert"
						class="close_btn"
					></button>
				</h2>

				<div class="info">
					<table class="alert_tb">
						<tbody>
							<tr>
								<th width="40%">未交收金額</th>
								<td id="unsettle_credit" width="60%"></td>
							</tr>
							<tr>
								<th>本次交收金額</th>
								<td>
									<input
										class="normal_input"
										name="alert_text"
										type="text"
										data-input="settle_deci"
										id="settle_text"
										value="0"
									/>
								</td>
							</tr>
							<tr>
								<th>備註</th>
								<td>
									<input
										class="normal_input"
										type="text"
										maxlength="20"
										id="settle_ps_text"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="btn">
					<button class="ok_btn" id="settle_check" name="alert">
						確定
					</button>
				</div>
			</div>
		</div>
		<!-- 交收彈出視窗 end -->

		<!-- 刪除確認彈出視窗 -->
		<div id="settle_ok_alert" class="alert_mask" style="display: none;">
			<div class="alert_box">
				<h2>
					<button
						id="settle_ok_close"
						name="alert"
						class="close_btn"
					></button>
				</h2>

				<div class="info">
					<div class="msg">
						<span id="settle_ok_settle"
							>本次交收金額<tt id="settle_ok_settle_text"></tt
						></span>
						<span id="settle_ok_unsettle"
							>未交收金額<tt id="settle_ok_unsettle_text"></tt
						></span>
						<span id="settle_ok_submit">是否確認送出?</span>
						<span id="settle_no_settle">請輸入本次交收金額</span>
					</div>
				</div>

				<div class="btn">
					<button class="ok_btn" id="settle_submit" name="alert">
						確定
					</button>
				</div>
			</div>
		</div>
		<!-- 刪除確認彈出視窗 end -->

		<!-- 詳細設定彈出視窗 -->
		<div id="detail_alert" class="alert_mask" style="display: none;">
			<div class="alert_box">
				<h2>
					<span class="title">
						修改代理
						<tt id="detail_username" class="word_orange"></tt>
						詳細設定
					</span>
					<button
						id="detail_close"
						name="alert"
						class="close_btn"
					></button>
				</h2>

				<div class="info">
					<div class="select_box hide_item">
						<label id="" for="" class="normal_select">
							<select
								id="sel_detail_alert"
								name="sel_alert"
								data-func="alert"
							></select>
						</label>
					</div>
					<table id="detail_alert_body" class="alert_tb"></table>

					<!-- 警告文字 -->
					<div class="alert_note">
						<li>
							＊若代理已開出群組最大值"高"於目前設置，系統將會下壓該群組最大值並且重新計算！
						</li>
						<li>
							＊若代理已開出群組最低值"低"於目前設置，系統將會調整該群組最低值去目前設置！
						</li>
					</div>
				</div>

				<div class="btn">
					<button class="ok_btn" id="detail_submit" name="alert">
						確定
					</button>
				</div>
			</div>
		</div>
		<!-- 詳細設定彈出視窗 end -->
	</div>
</template>

<script>
module.exports = {
	data() {
		return {}
	},
	mounted() {},
	computed: {},
	methods: {},
}
</script>
