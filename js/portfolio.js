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
            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;
            var n = $('#section1 .slide').length-2;

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-1903*cnt},600,function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:-1903*cnt},0);
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