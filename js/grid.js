var height = prompt("Enter the height: ");
var width = prompt("Enter the width: "); 

/*$(document).ready(function() {
var &newdiv; 
for (var h = 1; h<= height; h++) {
	for( var w = 1; w <= width; w++) {
		if(w % root == 0)( {
			$newdiv = $('<div class="balls"/><br>').text(i);
        	$('body').append($newdiv);
		}
		else 
		{
			$newdiv = $('<div class="ball"/>').text(i);
        	$('body').append($newdiv);
		}
	}
}); 
*/

$(document).ready(function () {
    var $newdiv;
    for (var w = 1; w <=height; w++) {
    for (var i = 1; i <= width; i++) {
 		if ((i % width)==0 ) {
       		$newdiv = $('<div class="balls"/><br>');
        	$('body').append($newdiv);
    	} 
    	else {
			$newdiv = $('<div class="ball"/>');
        	$('body').append($newdiv);
    	}
    }
    }
});

/* 
There will be two inputs 

for loop for the height 
and a while loop for the width 


*/