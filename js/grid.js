$(document).ready(function () {
    var $newdiv;
    for (var i = 0; i < 100; i++) {
    	var limit = 
        $newdiv = $('<div class="ball" />').text(i);
        $('body').append($newdiv);
    }
});