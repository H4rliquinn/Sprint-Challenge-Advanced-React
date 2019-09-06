import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList.js';
import Chart from './components/Chart.js';

class App extends   Component{
  constructor(){
    super();
    this.state={
      data:[]
    }; 
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res=>{
      // console.log(res.data);
      this.setState=this.setState({data:res.data})
    })
    .catch(err=>{
      console.log(err);
    });
  }

  render(){
    return (
    <div className="App">
      <h1>Women's World Cup Players</h1>
      <Chart data={this.state.data}/>
      <CardList data={this.state.data}/>
    </div>
    );
  }
}

export default App;
