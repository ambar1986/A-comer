import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
	render(){
		return(
			<center>
			<div className='header'>
				<div className='head'>
					<h1>A Comer</h1>
				</div>

				<h3>From your kitchen to your table</h3>
			</div>
			</center>
		)
	}
})

export default Header