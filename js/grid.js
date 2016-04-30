var height = prompt("Enter the height: ");
var width = prompt("Enter the width: "); 
var newHeight = 34* height;  
var newWidth = 34 * width; 
var number = 1; 

$(document).ready(function () {
    var $newdiv;
    
    makeBoard(); 
    
    $('.ball').on("mouseover", function() {
    	var $c= findColor(number); 
    	
    	 $(this).css("background", $c);
  
		number = newNumber(number); 
    }); 
    
    $('#button').on("click", function() {
    	$('.ball').css("background", "white"); 
    }); 
    
    $('#button2').on("click", function() {
    	makeBoard(); 
    }); 
    
    
});

function makeBoard(){
$('#container').width(newWidth).height(newHeight); 
    
    for (var w = 1; w <=height; w++) {
    	for (var i = 1; i <= width; i++) {
 			if ((i % width)==0 ) {
       			$newdiv = $('<div class="ball"/><br>');
        		$('#container').append($newdiv);
    		}	 
    		else {
				$newdiv = $('<div class="ball"=/>');
        		$('#container').append($newdiv);
    		}
    	}
    }
}
function findColor(x) {
	if(x == 1) 
		return "black"; 
	//else if (x == 2) 
	//	return "white"; 
	//else (x == 3)
	//	return "blue"; 
}

function newNumber(x) {
	if(x == 1) 
		return 1; 
	//else if (x == 2) 
	//	return 1; 
	//else (x == 3)
	//	return 1; 
}