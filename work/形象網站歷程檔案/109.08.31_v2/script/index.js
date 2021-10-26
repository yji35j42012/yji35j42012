    var move = 0
    var list = $('.banner_group>div').length
    var banneStart;
    var count = 0

    $(document).ready(function(){
        $(`.banner_group>div:eq(0)`).addClass('active')
        if(count == 0){goPlay();} 
        for(var x = 0;x<999;x++){
            clearInterval(banneStart);
        }  
    })	
    $('.banner_group,.banner_dots').mousemove(function() {
        count = 0
        for(var x = 0;x<999;x++){
            clearInterval(banneStart);
        }      
    });
    $('.banner_group,.banner_dots').mouseenter(function(){
        count = 0
        for(var x = 0;x<999;x++){
            clearInterval(banneStart);
        } 
    })
    $('.banner_group,.banner_dots').mouseout(function() {
        if(count == 0){goPlay();}
        else{
            for(var x = 0;x<999;x++){
                clearInterval(banneStart);
            }   
        }
    });
  
    // 輪播計時器
    function goPlay() {
        banneStart = setInterval(banner, 4000)
    };
    function banner(){
        count ++
        console.log(count)
        move == list - 1? move = 1 : move++
        $('.banner_dots li').removeClass('on')
		if(move>0 && move < list - 1){action_1()}
		else if(move == list - 1){action_2()}	
    }

    // 輪播按鍵點擊事件
    $('.banner_dots li').click(function(){
        count = 0
        for(var x = 0;x<999;x++){
            clearInterval(banneStart);
        } 
        $('.banner_dots li').removeClass('on')
        var find = $('.banner_dots li').index(this)
        if(move < 3){
            move = find;
            if(find>0 && find < list - 1){
                move = find;
                action_1();
            }
            else if(find == 0){      
                action_2()
            }	
        } 
        else if(move == 3){
            if(find>0 && find < list - 1){
                move = find;
                action_1();
            }
            else if(find == 0){      
                move = 4
                action_2()
            }	   
        }
    })
 
    // ====== 函式區塊 ======
	function goTransform(page,time){
		$('.banner_group').css('transform',`translateX(-${page * 100}%)`).css('transition',`${time}s`);
	}
	function changeClass(name){
		$(`.banner_group>div`).removeClass('active')
		$(`.banner_group>div:eq(${name-1})`).addClass('active')
    }
    function action_1(){
        goTransform(move, 0.5);
        setTimeout(function(){changeClass(move+1)},500);
        $(`.banner_dots li:eq(${move})`).addClass('on')
    }
    function action_2(){
        goTransform(move, 0.5);
		setTimeout(function(){goTransform(0, 0);},500);
        setTimeout(function(){
            changeClass(1)
            move = 0
        },510)
        $(`.banner_dots li:eq(0)`).addClass('on')
    }

    
    // 漢堡bar點擊menu 展開/關閉
    $('.menu_btn').click(function(){$(this).toggleClass('active')})
    $('.menu li').click(function(){$('.menu_btn').removeClass('active')})
    
	var scroll = $(window).scroll(function () {
		for (var i = 1; i < 4; i++) {
			if (scroll.scrollTop() > $(`#hm_${i}`).offset().top + $(`#hm_${i}`).height() / 3 * 2) {
				$(`#hm_${i + 1}`).addClass('active')
			}
		}
	})