
var number = 1; 

$(document).ready(function () {
    var $newdiv;
    

	var h = prompt("Enter the height: ");
	var w = prompt("Enter the width: ");
    makeBoard(h, w); 
    
    
    $('#button').on("click", function() {
    	$('.ball').css("background", "white"); 
    }); 
    
    $('#button2').on("click", function() {
    	$('#container').empty(); 
    	 var x = prompt("Enter the height: ");
	var y = prompt("Enter the width: "); 

    makeBoard(x, y); 
    }); 
    
     
});


//The following function makes the board
//I learned that in order for an on() function to work on an object
//it has to be in the function that the object is created. 
function makeBoard(height, width){
	var newHeight = 34* height;  
	var newWidth = 34 * width; 
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
    
    $('.ball').on("mouseover", function() {
    	var $c= findColor(number); 
    	
    	 $(this).css("background", $c);
  
		number = newNumber(number); 
    }); 
}

//The following code returns the new color of the background
function findColor(x) {
	if(x == 1) 
		return "black"; 
	//else if (x == 2) 
	//	return "white"; 
	//else (x == 3)
	//	return "blue"; 
}

//The following code returns the new number
//The commented out code is supposed to be used to make different colors
function newNumber(x) {
	if(x == 1) 
		return 1; 
	//else if (x == 2) 
	//	return 1; 
	//else (x == 3)
	//	return 1; 
}