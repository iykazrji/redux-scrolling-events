const styles = {
	sectionsWrapper:{
		height: 'auto',
		margin: '0px',
		width: '100%',
		transition: 'all 0.25s ease-in'
	},
	section:{
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFFFFF',
	},
	section__p:{
		fontSize: '80px',
		fontWeight: '900',
		transition: 'all 1.3s ease-in',
	},
	section__p__active:{
		opacity: '1',
		transform: 'translateY(0px)'
	},
	section__p__inactive:{
		transform: 'translateY(150px)',
		opacity: '0.2'	
	}
}

export default styles;