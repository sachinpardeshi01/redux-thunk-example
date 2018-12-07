import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  async componentDidMount(){
    try{
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
    }catch(err){
      console.log("dsds",err);
    }
  }

  render() {
    return (
      <div className="App">
      {this.state.data.map(el => (<li>{el.name}: {el.price_usd}</li>))}
      </div>
    );
  }
}

export default App;
