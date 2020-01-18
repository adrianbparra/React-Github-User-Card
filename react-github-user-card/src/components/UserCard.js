import React from "react";


class UserCard extends React.Component{
    constructor(props){
        super(props)

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
            </div>
        )
    }
}

export default UserCard;