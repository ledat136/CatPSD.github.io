$(document).ready(function(){
    var btn_top = $('.back-to-top');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn_top.show();
        }
        else{
            btn_top.hide();
        }
    })
    btn_top.on('click',function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop : 0
        },500);
    })

    var changeMenu = document.getElementsByClassName('menu fa-bars');
    var changeMenu = document.querySelector('.menu .fa-bars');
    // var menu_mb = $(".menu__mobile");
        changeMenu.addEventListener("click",function(){
            $(".menu__mobile").css({"left":"0"});
        });
    var closeMenu = $('.close-menu');
    closeMenu.click(function(){
        $(".menu__mobile").css({"left":"-100%"});
    })
    // $('.menu .fa-bars').click(function(){
    //     $('.menu__mobile').css({"left":"0"});
    //     var x = document.getElementsByClassName('menu__mobile');
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //       } else {
    //         x.style.display = "block";
    //       }
    // })
    //sticly
    $('#header__pc').waypoint(
        function(direction){
            if(direction == "down"){
                $('#header__pc').addClass('sticky');
            }else{
                $('#header__pc').removeClass('sticky');
            }
        },{
            offset: '-200px'
        }
    )

    // Slider

    $('.ul_carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        // autoplay:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
            ,1024 : {
                item:3
            }
        }
    })
    $('.box__product-sp').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        autoplay:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    var video_modal = $('.video_modal');
    // var video_modal_center = $('.video_modal-center');
    var show_video = $('.show_video');
    video_modal.click(function(){
        $(this).hide();
    });
    show_video.click(function(){
        video_modal.show();
    });

    //MOBILE
    var item_menu_mb = $(".show__sub-menu");
    item_menu_mb.click(function(){
        $(this).toggleClass('rotate');
        $(this).next('.sub-menu').slideToggle();
    })
});
function changeProductList(type,elment){
    let tabs = document.getElementsByClassName('tab-item');
    for(i = 0;i < tabs.length ; i++){
        tabs[i].style.color = "#3f3f3f";
    }
    elment.style.color = "#b8b8b8";
    document.getElementById(type).style.display = "block";
    switch(type){
        case 'trend':
            document.getElementById('feature-product').style.display = "none";
            document.getElementById('best-sell').style.display = "none";
            break;
        case 'feature-product':
            document.getElementById('trend').style.display = "none";
            document.getElementById('best-sell').style.display = "none";
            break;
        case 'best-sell':
            document.getElementById('trend').style.display = "none";
            document.getElementById('feature-product').style.display = "none";
            break;
    }
}