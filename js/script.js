animateItems = function animateItems($items,animationName,callback){

	$items.each(function(i,el) {
	    var $this = $(this);
	    setTimeout(function() {
	    	$this.removeClass('hide');
            $this.addClass(animationName);

            appendTextToCode("$this.addClass(animationName);");

            if( i === $items.length-1 && callback && typeof(callback) === "function"){
            	callback();
            }

		}, i * 200);
	});	
};

arrangeFlowers = function(){
	var $lis = $('.sun .project');
	var $li;
	for (var i=0; i <= $lis.length - 1; i++){
		$li = $($lis[i]);
		var angle = (180/($lis.length-1) * i) * (Math.PI/180) ;
		var x = 80 * Math.cos(angle) + 45;
		var y = 80 * Math.sin(angle) + 50;

		$li.css({
			'bottom': y + 'px', 
			'right' : x + 'px',
			'transform' : 'rotate(' + (180/($lis.length-1) * i) + 'deg)'
		});
	}
}

var $body;

$(document).ready(function(){

});