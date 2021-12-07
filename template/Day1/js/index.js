var menuBtn = document.getElementById("menuBtn");
var app = document.getElementById("app");

function menuHnadler() {
    console.log("a");
    app.classList.toggle("showMenu");
}
menuBtn.addEventListener("click", menuHnadler, false);

var menuList = document.querySelectorAll("#menu li");
var mainScroll = document.querySelector("#main");
var menuListNum = 0;
console.log(menuList);

for (let i = 0; i < menuList.length; i++) {
    const element = menuList[i];
    element.onclick = function () {
        menuList[menuListNum].classList.remove("active");
        menuListNum = i;
        element.classList.add("active");
        var mainList = document.querySelector(
            `#main div[name='${element.getAttribute("id")}']`
        );
        scrollAnimate(mainList.offsetTop);
    };
}

mainScroll.addEventListener("scroll", () => {
    console.log(mainScroll.scrollTop);

});

function scrollAnimate(endAddress) {
    var now = mainScroll.scrollTop; //現在位置
    var switchScroll = null;
    var moveTime = setInterval(function () {
        if (endAddress < now && now !== endAddress && switchScroll !== 2) {
            now = now - 10;
            mainScroll.scrollTop = now;
            switchScroll = 1;
        } else if (
            endAddress > now &&
            now !== endAddress &&
            switchScroll !== 1
        ) {
            switchScroll = 2;
            now = now + 10;
            mainScroll.scrollTop = now;
        } else {
            switchScroll = null;
            mainScroll.scrollTop = endAddress;
            clearInterval(moveTime);
        }
    }, 1);
}
