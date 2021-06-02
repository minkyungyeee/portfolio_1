;(function($){
    var pofol = {
        btn:0,
        n:0,
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
                    $('#page-move').removeClass('addTop');
                    $('#wrap').removeClass('addStop');
                    
                    if($winW > 980){
                        $logo.attr('src','./new_img/logo-white.png');
                    }
                    else{
                        $logo.attr('src','./new_img/logo-color.png');
                    }
                }
                else{
                    if(result == 'up'){     //스크롤을 올리는중 (흰색배경으로 보여야함)
                        if(that.btn == 1 && that.n == 1){  //모바일버튼이 눌렸을때
                            $('#header').removeClass('addHide');
                            $('#header').removeClass('addBlack');
                            $('#header').addClass('addShow');
                            $('#wrap').addClass('addStop');
                        }
                        else if(that.btn == 0 && that.n == 1){
                            $('#header').addClass('addBlack')
                            $('#header').removeClass('addHide');
                            $('#header').addClass('addShow');
                            $('#wrap').removeClass('addStop');
                            $logo.attr('src','./new_img/logo-black.png');
                            $('#page-move').removeClass('addTop');
                        }
                        else if(that.btn == 0 && that.n == 0) {
                            $('#header').addClass('addBlack')
                            $('#header').removeClass('addHide');
                            $('#header').addClass('addShow');
                            $logo.attr('src','./new_img/logo-black.png');
                            $('#page-move').addClass('addTop');
                            $('#wrap').removeClass('addStop');
                        }
                    }
                    if(result == 'down'){   //스크롤을 내리는중 (안보여야함)
                        if(that.btn == 1 && that.n == 1){
                            $('#header').removeClass('addShow');
                            $('#header').removeClass('addBlack');
                            $('#header').removeClass('addHide');
                            $('#wrap').addClass('addStop');
                        }
                        else if(that.btn == 0 && that.n == 1){
                            $('#header').removeClass('addShow');
                            $('#header').removeClass('addBlack');
                            $('#header').addClass('addHide');
                            $('#wrap').removeClass('addStop');
                            $('#page-move').removeClass('addTop');
                        }
                        else if(that.btn == 0 && that.n == 0) {
                            $('#header').removeClass('addShow');
                            $('#header').removeClass('addBlack');
                            $('#header').addClass('addHide');
                            $('#page-move').addClass('addTop');
                            $('#wrap').removeClass('addStop');
                        }
                    }

                }

                scrollPrev = scrollNew;
            });

        },
        popUpFn:function(){
            var $win = $(window);
            var $winH = $(window).innerHeight();
            var $pop = $('#modal');
            var $box = $('#modal .container')
            var $close = $('#modal .close');
            var $checkBox = $('#modal .check-box');

            function resize(){
                $winH = $(window).innerHeight();
                $pop.css({height:$winH});
                
            }
            resize();
            setTimeout(resize,100);

            $win.resize(function(){
                setTimeout(resize,100);
            });
            
            $(document).ready(function(){
                $pop.addClass('addOpen');
                $('#wrap').addClass('addModal');
            });
            $pop.on({
                click:function(){
                    $(this).removeClass('addOpen');
                    $('#wrap').removeClass('addModal');
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
                    $('#wrap').removeClass('addModal');
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
            var click = true;

            //왜 깨끗하지 

            function pcOptionFn(){
                $nav.css({display:'inline-block'});
                $logo.attr('src','./new_img/logo-white.png');

                $sub.css({display:'none',height:'auto'});
                $subSub.css({display:'none'});
                $nav.css({display:'inline-block'});
                $bar.removeClass('addMobile');

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
                //$nav.stop().slideUp(0);
                $nav.css({display:'none'});
                $sub.css({hieght:'auto'})

                $mainBtn.off('mouseenter');
                $navArea.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSub.off('mouseleave');
                $asideBtn.off('mouseenter');
                $asideSub.off('mouseleave');

                $logo.attr('src','./new_img/logo-color.png');

                $mainBtn.on({
                    click:function(event){
                        event.preventDefault();
                        if(click === true){
                            click = false;
                            $sub.css({height:'auto'});
                            $sub.stop().slideUp();
                            $subSub.stop().slideUp();

                            $(this).next().stop().slideToggle(300);

                            setTimeout(function(){
                                click = true;
                            },500)
                        }
                    }
                });

                $subBtn.on({
                    click:function(event){
                        event.preventDefault();
                        if(click === true){
                            click = false;
                            $sub.css({height:'auto'});
                            $subSub.stop().slideUp();
                            $(this).next().stop().slideToggle(300);

                            setTimeout(function(){
                                click = true;
                            },500)
                        }
                    }
                });
            }

            function pcMobileFn(){
                if($win.innerWidth() > 980 ){
                    pc = 1;
                    mobile = 0;
                    pcOptionFn();
                    that.btn = 0;
                    that.n = 0;
                }
                else {
                    pc = 0;
                    mobile = 1;
                    mobileOptionFn();
                    that.n = 1;
                }
            }
            setTimeout(pcMobileFn,100);

            $win.resize(function(){
                pcMobileFn();
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
            resizeFn();
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

            $conLi.removeClass('addScroll');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top-800){
                    var ms = 200;
                    $conLi.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx)
                    })
                }
                else if($(window).scrollTop() <= 10){
                    $conLi.each(function(idx){
                        if($conLi.eq(idx).hasClass('addScroll')==true){
                            $conLi.removeClass('addScroll');
                        }
                    });
                }
            });

        },
        section3Fn:function(){
            var $productBox = $('#section3 .product-box');
            var $likeBtn = $('#section3 .like-btn');

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

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top-700){
                    //console.log($('#section3').offset().top);
                    var ms = 100;
                    $productBox.each(function(idx){
                        var that = $(this)
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx);
                    });
                }
                else if($(window).scrollTop() <= 10){
                    //$productBox.removeClass('addScroll');
                    $productBox.each(function(idx){
                        if($productBox.eq(idx).hasClass('addScroll')==true){
                            $productBox.removeClass('addScroll');
                        }
                    });
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
            resizeFn();
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
            var $blogBox = $('#section5 .blog-box');

            $blogBox.removeClass('addScroll');

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top-700){
                    //console.log($('#section5').offset().top);
                    var ms = 100;
                        $blogBox.each(function(idx){
                            var that = $(this)
                            setTimeout(function(){
                                that.addClass('addScroll');
                            },ms*idx);
                        });
                }
                else if($(window).scrollTop() <= 10){
                    $blogBox.each(function(idx){
                        if($blogBox.eq(idx).hasClass('addScroll')==true){
                            $blogBox.removeClass('addScroll');
                        }
                    });
                }
            });

        },
        section6Fn:function(){
            var $logo = $('#section6 .client-log');

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section6').offset().top-800){
                    //console.log($('#section6').offset().top);
                    var ms = 100;
                    $logo.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx);
                    });
                }
                else if($(window).scrollTop() <= 10){
                    $logo.each(function(idx){
                        if($logo.eq(idx).hasClass('addScroll')==true){
                            $logo.removeClass('addScroll');
                        }
                    });
                }
            });
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