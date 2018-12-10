import React, { Component } from 'react';

//Axios
import axios from "axios";

//Components
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";
import Footer from "./components/Footer/Footer";

import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  componentDidMount(){
    // Async-await example
    // try{
    // const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);   

    // const json = await response.json();

    // this.setState({ data: json });
    // }catch(err){
    //   console.log("dsds",err);
    // }
  }

  render() {

    return (
      <div className="App">
    <Header/>
    <MainLayout/>
    <Footer/>
      </div>
    );
  }
}

export default App;
