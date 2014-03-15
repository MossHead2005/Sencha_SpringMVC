$(document).ready(function () {
	
	$("#page-menu").click(function(){
		var mainEl = $("#tow-container");
		var slideNav = $(".nav-list");
		console.log(mainEl);
		if (mainEl.hasClass('in')) {
			mainEl.removeClass('in').addClass('out'); 
			slideNav.removeClass('nav-hide').addClass('nav-show'); 
		} else {
			mainEl.removeClass('out').addClass('in');  
			slideNav.removeClass('nav-show').addClass('nav-hide'); 
		}
	});
	
});

