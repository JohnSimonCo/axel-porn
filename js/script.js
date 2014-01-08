$(".feed-video-title").hover(
  function() {
    alert("hover");
  }, function() {
    alert("nothover");
  }
);

window.addEventListener("scroll",function() { 
   if(window.scrollY < 80) {
   		var margin_cobo = '-' + window.scrollY.toString() + 'px';

   		$('#news-scroll-container').css('margin-top', margin_cobo);
   }
   else {
    	$('#news-scroll-container').css('margin-top', '-80px');
   }
},false);