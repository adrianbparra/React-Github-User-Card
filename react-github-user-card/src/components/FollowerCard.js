import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";



class FollowerCard extends React.Component{
 


    componentDidMount(){
        
    }




    render(){
        console.log("followerCard:", this.props.follower)
        return(
            <Grid item xs={12} sm={6} md={4}>
                <Avatar alt={this.props.follower.login} src={this.props.follower.avatar_url} />
                <p>{this.props.follower.login}</p>
            </Grid>
        )
    }
}


export default FollowerCard