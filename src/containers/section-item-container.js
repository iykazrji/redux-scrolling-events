import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UpdateBackgroundColorAction from '../actions/update-background-color-action.js';

import styles from '../styles.js';

export class SectionItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			typoStyle: styles.section__p__inactive
		}
		this.checkVisibility = this.checkVisibility.bind(this);
		this.checkFullVisibility = this.checkFullVisibility.bind(this);
	}
	componentDidMount(){
		setInterval(function(){
			this.checkVisibility();
		}.bind(this), 200)
	}
	checkVisibility(){
		let item = ReactDOM.findDOMNode(this);
		let itemBoundary = item.getBoundingClientRect();
		let top = itemBoundary.top,
			bottom = itemBoundary.bottom,
			height = itemBoundary.height;
		if((top + height >= 0) && ((height/1.5) + window.innerHeight >= bottom)){
			if(!this.state.visible){
				console.log('I am Visible');
				this.setState({
					visible: true,
					typoStyle: styles.section__p__active
				});
				this.props.updateBackgroundColorAction(this.props.background_color); 	
			}	
		}
		else{
			this.setState({
				visible: false,
				typoStyle: styles.section__p__inactive
			})
		}
	}
	checkFullVisibility(){
		let item = ReactDOM.findDOMNode(this);
		let itemBoundary = item.getBoundingClientRect();
		let top = itemBoundary.top,
			bottom = itemBoundary.bottom,
			height = itemBoundary.height;
		if((top >= 0) && (bottom <= window.innerHeight)){
			if(!this.state.visible){
				console.log('I am Fully Visible');
				this.setState({
					visible: true
				});
				this.props.updateBackgroundColorAction(this.props.background_color); 	
			}
		}
		else{
			this.setState({
				visible: false
			})
		}
	}
	render() {
		return (
			<div className="section"
				 style={styles.section}
				 >
				<p style={{...styles.section__p, ...this.state.typoStyle}}>{this.props.background_color}</p>
			</div>
		);
	}
}

SectionItem.propTypes = {
	content_text: React.PropTypes.string,
	background_color: React.PropTypes.string
}
function mapStateToProps(state){
	return {
		scrollPosition: state.scrollPosition,
		windowScrollingState: state.windowScrollingState,
		backgroundColorReducer: state.backgroundColorReducer
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateBackgroundColorAction: UpdateBackgroundColorAction
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionItem);