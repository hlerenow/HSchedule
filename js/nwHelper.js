function drag(win,nav){
		var $win = $(window);
		var $nav = $(nav);
		var dragging = false
		var mouse_x, mouse_y;
		var win_x, win_y;
		$nav.on('mousedown', function(e){
		  e = e.originalEvent || e;
		  dragging = true
		  mouse_x = e.screenX
		  mouse_y = e.screenY
		  win_x = win.x
		  win_y = win.y
		});

		$win.on('mousemove', function(e){
		  if (!dragging) return
		  win.x = win_x + (e.screenX - mouse_x)
		  win.y = win_y + (e.screenY - mouse_y)
		});

		$win.on('mouseup', function(){
		  dragging = false;
		});
}

function nwAppInit(){
	$(window).on('dragover', function(e) {
		e.preventDefault();
		e.originalEvent.dataTransfer.dropEffect = 'none';
	});

	$(window).on('drop', function(e) {
		e.preventDefault();
	});

	$(document).on('dragstart', 'a', function(e) {
		e.preventDefault();
	});
}