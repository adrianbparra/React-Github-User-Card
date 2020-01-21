import React from "react";
import FollowerCard from "./FollowerCard";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

import { Box } from "@material-ui/core";

const useStyles = theme => ({
    root: {
        padding : theme.spacing(2),
        
    },
    userCard : {
        textAlign: "center",
    
      },
    
})

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
        const {classes} = this.props;
        console.log("UserCard:",this.props)
        return(

            <Paper elevation={3} className={classes.root}>
                <div className={classes.userCard}>
                    <h2>{this.props.user.login}</h2>
                    <img src={this.props.user.avatar_url} alt={this.props.user.name}/>
                    <h3>{this.props.user.name}</h3>
                    
                    <p>{this.props.user.location}</p>
                    <span>Followers: {this.props.user.followers}</span><br/>
                    <span>Following: {this.props.user.following}</span>
                </div>
                <Grid container spacing={3} sx={12}
                >
                    {this.state.followers.length < 1 ? <div>Loading...</div> : this.state.followers.map(follower =><FollowerCard follower={follower}/>)}
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(useStyles)(UserCard);