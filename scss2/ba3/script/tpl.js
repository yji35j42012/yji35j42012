let status = true;

//四種狀態
$('#frame li').click(function() {
    let data = this.getAttribute("data-txt");
    switch (data) {
        case '電投有卡':
            remove()
            $('#frame').addClass('frame --telType');
            break;
        case '電投無卡':
            remove()
            $('#frame').addClass('frame --telType --noCard');
            break;
        case '網投有卡':
            remove()
            $('#frame').addClass('frame');
            break;
        case '網投無卡':
            remove()
            $('#frame').addClass('frame --noOrder');
            break;
    }
})

function remove() {
    if (status) {
        $('#frame').removeClass()
    } else {
        $('#frame').removeClass()
        $('#frame').addClass('--bigTv')
    }
}

// 視訊放大
$('#videobig_btn').click(function() {
    status = !status;
    $('#frame').toggleClass('--bigTv')
})

//小於1024拿掉class ==> --bigTv
// padList 加上none

$(window).resize(function() {
    start();
    $('#history_total').removeClass('--on')
})

function start() {
    let winW = $(window).width()
    if (winW < 996) {
        $('#padList01,#padList02,#padList03').css('display', 'none')
        $('#frame').removeClass('--tableOpen')
        $('#frame').removeClass('--bigTv');

    } else {
        $('#padList01,#padList02,#padList03').css('display', '')
        $('#padList01').addClass('--on')
    }

    if (winW >= 996) {
        $('#tableTitle').mouseenter(function() {
            $('#frame').addClass('--tableOpen');
        })
        $('#tableBody').mouseleave(function() {
            $('#frame').removeClass('--tableOpen')
        })
    }
}

start()

$('#tablephBtn').click(function() {
    $('#frame').toggleClass('--tableOpen');
})


// 卡號資訊切換
$('#cardTitle li').click(function() {
    $('#cardTitle li').removeClass('--on')
    $(this).addClass('--on')

    let data = this.getAttribute("data-txt");
    switch (data) {
        case 'All':
            $('#frame').addClass('--cardOpen');
            break;
        default:
            $('#frame').removeClass('--cardOpen');
    }
})

// 詳細資訊切換
$('#padChange li').click(function() {
    $('#padChange li').removeClass('--on');
    $(this).addClass('--on');

    var index = $('#padChange li').index(this)
    $('#padList01,#padList03').removeClass('--on')
    switch (index) {
        case 0:
            $('#padList01').addClass('--on');
            break;
        case 1:
            $('#padList03').addClass('--on');
            break;
    }
})


$('#closeBtn01').click(function() {
    $('#padList01').css('display', 'none')
})

$('#closeBtn02').click(function() {
    $('#padList02').css('display', 'none')
})

$('#closeBtn03').click(function() {
    $('#padList03').css('display', 'none')
})

$('#phChange li').click(function() {
    let data = this.getAttribute("data-txt");
    $('#phChange li').removeClass('--on')
    switch (data) {
        case '好路追注':
            $('#padList01').css('display', 'flex');
            break;
        case '限紅':
            $('#padList02').css('display', 'flex');
            break;
        case '最新投注':
            $('#padList03').css('display', 'flex');
            break;
    }
})

$('#agreeBtn button').click(function() {
    let dataTxt = $(this).attr('data-txt')
    switch (dataTxt) {
        case '確定':
            window.location.href = "lobby.html";
            break;
        case '取消':
            window.location.href = "login.html";
            break;
    }
})

$('.lobbyTb__foot__btn').click(function() {
    window.location.href = "main_game.html";
})

$('#myself li').click(function() {
    let dataTxt = $(this).attr('data-txt')
    switch (dataTxt) {
        case '返回大廳':
            window.location.href = "lobby.html";
            break;
        case '投注明細':
            window.location.href = "history_view_web.html";
            break;
        case '遊戲規則':
            window.location.href = "game_rule.html";
            break;
        case '登出':
            window.location.href = "login.html";
            break;
        case '選擇線路':
            window.location.href = "chice_line.html";
            break;
    }
})

$('#totalOn').click(function() {
    $('#history_total').toggleClass('--on')
})

// 返回上一頁
$('#back_btn').click(function () {
    history.back()
})

$('.menu__info_btn').click(function () {
    $('.frame__menu').toggleClass('--active')
})