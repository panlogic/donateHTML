jQuery(document).ready(function() {
		
		var vp = $('.media-test').width();
		
    var $gallery_container = $('#causes').parent();
    var cached_html = $gallery_container.html();
		
		function gallery (center) {			
	
				// Institution gallery
				$('#gallery').royalSlider({
						controlNavigation: 'none',
						controlsInside: false,
						autoScaleSlider: false,
						addActiveClass: true,
						arrowsNavHideOnTouch: false,
						arrowsNavAutoHide: false,
						loop: true,
						keyboardNavEnabled: true,
						visibleNearby: {
								enabled: true,
								centerArea: center,
								center: true,
								navigateByCenterClick: true
						}
				});	
	
				// Institution gallery
				$('#causes').royalSlider({
						controlNavigation: 'none',
						controlsInside: false,
						autoScaleSlider: false,
						addActiveClass: true,
						arrowsNavHideOnTouch: false,
						arrowsNavAutoHide: false,
						loop: true,
						keyboardNavEnabled: true
				});
				
		}
		
		// Cause image gallery
		$('#cause-images').royalSlider({
				keyboardNavEnabled: true,
				imageScaleMode: 'fill',
				autoPlay: {
						enabled: true,
						delay: 4000
				},
				addActiveClass: true,
				loop: true,
				autoScaleSlider: true,
				autoScaleSliderWidth: 630,
				autoScaleSliderHeight: 419
		});
    
    function gallery_exists(gallery) {
            var exists = false;
            if (gallery.data('royalSlider')) {
                exists = true;
            }
            return exists;
    }

    function destroy_gallery() {
        $('#causes').data('royalSlider').destroy(true);
        $gallery_container.html(cached_html);
    }

		function desktop() {
			
				gallery(0.325);
				//fix_footer();
				
    }
		function tablet() {
				
				gallery(0.325);	
				
    }
		function mobile() {
					
        
				
    }
		
		if (vp >= 300) {
        desktop();
    } else if (vp <= 100) {
				mobile();
		} else {
				tablet();
		}
		
		function check_difference(a, b) { return Math.abs(a - b) } 
		
		function check_window_size() {
        var new_vp = $('.media-test').width();
				var x = check_difference(new_vp, vp);			
				
				if (x == 100) {
						if (new_vp == 300) {
								//$("#size").text('300 - ' + x + ' ' + vp + ' ' + new_vp);
								desktop();
                //console.log(300);
						}
						if (new_vp == 200) {
								//$("#size").text('200 - ' + x + ' ' + vp + ' ' + new_vp);
								tablet();
                //console.log(200);
						}
						if (new_vp == 100) {
								//$("#size").text('100 - ' + x + ' ' + vp + ' ' + new_vp);
								mobile();
                if (gallery_exists($('#causes'))) {
                      destroy_gallery();          
                }
                //console.log(100);
						}
						
						vp = new_vp;
				}
				
		};

    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(check_window_size, 100);
    });
		
});



