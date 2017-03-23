import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ScrollPosition from '../reducers/scroll-position-reducer.js';
import WindowScrollingState from '../reducers/window-scrolling-state-reducer.js';

import PerformScrollAction from '../actions/scroll-action.js';
import StopScrollAction from '../actions/stop-scroll-action.js';
import UpdateScrollPositon from '../actions/update-scroll-position-action.js';

import styles from '../styles.js';
export class SectionsWrapper extends Component {
	
	constructor(props){
		super(props);
		this.props.stopScrollAction();
	}
	componentDidMount(){
		let timer = null;
	    window.addEventListener('scroll', function(){
	    	if(timer !== null){
        		clearTimeout(timer);
        		this.props.performScrollAction();
    		}
	     	timer = setTimeout(function(){
	        if(this.props.windowScrollingState){
	          this.props.stopScrollAction(); 
	        }
	      }.bind(this), 200);
	    }.bind(this));
	}
	render() {
		let bgStyle = {}
		if(this.props.backgroundColor){
			bgStyle = {
				backgroundColor: this.props.backgroundColor
			}	
		}
		return (
			<div className="main-sections-wrapper"
				 style={{...styles.sectionsWrapper, ...bgStyle}}>
				{this.props.children}
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		scrollPosition: state.scrollPosition,
		windowScrollingState: state.windowScrollingState,
		backgroundColor: state.backgroundColorReducer
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		performScrollAction: PerformScrollAction,
		stopScrollAction: StopScrollAction,
		updateScrollPositon: UpdateScrollPositon
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsWrapper);

