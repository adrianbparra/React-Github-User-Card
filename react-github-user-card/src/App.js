import React from 'react';
import './App.css';
// import {userApi} from './api/userApi';
import UserCard from './components/UserCard';

class App extends React.Component {
  
  constructor(){
    console.log("constructor")
    super()


    this.state ={
      //set state of user fetch in api
      userName: [
        "adrianbparra"
      ],
      users : [

      ],
      followers : {
        
      }
    }
  }

  componentDidMount(){
    console.log("componentDidMount", this)

    console.log(this.state.users)


    this.userApiRequest("adrianbparra")
    this.followerRequest("adrianbparra")

  }

  


  userApiRequest = (user) =>{
    fetch(`https://api.github.com/users/${user}`)
        .then(res => {
            console.log(res);

            return res.json().then(data => {
                console.log(data)
                return this.setState({
                  ...this.state,
                  users : [...this.state.users,
                    data
                  ]
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
        
}
  followerRequest = (user) => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        return res.json().then(data => {
          console.log("follower Data:" ,data)
          return this.setState({
            ...this.state,
            followers : {
              ...this.state.followers,
              user: [data]}
          })
        })
      })
  }


  render(){
    
    console.log("render userLength", this.state.users.length)
    return (
      <div className="App">
        <h1>Git Hub Users</h1>
        {this.state.users.length < 1 ? <h1>Loading</h1> : this.state.users.map(user => {
          return <UserCard key = {user.id} user = {user} />
        })}
        {console.log(this.state.users)}
      </div>
    );
  }
}

export default App;
