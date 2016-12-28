import React from 'react'
import Header from './header'
import './index.css'
import Random from './random-search'



const Home = React.createClass({
  //setting intial state
  getInitialState: function(){
    return {userInput: "", recipe: [],title:'',image:null,name:[],amount:[], instruction: '',showSomething: false}
  },
  inputChange: function(event){
    //need to set state to change when input is changing 
    this.setState({userInput: event.target.value})
   // console.log(this.state)
  },
  random: function(){
    //Need to set headers and pass in the API key:
  //Mashape key: "X-Mashape-Key", "EBA7z84cyrmshLChqN6fyOZ5OBBup1Dd8FojsnT7ouOM8MQGas"
  var that = this;
  $.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1", // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    beforeSend: function(xhr){xhr.setRequestHeader("X-Mashape-Authorization", "EBA7z84cyrmshLChqN6fyOZ5OBBup1Dd8FojsnT7ouOM8MQGas")},
    success: function(data) {
      that.setState({title: data.recipes[0].title , image: data.recipes[0].image , instruction: data.recipes[0].instructions, showSomething: true})
      console.log(data)
      var names=[];
      names = data.recipes[0].extendedIngredients.map((a)=> a.name)
      console.log(names)
      var amounts=[];
      amounts= data.recipes[0].extendedIngredients.map((a)=> a.amount)
      that.setState({'amount' : that.state.amount.concat(amounts)})
      that.setState({'name' : that.state.name.concat(names)})
      console.log('ingredients',that.state.name)
     
    },
    error: function(err) { alert(err); }   
  });
 },

  render: function(){
    //neeed to fix value + onchange from input, and onclick
    var hiddenDiv = (<div className='show'>
          <div className='title'>
            <h2 className='title'>{this.state.title}</h2>
          </div>

          <div className='pic'>
            <img className='pic'src={this.state.image} /> 
          </div>
    
          <div className='ingredients'>
            <h5>Ingridients:</h5>
            <ul>
            {this.state.name.map((a,i)=>(<li key={i}>{this.state.amount[i]+" lb " + a}</li>))}
            </ul>
          </div>

          <div className='instructions'>
            <p>{this.state.instruction}</p>
          </div>
        </div>);
    return (
      <center>
      <div className="main">
        <div className='info'>
          <div className='title'>
           	<h1 className='h1'>Recipe search</h1>
             <p className='p1'>Feeling adventurous? <br/>search for a random recipe!!!</p>
          </div>
          <div className='random'>
    	      
    	       <button type="button" class="btn btn-success" onClick={this.random}>Random Search</button>
          </div>
        </div>
        {this.state.showSomething ?hiddenDiv :null}
      </div>
      </center>
    )
  }
})

export default Home;