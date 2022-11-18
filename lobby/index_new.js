var util = null;		//工具包
var listenEvt = null;
var chkDataUtil = null;
var langStr = null;
var device = null;
var UA = null;
var mainV = null;
var plugW = null;
var loadPlugW = null;
var noticeV = null;
var alert_func = null;
var force_loading = true;	// 強制開啟 loading
var decodelog = false;		//列印 socket log
var plugW_enable = false;	//允許開啟插件頁
var card_detail_window = null;	//投注明細彈窗
var touchEvt = null;
var isSecure = ('https:' == document.location.protocol);
var onevideo = null;	//使用單一video視訊連線 開關
var onesocket = null;	//使用單一socket連線 開關
var socketW = null;		//連MulitRelay
var firstSocket = true;	//初次連線
var nowPage = null;
var plugPageObj = new Object();
var mulit_st = null;
var lobby_st = null;
var game_st = null;
var lobby_cmd = null;
var game_cmd = null;
var pr_cmd = null;
var bulletin_open = null;
var marquee_sec = 5;	//跑馬燈 越高越快

//初始化工具
function init() {
	//建立工具
	util = new Util();
	listenEvt = new ListenEvent();
	langStr = (new LangString()).GetLS("zh-tw");

	plugW = util.getSpan(document, "plugWindow");//遊戲室plug
	doSet();
}

//預設動作
function doSet() {
	showgame();//ibo遊戲室
	getMeminfo();//拿會員資料
	getScoll();//跑馬燈
	btnListen();//監聽
}

//畫面切換
function changeMain(folder, file, tmp_parm) {
	var mainObj = util.getSpan(document, "index_main");
	mainObj.classList.remove("--bigTv");	// 大視訊
	mainObj.classList.remove("--telType");	// 電投
	mainObj.classList.remove("--noCard");	// 電投無卡
	mainObj.classList.remove("--noOrder");	// 電網投無卡

	changeFrame(folder, file, tmp_parm, mainV);
	// chgTopMenu();
	util.checkScale(document.body, true);
}

function changeFrame(folder, file, tmp_parm, iframeV) {
	showLoading();
	nowPage = file;
	util.cleanXMLRequest();	//清除舊頁面request
	var path = "../" + sitepath + "/app/";
	if (folder != "") path += folder + "/";
	path += file + ".php";
	var parm = "allms=" + new Date().getTime();
	parm += "&uid=" + uid;
	parm += "&langx=" + langx;
	if (tmp_parm.substr(0, 1) != "&") parm += "&";
	parm += tmp_parm;

	iframeV.src = path + "?" + parm;

	//執行 onload
	frameOnload = function () {
		var check = null;

		try {
			check = iframeV.contentWindow.document.body.onload;
		} catch (e) {
			check = null;
		}

		if (check == null) {
			setTimeout(function () { changeMain(folder, file, tmp_parm); }, 5000);
		}

		// viewUtil.setScoll(iframeV);

		// // 建立共用監聽
		// var buttonArr = iframeV.contentWindow.document.getElementsByName("main_button");
		// for (var i = 0; i < buttonArr.length; i++) listenEvt.addOnClickGrp("main", buttonArr[i].id, buttonArr[i], listenUtil, buttonArr[i].getAttribute("data-func"));
		// listenEvt.addKeyUpGrp("main", "keyup", iframeV.contentWindow.document, listenUtil, null);

		// util.getSpan(document, "mainView").style.display = "";
		// if (file != "LobbyBA") closeLoading();
		// if (iframeV.attachEvent) iframeV.detachEvent("onload", frameOnload);
		// else iframeV.onload = function () { };
		// iframeV.contentWindow.document.body.className = iframeV.contentWindow.document.body.className.replace("*LANGX*", langx.substr(3).toUpperCase());	//替換語系CLASS
	};

	if (iframeV.attachEvent) {
		iframeV.attachEvent("onload", frameOnload);
	} else {
		iframeV.onload = frameOnload;
	}
}

//設定 plugView 畫面
function loadPlug(folder, file, adata, viewName) {
	showLoading();

	viewName = viewName || "plugView";
	var doView = util.getSpan(document, viewName);
	plugPageObj[viewName] = file;

	var path = "../../" + sitepath + "/app/";
	if (folder != "") path += folder + "/";
	path += file + ".php";
	var parm = "allms=" + new Date().getTime();
	parm += "&uid=" + uid;
	parm += "&langx=" + langx;

	if (adata && adata["parm"]) {
		parm += adata["parm"];
		delete adata["parm"];
	}

	doView.contentWindow.location.replace(path + "?" + parm);
	//執行 onload
	frameOnload = function () {
		var check = null;
		try {
			check = doView.contentWindow.document.body.onload;
		} catch (e) {
			check = null;
		}

		if (check == null) {
			setTimeout(function () { loadPlug(folder, file, adata, viewName); }, 1000);
			return;
		}

		//執行 adata
		if (doView.contentWindow.setData) {
			doView.contentWindow.setData(adata);
		}

		closeLoading();
		if (doView.attachEvent) doView.detachEvent("onload", frameOnload);
		else doView.onload = function () { };
		// doView.contentWindow.document.body.className = doView.contentWindow.document.body.className.replace("*LANGX*", langx.substr(3).toUpperCase());	//替換語系CLASS
		// viewUtil.setScoll(doView);

		// // 建立共用監聽
		// var buttonArr = doView.contentWindow.document.getElementsByName("plug_button");
		// for (var i = 0; i < buttonArr.length; i++) listenEvt.addOnClickGrp("plug", buttonArr[i].id, buttonArr[i], listenUtil, buttonArr[i].getAttribute("data-func"));
		// listenEvt.addKeyUpGrp("plug", "keyup", doView.contentWindow.document, listenUtil, null);

		// 畫面設定完，需自行執行 showPlug(); 與 closeLoading();
	};

	if (doView.attachEvent) {
		doView.attachEvent("onload", frameOnload);
	} else {
		doView.onload = frameOnload;
	}
}

//顯示 plugView 畫面
function showPlug() {
	plugW.style.display = "";
	// chgTopMenu();
}

//關閉 plugView 畫面
function closePlug() {
	plugW.style.display = "none";

	util.doc_blur(util.getSpan(document, "plugView").contentWindow.document);	// 元件失焦

	listenCenter("resize", new Object());
	// chgTopMenu();
}

//開啟 loading 畫面
function showLoading(str) {
	if (str) util.getSpan(document, "loading_msg").innerHTML = str;
	util.getSpan(document, "loadingWindow").style.display = "";
	window.scrollTo(0, 0);
	document.body.style.overflow = "hidden";
}

//關閉 loading 畫面
function closeLoading() {
	if (force_loading == false) {
		util.getSpan(document, "loadingWindow").style.display = "none";
		util.getSpan(document, "loading_msg").innerHTML = "";
		document.body.style.overflow = "";
		closeLoadPlug();
	}
}

//開啟 loadPlugView 畫面
function showLoadPlug() {
	loadPlugW.style.display = "";
}

//關閉 loadPlugView 畫面
function closeLoadPlug() {
	plugPageObj["loadPlugView"] = null;
	loadPlugW.style.display = "none";
}

//開啟 alert 畫面
function showAlert(str, func) {
	if (str != "") {
		util.getSpan(document, "msg").innerHTML = str;
		alert_func = func || null;
		util.getSpan(document, "alertWindow").style.display = "";
	}
}

//關閉 alert 畫面
function closeAlert() {
	util.getSpan(document, "alertWindow").style.display = "none";
}

//解析過慢時做的處理，以免讀取不到參數而停止動作
function waitDoFunc(func, node) {
	var interval = 500;
	var timer = setInterval(function () {
		var check;

		try {
			check = (func[node]);
		} catch (e) {
			check = false;
		}

		if (check) {
			clearInterval(timer);
			func[node]();
		}
	}, interval);
}

function listenCenter(eventStr, obj) {
	console.log(eventStr, (obj) ? obj.object || "" : "");

	var tmp = eventStr.split("_");
	eventName = tmp[0];
	eventType = tmp[1];

	if(eventStr == "login_out"){//登出
		parent.window.location.href = document.location.protocol + "//" + document.domain;
		bulletin_open.close();
		return;
	}
	if(eventStr == "go_chgpswd_page"){//修改密碼
		loadPlug("login", "chg_pswd", null);
		return;
	}
	if(eventStr == "go_bulletin"){//佈告欄
		var url = "/www_html5/app/bulletin/bulletin.php?uid=" + uid + "&langx=" + langx;
		bulletin_open =  window.open(url, "bulletin_window", "resizable=no,depended=yes,location=no,width=1150,height=650");
		// loadPlug("bulletin", "bulletin", null);
		return;
	}
}

function logout() {
	var aPath = "/" + sitepath + "/app/function.php";
	var parm = "uid=" + uid + "&func=logout";

	util.addPostPHP("logout", aPath, parm, this);
	if (card_detail_window != null) card_detail_window.close();
}

function phpDataCenter(eventName, obj) {
	if(eventName == "launchgame"){
		if(obj["data"] && obj["msg"] == "success"){
			if(obj["data"]["respcode"] == "0000"){
				util.getSpan(document, "show_game").src = obj["data"]["launchgameurl"];
			}else{
				alert("登入遊戲異常");
			}
		}else{
			alert("登入遊戲參數錯誤");
		}
		return;
	}
	if(eventName == "getmeminfo"){
		setMemView(obj);
		return;
	}
	if(eventName == "getScoll"){
		setScoll(obj);
		return;
	}
}

function setUA() {
	(function getUA(window) {
		var ua = navigator.userAgent.toLowerCase();
		var ieMode = (s = ua.match(/msie ([\d.]+)/)) ? s[1] : null,
			isIE = !!window.ActiveXObject,
			isIE6 = isIE && !window.XMLHttpRequest;
		var isEdge = /edge/i.test(ua),
			isOpera = /opr\//i.test(ua);
		var isIpad = /(ipad).*os\s([\d_]+)/i.test(ua);

		window.UA = {
			isMobile: /applewebkit.*mobile.*/.test(ua) || /applewebKit/.test(ua),                           //是否为移动端
			isMac: /mac os x/.test(ua),                                                                  //苹果电脑
			isAndroid: ua.indexOf('android') > -1 || ua.indexOf('linux') > -1,                               //android终端
			isIPhone: !isIpad && /(iphone\sos)\s([\d_]+)/i.test(ua),                                        //iphone
			isIPad: isIpad,                                                                               //ipad
			isIos: isIpad || /(iphone\sos)\s([\d_]+)/i.test(ua),                                         //ios系统,包括ipad和iphone；(不包含iPod touch)
			isWeiXin: /micromessenger/i.test(ua),                                                           //weixin
			isUC: ua.indexOf('ucbrowser') > -1,                                                         //UC
			isUC_Webkit: /uc\sapplewebkit\/([\d.]+)/i.test(ua),                                                //isUC_Webkit
			isUC_Proxy: /(ucweb)(\d.+?(?=\/))/i.test(ua),                                                     //isUC_Proxy

			isWeibo: /weibo/i.test(ua),                                                                    //在新浪微博客户端打开
			isQQ: /(qq)\//i.test(ua),                                                                   //在QQ
			isChrome: (/chrome\/([\d.]+)/.test(ua) || /crios\/([\d.]+)/.test(ua)) && !isEdge,               //Chrome
			isMozilla: ua.indexOf('gecko') > -1 && ua.indexOf('khtml') == -1,                                //火狐内核
			isWebkit: /applewebkit/i.test(ua),                                                              //苹果，谷歌内核
			isOpera: isOpera,                                                                              //opera浏览器，webkit
			isSafari: /safari/i.test(ua) && (!/chrome\/([\d.]+)/.test(ua)) && (!isOpera),                                          //苹果浏览器
			isBlackberry: /(blackberry).*version\/([\d.]+)/i.test(ua),                                          //blackberry
			isFirefox: /(firefox)\//i.test(ua),                                                              //在firefox

			isEdge: isEdge,                                                                               //edge
			isIE: isIE,                                                                                 //IE
			ieModes: "ieMode" + ieMode,
			isIE6: isIE6,                                                                                //IE6
			isIE7: isIE && !isIE6 && !ieMode || ieMode == 7,                                             //IE7
			isIE8: isIE && ieMode == 8,                                                                  //IE8
			isIE9: isIE && ieMode == 9,                                                                  //IE9
			isIE10: isIE && ieMode == 10,                                                                 //IE10
			isIE11: /rv:([\d.]+)\) like gecko/.test(ua),
			is360mse: /360 aphone browser|wow|qhbrowser/i.test(ua),                                             //360手机浏览器

			isHorizontal: window.orientation == 90 || window.orientation == -90,                                //是否横屏
			isVertical: window.orientation == 0 || window.orientation == 180                                  //是否竖屏
		}
	})(window);

	UA = window.UA;
}

//按鈕監聽
function btnListen() {
	var btnAry = document.getElementsByName("btn");
	for (var i = 0; i < btnAry.length ; i++){
		listenEvt.addOnClick(btnAry[i].id, btnAry[i], this, null);
	}
}

function showgame(){
	var aPath = "/" + sitepath + "/app/launchgame/launchgame.php";
	var parm = "&action=getdata";
	parm += "&username=" + player_data["username"];
	parm += "&machine=PC"; 
	util.addPostPHP("launchgame", aPath, parm, this);
}

function setMemView(data){
	util.getSpan(document, "mem_username").innerHTML = data["username"];
	util.getSpan(document, "mem_credit").innerHTML = data["credit"] + "(" + data["cur"] + ")";
}

function setScoll(data) {
	if (marqueeObj = util.getSpan(document, "marquee")) {
		var scollStr = "";
		for (var key in data["marquee"]) scollStr += data["marquee"][key]["msg"] + "   ";
		var tmp_sec = 15 + (util.accDiv(scollStr.length, marquee_sec));	// 15預設速度(只有一個字的情況 不然會跑太快)
		marqueeObj.innerHTML = scollStr;
		marqueeObj.style = "animation: marquee_move " + tmp_sec + "s linear infinite;";
	}
}
//會員資料
function getMeminfo(){
	var aPath = "/" + sitepath + "/app/member/get_mem_info.php";
	var parm = "&action=getdata"; 
	util.addPostPHP("getmeminfo", aPath, parm, this);
	setInterval(function () {
			util.addPostPHP("getmeminfo", aPath, parm, this);
	}, 5000);
}

//一分鐘更新一次跑馬燈
function getScoll(){
	var aPath = "/" + sitepath + "/app/member/get_mem_info.php";
	var parm = "&action=getScoll"; 
	util.addPostPHP("getScoll", aPath, parm, this);
	setInterval(function () {
			util.addPostPHP("getScoll", aPath, parm, this);
	}, 60000);
}