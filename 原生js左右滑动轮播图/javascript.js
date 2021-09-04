
var banner = document.getElementById("banner");
var imglist = document.getElementById("imglist");
var li = imglist.getElementsByTagName("li");
var nav = document.getElementById("nav");
var a = nav.getElementsByTagName("a");
var btn_prev = document.getElementById("prev");
var btn_next = document.getElementById("next");
var sp = 0;
var btn_index = 0;
var timer;
var a_index = 0;

//向右按钮点击事件
btn_next.onclick = function () {
    btn_index++;
    clearInterval(timer);
    if (btn_index > li.length - 1) {
        imglist.style.left = 0;
        btn_index = 1;
    }
    run(imglist, -btn_index * banner.offsetWidth);   
    sp++;
    sp=btn_index;
    if (sp > li.length - 2) {
        sp = 0;
    }
    for (var i = 0; i < li.length - 1; i++) {
        a[i].className = "";
    }
    a[sp].className = "cls";
}

//向左按钮点击事件
btn_prev.onclick = function () {
    btn_index--;
    clearInterval(timer);
    if (btn_index < 0) {
        imglist.style.left = -(li.length - 1) * banner.offsetWidth + "px";
        btn_index = li.length - 2;
        sp = 5;
    }
    run(imglist, -btn_index * banner.offsetWidth);

    sp--;
    sp=btn_index;
    if (sp < 0) {
        sp = a.length;
    }
    for (var i = 0; i < a.length ; i++) {
        a[i].className = "";
    }
    a[sp].className = "cls";

}
//导航点的点击事件
for (var i = 0; i < a.length; i++) {
    a[i].a_index = i;

    a[i].onclick = function () {
        clearInterval(timer);
        for (var j = 0; j < a.length ; j++) {
            a[j].className = "";
        }
        btn_index=this.a_index;
        run(imglist,-btn_index*banner.offsetWidth);
        a[this.a_index].className = "cls";
    }
}
//设置导航条居中
var nav = document.getElementById("nav");
nav.style.left = (banner.offsetWidth - nav.offsetWidth) / 2 + "px";

//轮播图运动过程封装
function run(attr, place) {
    timer = setInterval(function () {
        var chushi = attr.offsetLeft;
        var sdept = (place - chushi) / 10;
        //取整
        if (sdept > 0) {
            sdept = Math.ceil(sdept);
        } else {
            sdept = Math.floor(sdept);
        }
        chushi = chushi + sdept;
        attr.style.left = chushi + "px";
    }, 25)
}

var lbt = function () {
    btn_index++;
    clearInterval(timer);
    if (btn_index > li.length - 1) {
        imglist.style.left = 0;
        btn_index = 1;
    }
    run(imglist, -btn_index * banner.offsetWidth);          
    sp++;
    sp=btn_index;
    if (sp > li.length - 2) {
        sp = 0;
    }
    for (var i = 0; i < li.length - 1; i++) {
        a[i].className = "";
    }
    a[sp].className = "cls";
}

var timer1 = setInterval(lbt, 3000)
//鼠标移入
banner.onmouseover = function () {
    clearInterval(timer1);
}
//鼠标移出
banner.onmouseout = function () {
    timer1 = setInterval(lbt, 3000)
}

