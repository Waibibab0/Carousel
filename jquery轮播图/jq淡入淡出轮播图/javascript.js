
        var index=0;
        //向左点击
        $("button").eq(0).click(function(){
            index--;
            if(index<0){
                index=$("#body>li").length-1;
            }
            $("#body>li").eq(index).stop(true,true).fadeIn(500).siblings().fadeOut(500);
            $("#dhd>li").eq(index).css("background","red").siblings().css("background","none");
        });
        //向右点击
        $("button").eq(1).click(function(){
            index++;
            if(index>$("#body>li").length-1){
                index=0;
            }
            $("#body>li").eq(index).stop(true,true).fadeIn(500).siblings().fadeOut();
            $("#dhd>li").eq(index).css("background","red").siblings().css("background","none");
        });
        //封装定时器函数
        var autochange=function(){
            index++;
            if(index>$("#body>li").length-1){
                index=0;
            }
            $("#body>li").eq(index).stop(true,true).fadeIn(500).siblings().fadeOut(500);
            $("#dhd>li").eq(index).css("background","red").siblings().css("background","none");
        }
        //设置定时器
        

        //导航条居中
        var banner=document.getElementById("dhd");
        var box=document.getElementById("box");
        banner.style.left=(box.offsetWidth-banner.offsetWidth)/2+"px";

        //导航点点击事件
        $("#dhd>li").click(function(){
            index=$(this).index();
            $("#dhd>li").eq(index).css("background","red",).siblings().css("background","none");  
            $("#body>li").eq(index).stop(true,false).fadeIn(500).siblings().fadeOut(500);
        })
        
        timer=setInterval(autochange,2500);
        $("#box").hover(function(){
            clearInterval(timer);
        },function(){
            setInterval(timer);
            timer=setInterval(autochange,2500);
        });