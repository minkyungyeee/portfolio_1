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

        },
        section1Fn:function(){
            var $win = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $slide = $('#section1 .slide');
            var $sec1 = $('#section1');

            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;
            var n = $('#section1 .slide').length-2;

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
                    nextSlideCountFn();
                }
            });
            $prevBtn.on({
                click:function(){
                    prevSlideCountFn();
                }
            });
            
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){

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