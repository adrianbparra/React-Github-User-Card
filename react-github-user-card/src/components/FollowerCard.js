import React from "react";

class FollowerCard extends React.Component{
 


    componentDidMount(){
        
    }




    render(){
        console.log("followerCard:", this.props.follower)
        return(
            <div>
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}


export default FollowerCard