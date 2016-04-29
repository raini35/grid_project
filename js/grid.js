$(document).ready(function () {
    var $newdiv;
    for (var i = 1; i <= 100; i++) {
 		if ((i % 10)==0 ) {
       		$newdiv = $('<div class="balls"/><br>').text(i);
        	$('body').append($newdiv);
    	} 
    	else {
     		$newdiv = $('<div class="ball"/>').text(i);
        	$('body').append($newdiv);
    	}
    }
});

