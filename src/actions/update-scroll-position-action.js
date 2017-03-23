const UpdateScrollPosition = function(){
	let scrollTop = (window.pageYOffset !== undefined) ? 
							window.pageYOffset : 
							(document.documentElement || document.body.parentNode || document.body).scrollTop;
	return {
		type: actionTypes.UPDATE_SCROLL_POSITION,
		payload: scrollTop
	}
}