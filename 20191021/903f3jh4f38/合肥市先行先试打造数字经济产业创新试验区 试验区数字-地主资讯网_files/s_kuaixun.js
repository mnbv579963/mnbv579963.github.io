// JavaScript Document
$(function(){
	var s2 = new huandeng('.wrap-bt1 span','.wrap1 li','.wrap-nvatitle1 li','span44','2000','1000');
	var s1 = new huandeng('.wrap-bt span','.wrap li','.wrap-nvatitle li','span44','2000','1000');
	function huandeng(anniu,tupian,biaoti,yanse,time,fdtime){//分别为按钮，图片，标题，按钮滚动颜色,幻灯片的间隔,淡隐淡出的间隔
				var wd = 1;
				var wrbt = $(anniu);
				var len = $(anniu).length;
				var wpli = $(tupian);
				var wptli = $(biaoti);
				wrbt.mouseenter(function(){
				wd = wrbt.index(this);
				myshow(wd);
            }); 
            function myshow(id){
				wrbt.eq(id).addClass(yanse).siblings('span').removeClass(yanse);
				wpli.eq(id).stop(true,true).fadeIn(fdtime).siblings('li').fadeOut(fdtime);
				wptli.eq(id).addClass('dspss').stop(true,true).fadeIn(fdtime).siblings('li').fadeOut(fdtime).removeClass('dspss');
            }
            
            $('.wrap').mouseenter(function(){
            	clearInterval(timeint);
            }).mouseleave(function(){
				timeint = setInterval(function(){
				myshow(wd);
				wd++;
				if(wd>len-1){
				 wd = 0;
				}
				},time);
				});
				var timeint = setInterval(function(){
				myshow(wd);
				wd++;
				if(wd>len-1){
				wd = 0;
				}
            },time);
	}
});
			
			
       	$(function(){
			var lt1 = $('.left1').height();
			var lt2 = $('.left2');
			$(window).scroll(function(){
				var het = $(this).scrollTop();
				if(het >lt1){
					var rt = setInterval(xianshi,1000);
				}
				function xianshi(){
					lt2.fadeIn(1000).css('display','block');
				}	
					
			});
			
		});
       	
    
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>

<script language="javascript" src="/ad.js"></script>