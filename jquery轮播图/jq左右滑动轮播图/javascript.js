var index=0;
var num=0;

$("button:last").click(function(){

    
    //通过定位left控制
    // $("#mainbody").stop(true,true);
    // if($("#mainbody").offset().left<-3280){
    //     $("#mainbody").css("left","0px");
    // }
    // $("#mainbody").stop(true,true).animate({"left":"-=820px"},200)


    //通过下标值控制
    index++;
    
    if(index>5){
        index=1;
        $("#mainbody").css("left","0px");
    }
    num++;
    num=index;

    if(num>4){
        num=0;
    }
    dhd();
    $("#mainbody").stop(false,false).animate({"left":-num*820+"px"},500)
    console.log(num);
    console.log(index);
})

$("button:first").click(function(){


    //通过设置left控制
    // $("#mainbody").stop(true,true);
    // if($("#mainbody").offset().left>164){
    //     $("#mainbody").css("left","-4100px");
    // }
    // $("#mainbody").stop(true,false).animate({"left":"+=820px"},200)



    //通过下标index

    index--;    
        
    if(index<0){
        index=4;
        $("#mainbody").css("left","-4100px");
    }
    if(num<0){
        num=4;
    }
    num=index;
    dhd();
    // console.log($("ul").offset().left);
    $("#mainbody").stop(false,false).animate({"left":-index*820+"px"},500)
})

//导航条居中
var banner=document.getElementsByClassName("on")[0];
var box=document.getElementById("mainbody");
banner.style.left=(box.offsetWidth-banner.offsetWidth)/2+"px";
function dhd(){
    $(".on>li").eq(num).css("background","red").siblings().css("background","none");
}
//导航点点击
$(".on>li").click(function(){
    index=$(this).index();
    num=index;
    $(this).css("background","red").siblings().css("background","none");
    $("#mainbody").stop(true,true).animate({"left":-num*820+"px"},500);
    
    console.log(num);
    console.log(index);
});