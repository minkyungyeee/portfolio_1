;(function($){
    var pofol = {
        btn:0,
        init:function(){
            var that = this;
                that.scrollEvent();
                that.popUpFn();
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.section6Fn();
                that.section7Fn();
                that.footerFn();
                that.pageMoveFn();
        },
        scrollEvent:function(){
            var scrollPrev = 0;
            var scrollNew = 0;
            var $win = $(window);
            var $winW = $(window).innerWidth();
            var result = null;
            var that = this;
            var $logo = $('#header #logo > a > img');

            function resizeFn(){
                $winW = $(window).innerWidth();
            }
            setTimeout(resizeFn,100);
            $win.resize(function(){
                setTimeout(resizeFn,100);
            });

            function wheelPositionFn(){
                result = scrollPrev - scrollNew > 0 ? 'up' : 'down'
                return {
                    result,
                    scrollPrev,
                    scrollNew
                }
            }
            
            $win.scroll(function(){
                scrollNew = $(this).scrollTop();
                wheelPositionFn();

                if(scrollNew <= 0){ //top에 닿았을때
                    $('#header').removeClass('addShow');
                    $('#header').removeClass('addHide');
                    $('#header').removeClass('addBlack');
                    $('#page-move').addClass('addTop');
                    $('#wrap').removeClass('addStop');
                    
                    if($winW > 980){
                        $logo.attr('src','./img/logo-white.png');
                    }
                    else{
                        $logo.attr('src','./img/logo-neon-orange.png');
                    }
                }
                else{
                    if(result == 'up'){     //스크롤을 올리는중 (흰색배경으로 보여야함)
                        if(that.btn == 1){  //모바일버튼이 눌렸을때
                            $('#header').removeClass('addHide');
                            $('#header').removeClass('addBlack');
                            $('#header').addClass('addShow');
                            $('#wrap').addClass('addStop');
                        }
                        else {
                            $('#header').addClass('addBlack')
                            $('#header').removeClass('addHide');
                            $('#header').addClass('addShow');
                            $logo.attr('src','./img/logo-black.png');
                            $('#page-move').removeClass('addTop');
                            $('#wrap').removeClass('addStop');
                        }
                    }
                    if(result == 'down'){   //스크롤을 내리는중 (안보여야함)
                        if(that.btn == 1){
                            $('#header').removeClass('addShow');
                            $('#header').removeClass('addBlack');
                            $('#header').removeClass('addHide');
                            $('#wrap').addClass('addStop');
                        }
                        else{
                            $('#header').removeClass('addShow');
                            $('#header').removeClass('addBlack');
                            $('#header').addClass('addHide');
                            $('#page-move').removeClass('addTop');
                            $('#wrap').removeClass('addStop');
                        }
                    }

                }

                scrollPrev = scrollNew;
            });

        },
        popUpFn:function(){
            var $pop = $('#modal');
            var $box = $('#modal .container')
            var $close = $('#modal .close');
            var $checkBox = $('#modal .check-box');

            $(document).ready(function(){
                $pop.addClass('addOpen');
            });
            $pop.on({
                click:function(){
                    $(this).removeClass('addOpen');
                }
            });
            $box.on({
                click:function(event){
                    event.stopPropagation();
                }
            });
            $close.on({
                click:function(event){
                    event.preventDefault();
                    $pop.removeClass('addOpen');
                }
            });
            $checkBox.on({
                click:function(event){
                    event.preventDefault();
                    $checkBox.toggleClass('addClick');
                }
            });
        

        },
        headerFn:function(){
            var $win = $(window);
            var $nav = $('#nav');
            var $navArea = $('#nav > ul > li');
            var $mainBtn = $('#nav .main-btn');
            var $subBtn = $('#nav .sub-btn');
            var $sub = $('#nav .sub');
            var $subSub = $('#nav .sub-sub');
            var $asideBtn = $('#aside .aside-btn');
            var $asideSub = $('#aside .aside-sub');

            var $mobileBtn =$('#aside .mobile-btn');
            var $bar = $('#aside .bar');
            var pc = 0;
            var mobile = 0;
            var $logo = $('#header #logo > a > img');
            var that = this;

            var $row = $('#header .row');
            var $deleteBtn = $('#header .delete-btn');

            function pcOptionFn(){
                $nav.css({display:'inline-block'});
                $logo.attr('src','./img/logo-white.png');

                $mainBtn.on({
                    mouseenter:function(){
                        $(this).stop().next().show();
                        $asideSub.stop().hide();
                    }
                });
                $navArea.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                        $subSub.stop().hide();
                    }
                });
                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide();
                        $(this).stop().next().show();
                    }
                });
                $subSub.on({
                    mouseleave:function(){
                        $subSub.stop().next().hide();
                    }
                });
    
                $asideBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $asideSub.stop().hide();
                        $(this).stop().next().show();
                    }
                });
                $asideSub.on({
                    mouseleave:function(){
                        $asideSub.stop().hide();
                    }
                });
            }

            function mobileOptionFn(){
                $sub.stop().hide();
                $subSub.stop().hide();
                $asideSub.stop().hide();
                $bar.removeClass('addMobile');
                $nav.stop().slideUp(0);

                $mainBtn.off('mouseenter');
                $navArea.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSub.off('mouseleave');
                $asideBtn.off('mouseenter');
                $asideSub.off('mouseleave');

                $logo.attr('src','./img/logo-neon-orange.png');
            }

            function pcMobileFn(){
                if($win.innerWidth() > 980 ){
                    pc = 1;
                    mobile = 0;
                    pcOptionFn();
                    that.btn = 0;
                }
                else {
                    pc = 0;
                    mobile = 1;
                    mobileOptionFn();
                }
            }
            setTimeout(pcMobileFn,100);

            $win.resize(function(){
                pcMobileFn();
            });

            $mainBtn.on({
                click:function(event){
                    event.preventDefault();
                    if(mobile ==1){
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });

            $subBtn.on({
                click:function(event){
                    event.preventDefault();
                    if(mobile ==1){
                        $subSub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });

            $mobileBtn.on({
                click:function(){
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle('300');

                    return that.btn == 0 ? that.btn = 1 : that.btn = 0;
                }
            });

            $asideBtn.on({
                click:function(event){
                    event.preventDefault();
                    if(mobile == 1){
                        $asideSub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });

        },
        section1Fn:function(){
            var $win = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $sec1 = $('#section1');
            var $slide = $('#section1 .slide');
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');

            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;
            var n = $('#section1 .slide').length-2;

            var setId = null;
            var setId2 = null;
            var t = 0;
            // 슬라이드 크기 반응형
            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $slide.css({width:$winW});

                if( window.orientation == 0 || window.orientation == 180 ){
                    $winH = $winH;
                }
                else if (window.orientation == 90 || window.orientation == -90 ){
                    if($winW > 980){
                        $winH = $winH;
                    }
                    else{
                        $winH = 600;
                    }
                }
                $sec1.css({width:$winW, height:$winH});
                $slideWrap.stop().animate({left:-$winW*cnt},0);
            }

            setTimeout(resizeFn,100);
            
            $win.resize(function(){
                setTimeout(resizeFn,100);
            });
            //슬라이드 동작
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt},600,function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:-$winW*cnt},0);
                });
            }
            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();                
            }
            $nextBtn.on({
                click:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            $prevBtn.on({
                click:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            //슬라이드 터치 스와이프
            $slideView.swipe({
                swipeLeft:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            //슬라이드 타이머 작동
            function autoTimerFn(){
                setId = setInterval(nextSlideCountFn,3000);
            }

            autoTimerFn();

            function stopTimerFn(){
                t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t ++;
                    if(t>3){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t=0;
                        nextSlideCountFn();
                        autoTimerFn();
                    }
                },1000);
            }
        },
        section2Fn:function(){
            var $conLi = $('#section2 .content-wrap');
            var st1 = null;
            var st2 = null;
            var st3 = null;

            $conLi.removeClass('addScroll');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top-3000){
                    //consolo.log($('#section2').offset().top);
                    st1 = setTimeout(function(){
                        $conLi.eq(0).addClass('addScroll');
                    },100);
                    st2 = setTimeout(function(){
                        $conLi.eq(1).addClass('addScroll');
                    },200);
                    st3 = setTimeout(function(){
                        $conLi.eq(2).addClass('addScroll');
                    },300);
                }
                if($(window).scrollTop() <= 20){
                    $conLi.removeClass('addScroll');
                }
            });


        },
        section3Fn:function(){
            var $productBox = $('#section3 .product-box');
            var $likeBtn = $('#section3 .like-btn');
            var st0 = null;
            var st1 = null;
            var st2 = null;
            var st3 = null;
            var st4 = null;
            var st5 = null;
            var st6 = null;
            var st7 = null;
            var st8 = null;
            var st9 = null;

            $productBox.on({
                mouseenter:function(){
                    $productBox.removeClass('addHoverDetail');
                    $(this).addClass('addHoverDetail');
                },
                mouseleave:function(){
                    $(this).removeClass('addHoverDetail');
                },
                click:function(event){
                    event.preventDefault();
                    $productBox.removeClass('addHoverDetail');
                    $(this).toggleClass('addHoverDetail');
                }
            });

            $likeBtn.on({
                click:function(event){
                    event.preventDefault();
                    $(this).toggleClass('addLike');
                }
            });
            $productBox.removeClass('addScroll');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top-3000){
                    st0 = setTimeout(function(){
                        $productBox.eq(0).addClass('addScroll');
                    },100);
                    st1 = setTimeout(function(){
                        $productBox.eq(1).addClass('addScroll');
                    },300);
                    st2 = setTimeout(function(){
                        $productBox.eq(2).addClass('addScroll');
                    },500);
                    st3 = setTimeout(function(){
                        $productBox.eq(3).addClass('addScroll');
                    },700);
                    st4 = setTimeout(function(){
                        $productBox.eq(4).addClass('addScroll');
                    },900);
                    st5 = setTimeout(function(){
                        $productBox.eq(5).addClass('addScroll');
                    },1100);
                    st6 = setTimeout(function(){
                        $productBox.eq(6).addClass('addScroll');
                    },1300);
                    st7 = setTimeout(function(){
                        $productBox.eq(7).addClass('addScroll');
                    },1500);
                    st8 = setTimeout(function(){
                        $productBox.eq(8).addClass('addScroll');
                    },1700);
                    st9 = setTimeout(function(){
                        $productBox.eq(9).addClass('addScroll');
                    },1900);

                }
                if($(window).scrollTop() <= 20){
                    $productBox.removeClass('addScroll');
                }
            });

        },
        section4Fn:function(){
            var $win = $(window);
            var $winW = $(window).innerWidth();
            var $slideWrap = $('#section4 .slide-wrap');
            var $slideView = $('#section4 .slide-view');
            var $slide = $('#section4 .slide');
            var cnt = 0;
            var n = $('#section4 .slide').length-7; //3
            var m = $('#section4 .slide').length-4; //6
            var setId = null;
            var setId2 = null;

            function resizeFn(){
                $winW = $(window).innerWidth();
                if($winW < 780){
                    $winW = $(window).innerWidth();
                    $slideWrap.css({width:$winW*10, marginLeft:-$winW*2});
                    $slide.css({width:$winW});
                }
                else{
                    $winW = $(window).innerWidth();
                    $slideWrap.css({width:($winW/2)*10, marginLeft:-($winW/2)*2});
                    $slide.css({width:$winW/2});
                    $slideWrap.stop().animate({left:-$winW*cnt},0);
                }
            }

            setTimeout(resizeFn,100);
            
            $win.resize(function(){
                setTimeout(resizeFn,100);
            });
            
            function mainSlideFn(){
                $winW = $(window).innerWidth();
                if($winW < 780){
                    $slideWrap.stop().animate({left:-$winW*cnt},800,function(){
                        if(cnt>=m){cnt=0}
                        if(cnt<0){cnt=m-1}
                        $slideWrap.stop().animate({left:-$winW*cnt},0);
                    });
                }
                else{
                    $slideWrap.stop().animate({left:-$winW*cnt},800,function(){
                        if(cnt>=n){cnt=0}
                        if(cnt<0){cnt=n-1}
                        $slideWrap.stop().animate({left:-$winW*cnt},0);
                    });
                }
            }

            function nextSlideCountFn(){
                cnt ++;
                mainSlideFn();
            }

            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            }

            $slideView.swipe({
                swipeLeft:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            function autoPlay(){
                setId = setInterval(nextSlideCountFn,4000);
            }

            autoPlay();

            function pauseFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t=0;
                        nextSlideCountFn();
                        autoPlay();
                    }
                },1000);
            }


        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        section7Fn:function(){
            var $winW = $(window).innerWidth();
            var $slideView = $('#section7 .slide-view');
            var $slideWrap = $('#section7 .slide-wrap');
            var cnt = 0;
            var n = $('#section7 .slide').length-16;
            var setId = null;
            var setId2 = null;

            var $instaBtn = $('#section7 .insta-btn');

            $instaBtn.on({
                mouseenter:function(){
                    $instaBtn.removeClass('addBg');
                    $(this).addClass('addBg');
                },
                mouseleave:function(){
                    $instaBtn.removeClass('addBg');
                    $(this).removeClass('addBg');
                },
                click:function(event){
                    event.preventDefault();
                    $instaBtn.removeClass('addBg');
                    $(this).addClass('addBg');
                }
            });

            function resizeFn(){
                $winW = $(window).innerWidth();
            }
            setTimeout(resizeFn,100);
            
            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });

            function snsSlideFn(){
                $winW = $(window).innerWidth();
                if($winW <= 660){
                    $slideWrap.stop().animate({left:(-165*cnt)-15},600, function(){
                        if(cnt>n-1){cnt=0}
                        if(cnt<0){cnt=n-1}
                        $slideWrap.stop().animate({left:(-165*cnt)-15},0)
                    });
                }
                else {
                    $slideWrap.stop().animate({left:(-192.5*cnt)-15},600, function(){
                        if(cnt>n-1){cnt=0}
                        if(cnt<0){cnt=n-1}
                        $slideWrap.stop().animate({left:(-192.5*cnt)-15},0)
                    });
                }
            }

            function nextSlideCountFn(){
                cnt ++;
                snsSlideFn();
            }

            function prevSlideCountFn(){
                cnt--;
                snsSlideFn();
            }

            $slideView.swipe({
                swipeLeft:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            function autoPlay(){
                setId = setInterval(nextSlideCountFn,3000);
            }

            autoPlay();

            function pauseFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++
                    if(t>3){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t = 0;
                        nextSlideCountFn();
                        autoPlay();
                    }
                },1000);
            }

        },
        footerFn:function(){

        },
        pageMoveFn:function(){
            var $goTop = $('#page-move .page-up-btn');
            var $htmlBody = $('html,body');
            $goTop.on({
                click:function(event){
                    event.preventDefault();
                    $htmlBody.stop().animate({scrollTop:0},1000,'easeInOutExpo');
                }
            });
        }
    }
    pofol.init();
})(jQuery);