import actionTypes from './action-types.js';

const StopScrollAction = function(){
	let scrollTop = (window.pageYOffset !== undefined) ? 
							window.pageYOffset : 
							(document.documentElement || document.body.parentNode || document.body).scrollTop;

	let action = {
		type: actionTypes.WINDOW_NOT_SCROLLING,
		payload: false,
		position: scrollTop
	}
	return action;
}

export default StopScrollAction;