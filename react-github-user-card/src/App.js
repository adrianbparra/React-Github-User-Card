import React from 'react';
import './App.css';


class App extends React.Component {
  
  constructor(){
    console.log("constructor")
    super()

    

    this.state ={
      //set state of user fetch in api
    }
  }

  componentDidMount(){
    console.log("componentDidMount")
    //get data when its fetched from api
    
  }

  render(){
    console.log("render")
    return (
      <div className="App">
        <h1>Git Hub Users</h1>



      </div>
    );
  }
}

export default App;
