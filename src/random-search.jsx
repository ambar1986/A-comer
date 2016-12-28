import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'


const Random = React.createClass({
	render(){
		console.log(this.props.that.state.recipe.recipes)
		console.log('working?')
		return (
			<div>
				<div className='content'>
					{this.props.that.state.recipe}
					

				</div>
			</div>
		)
	}
})

export default Random;