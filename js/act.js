//  ACT PARALLAX
/* ======================================= v 0.3.1
 @ speed			float		animation speed
 @ transitionTime	float		transition time
   ======================================= */
   function ACTparallax( target, args ){
	target = target || '.A-parallax';
	args   = args   || {}
	
	const defaults = {
		speed			: 4,
		transitionTime	: 1.5,
		units			: 'px',
	}
	let items = {};

	// ------------------------
	init();
	
	// ------------------------
	function init(){
		if ( window.noMobileParallax && $(window).width() <= 640 ) return;
		if ( window.noTabletParallax && $(window).width() <= 900 ) return;
		
		args = $.extend({}, defaults, args);
		if ( ! $( target ).length ) return;
		
		// LOOP through elements
		$( target ).each(function(idx){
			
			let id = 'A-' + $.now() + idx
			$(this).attr('data-parallaxId', id)
			
			// create data object for target
			items[id] = {
				speed : parseFloat( $(this).attr( 'data-speed' ) ) || args.speed,
				transitionTime : parseFloat( $(this).attr( 'data-trans' ) ) || args.transitionTime,
				mode :  $(this).attr( 'data-mode' ) || args.mode,
			}
			
			// initialize element data and transition time
			let classList = $(this).attr('class').split(/\s+/);
			classList.forEach(clss =>{
				if ( clss.substr(0,6) == 'trans-' )
					items[id].transitionTime = parseFloat( clss.split('-')[1] )
				if ( clss.substr(0,6) == 'speed-' )
					items[id].speed = parseFloat( clss.split('-')[1].replace('_', '-') )
				if ( clss.substr(0,6) == 'offset-' )
					items[id].offset = parseInt( clss.split('-')[1].replace('_', '-') )
			})
			
			$(this)
				.css('transition', 'transform ' + items[id].transitionTime + 's ease-out')
				.attr('data-y', $(this).offset().top )
			
		})
		
		// Animate on windows scroll
		//animate();
		$( window ).scroll( animate );
		
	}
	function animate(){
		var wH  = $(window).height();
		var scT = parseInt( $(window).scrollTop() );
		
		// LOOP through elements
		$( target ).each(function(){
			let id = $(this).attr('data-parallaxId');
			
			// get element values
			var element   = $(this);
			var elementH  = element.outerHeight();
			var offsetTop = parseFloat( element.attr( 'data-y' ) );
			
			// Calculate movement
			let CENTER = (offsetTop + (elementH/2)) - (wH/2)
			let MOVE = CENTER - scT;
			MOVE = (MOVE / 10) * (items[id].speed/2);
			
			
			let onScreen = false;
			if ( (wH + scT) > offsetTop  && scT < offsetTop + elementH ) onScreen = true

			// Apply values
			if ( onScreen )
			element.css( 'transform', 'translateY(' + MOVE.toFixed(2) + args.units + ')' );
			
		})
	}
	
}

