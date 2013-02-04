$('img,a').bind("contextmenu",function(e){
	return false;
});

$('img,a').bind("mousedown",function(e){
	return false;
});


$('.small_img').hover(function(){
	$(this).find('.desc').css({'opacity':0}).animate({'bottom':0,'opacity':1},400);
},function(){
	$(this).find('.desc').animate({'bottom':-27,'opacity':0},400);
});

$('.team_list').hoverIntent(function(){
	var left = $(this).position().left;
	var top = $(this).position().top;
	var index = $.inArray(this,$('.team_list'));
	$('.team_detail').eq(index).css({'left':left,'top':top}).stop().fadeIn();
	$('#team_overlay').stop().fadeIn();
},300,function(){});

$('.team_detail').mouseleave(function(){
	$('.team_detail').stop().fadeOut(300);
	$('#team_overlay').stop().fadeOut(300);
});

$('#home_slider').cycle({ 
	fx:     'fade',  
	timeout: 3000, 
	speed: 1000,
	width: 655,
	height: 520,
	fit: 1,
	sync: true,
	before: function() {
		title = this.title;
		if($('.home_slider_nav h1').html() == '')
		{
			$('.home_slider_nav h1').html(title);
		}
		else
		{
			$('.home_slider_nav h1').animate({'opacity':0},function(){
				$('.home_slider_nav h1').html(title);
				$('.home_slider_nav h1').animate({'opacity':1},2000);
			});
		}
	},
	
	after: function() {
		
	}

});


$(".career_more a").fancybox({
	type: 'ajax',
	padding: 30,
	openEffect: 'fade',
	closeEffect: 'fade',
	preload: true,
	scrolling: 'auto',
	helpers: {
		title : {
			type : 'outside'
		},
		overlay : {
			speedOut : 0
		}
	}
});

$(".portfolio_gallery a").fancybox({
	padding: 0,
	margin: 80,
	openEffect: 'elastic',
	closeEffect: 'elastic',
	helpers: {
		title : {
			type : 'outside'
		},
		overlay : {
			closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,   // duration of fadeOut animation
			showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
			css        : {background:'url(images/black.png)'}
		},
	}
});
