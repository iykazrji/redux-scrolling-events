import { combineReducers } from 'redux';
import ScrollPosition from './scroll-position-reducer.js';
import WindowScrollingState from './window-scrolling-state-reducer.js';
import BackgroundColorReducer from './background-color-reducer.js';

const rootReducer = combineReducers({
	scrollPosition: ScrollPosition,
	windowScrollingState: WindowScrollingState,
	backgroundColorReducer: BackgroundColorReducer
});

export default rootReducer;