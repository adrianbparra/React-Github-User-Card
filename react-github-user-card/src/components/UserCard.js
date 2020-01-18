import React from "react";
import FollowerCard from "./FollowerCard"

class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            followers : []
        }
    }

    componentDidMount(){

        this.props.user.name && this.followerRequest(this.props.user.login)

    }


    followerRequest = (user) => {
        fetch(`https://api.github.com/users/${user}/followers`)
        .then(res => {
            return res.json().then(data => {
            console.log("follower Data:" ,data)
            return this.setState({
                ...this.state,
                followers : [
                    ...data
                ]
            })
            })
        })
    }

    render(){
        console.log("UserCard:",this.props)
        return(

            <div>
                <img src={this.props.user.avatar_url} alt={this.props.user.name}/>
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.login}</p>
                <p>{this.props.user.location}</p>
                <span>Followers: {this.props.user.followers}</span><br/>
                <span>Following: {this.props.user.following}</span>

                {this.state.followers.length < 1 ? <div>Loading...</div> : this.state.followers.map(follower =><FollowerCard follower={follower}/>)}
            </div>
        )
    }
}

export default UserCard;