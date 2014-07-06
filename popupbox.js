$(document).ready(function(){
    var $box = $("ul.gridList li"),
	$overlay = $(".popupOverlay"),
	$window = $(window);
	
	
    $box.click(function() {
    		var $this = $(this);
		$(".popupOverlay").remove();
		
		var pos = $this.position(),
            width = $this.width(),
            imgSrc = $this.find("img").attr("src"),
			margin = 10,
			leftPos = Number(pos.left) + Number(margin),
			topPos = Number(pos.top) + Number(margin),
            popupImg = '<div class="popupOverlay"><div class="popup"><img src="'+imgSrc+'" /></div></div>',
			centre = ($window.width() - (width * 2)) / 2,
			$scrollTop = $(document).scrollTop(),
			$scrollLeft = $(document).scrollLeft(),
			$listIndex = $this.index() + 1,
			countElements = $box.length;
       
	    $("#pageWrapper").append(popupImg);
		
		$(".popup").click(function(event){
			var nextElm = $box.eq($listIndex).position(),
				nextImg = $box.eq($listIndex).find("img").attr("src");
				console.log(nextImg);
			event.stopPropagation();
			if($listIndex + 1 < countElements) 
			{
				$listIndex++;
			}
			else
			{
				$listIndex = 0;
			}
			$this.find("img").attr("src", nextImg);
			topPos = nextElm.top + Number(margin),
			leftPos = nextElm.left + Number(margin);
			
			
			
		});
		
		$(window).scroll(function(){
			$scrollTop = $(document).scrollTop(),
			$scrollLeft = $(document).scrollLeft();
			console.log("Top: "+$scrollTop+" | Left: "+$scrollLeft);
		});
		
		$(".popupOverlay").click(function(){
		   
		   $(".popup").animate({
				"left" : leftPos - $scrollLeft,
				"top" : topPos - $scrollTop,
				"width" : width
		   }, function(){
				$(".popupOverlay").fadeOut(100);
			   }
		   );
		});
        
		$(".popup").css({
				"left" : leftPos,
				"top" : topPos - $scrollTop,
				"width" : width});
				
		$(".popupOverlay").fadeIn();
			
			$(".popup").animate({
					"left" : centre,
					"top" : "10%",
					"width" : width * 2
			});	
			
		
		
		
    });
	
	
});
