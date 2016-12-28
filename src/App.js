import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Home from './home';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Random from './random-search';

//import Search from './search';

var App = React.createClass({
	getInitialState(){
		return{recipe:{}}
	},
  render: function() {
    return (
    	<div className='app'>
	    	<Header/>
	    	{
	    	//this.props.that.setState({})
	    	}
	    	{React.cloneElement(this.props.children, {
	    		that:this
	    	})}
    	</div>
    )
  }
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>,
  document.getElementById('root')
);
			// <Route path='random' component={Random} />
			//<Route path='./search' component={Search}/>
