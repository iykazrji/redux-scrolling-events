import actionTypes from './action-types.js';

const PerformScrollAction = function(){
	let scrollTop = (window.pageYOffset !== undefined) ? 
							window.pageYOffset : 
							(document.documentElement || document.body.parentNode || document.body).scrollTop;

	let action = {
		type: actionTypes.WINDOW_SCROLLING,
		payload: true,
		position: scrollTop
	}
	return action;
}

export default PerformScrollAction;