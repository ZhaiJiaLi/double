window.onload=function () {

    let imglist=document.querySelectorAll(".img-box li");
    let cirlist=document.querySelectorAll(".cirfive li");
    // console.log(imglist, cirlist);
    let now=next=0;
    let t=setInterval(move,2000);
    for(let i=1;i<imglist.length;i++){
        imglist[i].style.left="1226px";
    }
    function move() {
        next++;
        if (next==imglist.length) {
            next=0;
        }
        imglist[next].style.left="1226px";
        // imglist[now].style.left="-1226px";
        // imglist[next].style.left="0";
        animate(imglist[now],{left:-1226});
        animate(imglist[next],{left:0});
        cirlist[now].className="";
        cirlist[next].className="hot";
        now=next;
    }

    let banner=document.querySelector(".banner")[0];
    console.log(banner);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    //    两测按钮
    let left=document.querySelector(".pre");
    let right=document.querySelector(".next1");
    // console.log(pre, next1);
    right.onclick=function () {
        move();
    }
    function moveL() {
        next--;
        if (next<0) {
            next=imglist.length-1;
        }
        imglist[next].style.left="-1226px";
        // imglist[now].style.left="-1226px";
        // imglist[next].style.left="0";
        animate(imglist[now],{left:1226});
        animate(imglist[next],{left:0});
        cirlist[now].className="";
        cirlist[next].className="hot";
        now=next;
    }
    left.onclick=function () {
        moveL();
    }
//    小点前进、后退

    for (let i=0;i<cirlist.length;i++){
        cirlist[i].onclick=function () {
            if (now==i){
                return;
            } else if (now<i){
                imglist[i].style.left="1226px";
                animate(imglist[now],{left:-1226});
                animate(imglist[i],{left:0});
                cirlist[now].className="";
                cirlist[i].className="hot";

            }else {
                imglist[i].style.left="-1226px";
                animate(imglist[now],{left:1226});
                animate(imglist[i],{left:0});
                cirlist[now].className="";
                cirlist[i].className="hot";
            }
            next=now=i;
        }
    }





}