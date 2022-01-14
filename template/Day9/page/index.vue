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

                <label
                    id=""
                    for="level_sel"
                    data-sreachitem="層級"
                    class="re_range_select"
                >
                    <select id="level_sel" name="sel" data-func="up_sel">
                        <option value="s">總代理</option>
                        <option value="a">代理</option>
                    </select>
                </label>

                <label
                    id=""
                    for="level_sel"
                    data-sreachitem="查詢類型"
                    class="re_range_select"
                    style="display:none"
                >
                    <select id="search_sel" name="sel" data-func="field_sel">
                        <option value="username">帳號</option>
                        <option value="alias">名稱</option>
                        <option value="adddate">開戶日期</option>
                    </select>
                </label>

                <label class="re_search" id="search_username_div">
                    <input
                        id="search_input"
                        name="text"
                        type="text"
                        data-input="a_z_nums"
                        placeholder="請輸入查詢帳號"
                        required=""
                    />
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

                <label
                    data-sreachitem="日期"
                    class="re_range_date"
                    id="search_adddate_div"
                    style="display:none"
                >
                    <span
                        id="span_userlist_start"
                        name="time"
                        data-type="time_search"
                        >2022-01-12</span
                    >
                    <i class="to"></i>
                    <span
                        id="span_userlist_end"
                        name="time"
                        data-type="time_search"
                        >2022-01-12</span
                    >
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
                                        <span
                                            class="re_sort"
                                            name="sort"
                                            id="span_alias"
                                            data-type="alias"
                                        >
                                            代理商名稱
                                        </span>
                                    </div>
                                </td>
                                <td class="td_w12">
                                    <span
                                        class="re_sort"
                                        name="sort"
                                        id="span_username"
                                        data-type="username"
                                    >
                                        代理帳號
                                    </span>
                                </td>
                                <td class="td_w10">會員數</td>
                                <td class="td_w10">卡片代號</td>
                                <td class="td_w18">
                                    <span
                                        class="re_sort"
                                        name="sort"
                                        id="span_adddate"
                                        data-type="adddate"
                                    >
                                        新增日期
                                    </span>
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
                                    <div class="inside">
                                        5556
                                    </div>
                                </td>
                                <td class="td_w12">
                                    5556
                                </td>
                                <td
                                    id="other_mem_296"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-28 22:49:03
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_296"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_296"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_296"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_296"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_296"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_296"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_296"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_296"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_296"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_296"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_296"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        5557
                                    </div>
                                </td>
                                <td class="td_w12">
                                    5557
                                </td>
                                <td
                                    id="other_mem_297"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-28 22:53:36
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_297"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_297"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_297"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_297"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_297"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_297"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_297"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_297"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_297"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_297"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_297"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        5557
                                    </div>
                                </td>
                                <td class="td_w12">
                                    5558
                                </td>
                                <td
                                    id="other_mem_298"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-28 22:54:35
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_298"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_298"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_298"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_298"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_298"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_298"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_298"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_298"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_298"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_298"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_298"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        5557
                                    </div>
                                </td>
                                <td class="td_w12">
                                    5559
                                </td>
                                <td
                                    id="other_mem_299"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-28 22:56:20
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_299"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_299"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_299"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_299"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_299"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_299"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_299"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_299"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_299"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_299"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_299"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        5557
                                    </div>
                                </td>
                                <td class="td_w12">
                                    5560
                                </td>
                                <td
                                    id="other_mem_300"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-28 23:04:20
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_300"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_300"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_300"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_300"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_300"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_300"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_300"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_300"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_300"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_300"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_300"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        5
                                    </div>
                                </td>
                                <td class="td_w12">
                                    55788
                                </td>
                                <td
                                    id="other_mem_303"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2014-09-29 04:42:09
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_303"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_303"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_303"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_303"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_303"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_303"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_303"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_303"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_303"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_303"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_303"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    8i8i
                                </td>
                                <td
                                    id="other_mem_547"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    BI
                                </td>
                                <td class="td_w18">
                                    2020-09-09 16:28:46
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_547"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_547"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_547"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_547"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_547"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_547"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_547"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_547"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_547"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_547"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_547"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanen
                                    </div>
                                </td>
                                <td class="td_w12">
                                    99e
                                </td>
                                <td
                                    id="other_mem_525"
                                    name="body"
                                    class="td_w10"
                                >
                                    4
                                </td>
                                <td class="td_w10">
                                    IE
                                </td>
                                <td class="td_w18">
                                    2020-08-27 18:06:10
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_525"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_525"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_525"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_525"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_525"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_525"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_525"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_525"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_525"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_525"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_525"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    99ne
                                </td>
                                <td
                                    id="other_mem_517"
                                    name="body"
                                    class="td_w10"
                                >
                                    6
                                </td>
                                <td class="td_w10">
                                    WA
                                </td>
                                <td class="td_w18">
                                    2020-08-20 20:23:47
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_517"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_517"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_517"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_517"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_517"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_517"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_517"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_517"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_517"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_517"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_517"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    99nn
                                </td>
                                <td
                                    id="other_mem_665"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    AA1
                                </td>
                                <td class="td_w18">
                                    2021-12-14 15:09:00
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_665"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_665"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_665"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_665"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_665"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_665"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_665"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_665"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_665"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_665"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_665"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9i
                                </td>
                                <td
                                    id="other_mem_534"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    UU
                                </td>
                                <td class="td_w18">
                                    2020-09-02 14:56:43
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_534"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_534"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_534"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_534"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_534"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_534"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_534"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_534"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_534"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_534"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_534"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        JOANNE
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9in
                                </td>
                                <td
                                    id="other_mem_648"
                                    name="body"
                                    class="td_w10"
                                >
                                    1
                                </td>
                                <td class="td_w10">
                                    97I
                                </td>
                                <td class="td_w18">
                                    2021-10-07 17:28:30
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_648"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_648"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_648"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_648"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_648"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_648"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_648"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_648"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_648"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_648"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_648"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9in2
                                </td>
                                <td
                                    id="other_mem_655"
                                    name="body"
                                    class="td_w10"
                                >
                                    3
                                </td>
                                <td class="td_w10">
                                    9YY
                                </td>
                                <td class="td_w18">
                                    2021-10-21 17:13:23
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_655"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_655"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_655"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_655"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_655"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_655"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_655"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_655"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_655"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_655"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_655"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9n99
                                </td>
                                <td
                                    id="other_mem_519"
                                    name="body"
                                    class="td_w10"
                                >
                                    2
                                </td>
                                <td class="td_w10">
                                    JU
                                </td>
                                <td class="td_w18">
                                    2020-08-24 15:24:35
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_519"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_519"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_519"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_519"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_519"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_519"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_519"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_519"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_519"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_519"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_519"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9n9n
                                </td>
                                <td
                                    id="other_mem_493"
                                    name="body"
                                    class="td_w10"
                                >
                                    35
                                </td>
                                <td class="td_w10">
                                    YT
                                </td>
                                <td class="td_w18">
                                    2020-08-12 19:00:41
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_493"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_493"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_493"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_493"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_493"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_493"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_493"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_493"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_493"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_493"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_493"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9ne
                                </td>
                                <td
                                    id="other_mem_409"
                                    name="body"
                                    class="td_w10"
                                >
                                    7
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2019-04-16 17:19:48
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_409"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_409"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_409"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_409"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_409"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_409"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_409"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_409"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_409"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_409"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_409"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9neee
                                </td>
                                <td
                                    id="other_mem_638"
                                    name="body"
                                    class="td_w10"
                                >
                                    2
                                </td>
                                <td class="td_w10">
                                    ABV
                                </td>
                                <td class="td_w18">
                                    2021-04-21 18:12:18
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_638"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_638"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_638"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_638"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_638"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_638"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_638"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_638"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_638"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_638"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_638"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9new
                                </td>
                                <td
                                    id="other_mem_582"
                                    name="body"
                                    class="td_w10"
                                >
                                    11
                                </td>
                                <td class="td_w10">
                                    NEW
                                </td>
                                <td class="td_w18">
                                    2020-10-28 17:26:28
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_582"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_582"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_582"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_582"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_582"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_582"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_582"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_582"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_582"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_582"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_582"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9njoanne
                                </td>
                                <td
                                    id="other_mem_492"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    AA
                                </td>
                                <td class="td_w18">
                                    2020-08-12 18:50:49
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_492"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_492"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_492"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_492"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_492"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_492"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_492"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_492"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_492"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_492"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_492"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9nn
                                </td>
                                <td
                                    id="other_mem_410"
                                    name="body"
                                    class="td_w10"
                                >
                                    2
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2019-04-22 15:31:14
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_410"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_410"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_410"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_410"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_410"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_410"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_410"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_410"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_410"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_410"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_410"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9o
                                </td>
                                <td
                                    id="other_mem_528"
                                    name="body"
                                    class="td_w10"
                                >
                                    8
                                </td>
                                <td class="td_w10">
                                    OU
                                </td>
                                <td class="td_w18">
                                    2020-08-28 16:50:39
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_528"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_528"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_528"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_528"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_528"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_528"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_528"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_528"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_528"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_528"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_528"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        joanne
                                    </div>
                                </td>
                                <td class="td_w12">
                                    9u
                                </td>
                                <td
                                    id="other_mem_520"
                                    name="body"
                                    class="td_w10"
                                >
                                    7
                                </td>
                                <td class="td_w10">
                                    UU
                                </td>
                                <td class="td_w18">
                                    2020-08-25 16:11:51
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_520"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_520"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_520"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_520"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_520"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_520"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_520"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_520"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_520"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_520"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_520"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        a22
                                    </div>
                                </td>
                                <td class="td_w12">
                                    a22
                                </td>
                                <td
                                    id="other_mem_196"
                                    name="body"
                                    class="td_w10"
                                >
                                    1
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2012-04-12 01:26:39
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_196"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_196"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_196"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_196"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_196"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_196"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_196"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_196"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_196"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_196"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_196"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        bb
                                    </div>
                                </td>
                                <td class="td_w12">
                                    aa88
                                </td>
                                <td
                                    id="other_mem_252"
                                    name="body"
                                    class="td_w10"
                                >
                                    0
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2013-06-10 04:44:27
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_252"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_252"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_252"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_252"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_252"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_252"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_252"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_252"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_252"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_252"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_252"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        aa
                                    </div>
                                </td>
                                <td class="td_w12">
                                    aa99
                                </td>
                                <td
                                    id="other_mem_251"
                                    name="body"
                                    class="td_w10"
                                >
                                    1
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2013-06-10 04:40:59
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_251"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_251"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_251"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_251"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_251"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_251"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_251"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_251"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_251"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_251"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_251"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        A
                                    </div>
                                </td>
                                <td class="td_w12">
                                    aaa
                                </td>
                                <td
                                    id="other_mem_86"
                                    name="body"
                                    class="td_w10"
                                >
                                    1
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2008-02-12 02:54:50
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_86"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_86"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_86"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_86"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_86"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_86"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_86"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_86"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_86"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_86"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_86"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        Allen
                                    </div>
                                </td>
                                <td class="td_w12">
                                    allen
                                </td>
                                <td
                                    id="other_mem_118"
                                    name="body"
                                    class="td_w10"
                                >
                                    2
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2008-04-09 05:58:35
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_118"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_118"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_118"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_118"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_118"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_118"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_118"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_118"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_118"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_118"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_118"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        amy4
                                    </div>
                                </td>
                                <td class="td_w12">
                                    amy4
                                </td>
                                <td
                                    id="other_mem_328"
                                    name="body"
                                    class="td_w10"
                                >
                                    2
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2016-03-31 01:32:04
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_328"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_328"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_328"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_328"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_328"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_328"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_328"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_328"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_328"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_328"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_328"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        angel
                                    </div>
                                </td>
                                <td class="td_w12">
                                    angel
                                </td>
                                <td
                                    id="other_mem_400"
                                    name="body"
                                    class="td_w10"
                                >
                                    6
                                </td>
                                <td class="td_w10">
                                    TA
                                </td>
                                <td class="td_w18">
                                    2018-12-11 13:39:06
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_400"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_400"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_400"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_400"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_400"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_400"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_400"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_400"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_400"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_400"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_400"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
                                </td>
                            </tr>

                            <tr class="re_tb_body">
                                <td class="td_w12 fixedShadow td_fixed">
                                    <div class="inside">
                                        angel6
                                    </div>
                                </td>
                                <td class="td_w12">
                                    angel6
                                </td>
                                <td
                                    id="other_mem_480"
                                    name="body"
                                    class="td_w10"
                                >
                                    4
                                </td>
                                <td class="td_w10">
                                    ANG
                                </td>
                                <td class="td_w18">
                                    2020-08-10 19:13:53
                                </td>
                                <td class="td_w12">
                                    <!-- 要打開下方選單時加上.active use_animate-->
                                    <div
                                        id="status_div_480"
                                        tabindex="0"
                                        name="body"
                                        class="re_switch  "
                                    >
                                        <span
                                            id="status_view_480"
                                            data-status="Y"
                                            >啟用</span
                                        >
                                        <ul id="" class="use_animate">
                                            <li
                                                id="status_all_480"
                                                name="body"
                                                style="display:none;"
                                                data-status="Y"
                                            >
                                                啟用
                                            </li>
                                            <li
                                                id="status_enable_480"
                                                name="body"
                                                style="display:"
                                                data-status="N"
                                            >
                                                停用
                                            </li>
                                            <li
                                                id="status_disable_480"
                                                name="body"
                                                style="display:"
                                                data-status="S"
                                            >
                                                只能看帳
                                            </li>
                                            <li
                                                id="status_only_480"
                                                name="body"
                                                style="display:"
                                                data-status="L"
                                            >
                                                禁止登入
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="td_w16">
                                    <div class="re_box">
                                        <button
                                            id="func_edit_480"
                                            name="body"
                                            class="re_edit_btn btn_msg"
                                            data-msg="修改"
                                        ></button>
                                        <button
                                            id="func_setting_480"
                                            style="display: ;"
                                            name="body"
                                            class="re_set_btn btn_msg"
                                            data-msg="詳細設定"
                                        ></button>
                                        <button
                                            id="func_delete_480"
                                            name="body"
                                            style="display: ;"
                                            class="re_del_btn btn_msg"
                                            data-msg="刪除"
                                        ></button>
                                        <button
                                            id="func_book_480"
                                            name="body"
                                            class="re_book_btn btn_msg"
                                            data-msg="現金簿"
                                        ></button>
                                    </div>
                                </td>
                                <td class="td_w10">
                                    <button
                                        id="other_search_480"
                                        name="body"
                                        class="ok_btn"
                                    >
                                        查詢
                                    </button>
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
            <div class="re_page_box">
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
