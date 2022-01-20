$(".title").slideDown(1000);
let showAppeared = false;

$(document).scroll(function(){
    //console.log($(window).scrollTop());
    if($(window).scrollTop() > 620){
        $(".nav-container").css("display","none");
    }
    else{
        $(".nav-container").css("display","flex");
    }

    if($(window).scrollTop() > 100){
        $(".arrow").css("display","flex");
    }
    else{
        $(".arrow").css("display","none");
    }

    if($(window).scrollTop() > 50){
        $(".about-us h2").animate({
            right: '0%'
        },1000)
        $(".about-us-info").animate({
            left: '0%'
        },1500)
    }

    if($(window).scrollTop() > 800 && !showAppeared){
        $(".shows h2").animate({
            right: '0%'
        },1000);

        slideIn(1500);
        showAppeared = true;
    }
})

function slideIn(time){

    $(".slide").animate({
        left: '0%'
    },time);
}

function slideOut(time){

    $(".slide").animate({
        left: '-100%'
    },time);
}

let shows = $(".showSlide");
let i = 0;
let maxShows = shows.length - 1;

$("#backwardSlide").click(()=>{
    moveBackwards();
})

$("#forwardSlide").click(()=>{
    moveForward();
})

//setInterval(moveForward , 8000)

function moveForward(){
    slideOut(200);
    $(shows[i]).removeClass("d-show");
    i==maxShows ? i=0 : i++;
    $(shows[i]).addClass("d-show");
    slideIn(200);
}

function moveBackwards(){
    slideOut(200);
    $(shows[i]).removeClass("d-show");
    i==0 ? i=maxShows : i--;
    $(shows[i]).addClass("d-show");
    slideIn(200);
}

//Responsive menu
let isMenuOpened = false;
$("#menu-responsive").click(e =>{
    isMenuOpened ? $("#menu").slideUp(1000) : $("#menu").slideDown(1000);
    isMenuOpened = !isMenuOpened;
})
