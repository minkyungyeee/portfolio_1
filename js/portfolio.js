;(function($){
    var pofol = {
        init:function(){
            var that = this;
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.section6Fn();
                that.section7Fn();
        },
        headerFn:function(){
            var $navArea = $('#nav > ul > li');
            var $mainBtn = $('#nav .main-btn');
            var $subBtn = $('#nav .sub-btn');
            var $sub = $('#nav .sub');
            var $subSub = $('#nav .sub-sub');
            var $asideBtn = $('#aside .aside-btn');
            var $asideSub = $('#aside .aside-sub');

            $mainBtn.on({
                mouseenter:function(){
                    $(this).stop().next().show();
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
                    $(this).stop().next().show();
                }
            });
            $asideSub.on({
                mouseleave:function(){
                    $(this).stop().hide();
                }
            })
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
                $slide.css({width:$winW, height:$winH});
                $sec1.css({width:$winW, height:$winH});
                $slideWrap.stop().animate({left:-1903*cnt},0);
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


        },
        section3Fn:function(){
            var $productBox = $('#section3 .product-box');

            $productBox.on({
                mouseenter:function(){
                    $productBox.removeClass('addHoverDetail');
                    $(this).addClass('addHoverDetail');
                }
            });
            $productBox.on({
                mouseleave:function(){
                    $(this).removeClass('addHoverDetail');
                }
            })

        },
        section4Fn:function(){
            var $win = $(window);
            var $winW = $(window).innerWidth();
            var $slideWrap = $('#section4 .slide-wrap');
            var $slideView = $('#section4 .slide-view');
            var cnt = 0;
            var n = $('#section4 .slide').length-7; //6
            var setId = null;
            var setId2 = null;

            // function resizeFn(){
            //     $winW = $(window).width();
            //     $slide.css({width:$winW/2,});
            //     $slideWrap.stop().animate({left:-1903*cnt},0);
            // }

            // setTimeout(resizeFn,100);
            
            // $win.resize(function(){
            //     setTimeout(resizeFn,100);
            // });

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-1903*cnt},600,function(){
                    if(cnt>=n){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:-1903*cnt},0)
                });
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

        },
        footerFn:function(){

        }
    }
    pofol.init();
})(jQuery);