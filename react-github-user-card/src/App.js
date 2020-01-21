import React from 'react';
import './App.css';
// import {userApi} from './api/userApi';
import UserCard from './components/UserCard';

import {Card} from "@material-ui/core";
import { withStyles,fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Box";

const useStyles = theme => ({
  grow : {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  title: {
    flexGrow: 1,
    overflow: 'visible',
    display: 'none',
    justifySelf: "left",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  card: {
    width: "auto",
    padding: 48,
    backgroundColor: theme.palette.common.white,

  }
});


class App extends React.Component {
  
  constructor(props){
    console.log("constructor")
    super(props)

    

    this.state ={
      //set state of user fetch in api
      userName: 
        "adrianbparra"
      ,
      users : [

      ],
      followers : {
        
      }
    }
  }

  

  componentDidMount(){
    console.log("componentDidMount", this)


    this.userApiRequest(this.state.userName)
    // this.followerRequest("adrianbparra")

    
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



  render(){
    
    const {classes} = this.props;
    
    console.log("render userLength", this.state.users.length)
    return (
      <main className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
            Git Hub Users Search
            </Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <GitHubIcon />
            </div>
              <InputBase 
                placeholder="User Name"
                inputProps = {{"aria-label": "search"}}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Button variant="contained" color="primary">Search</Button>
          </Toolbar>
        </AppBar>
        <Grid className={classes.card} container spacing={2}>
          
          {this.state.users.length < 1 ? <h1>Loading...</h1> : this.state.users.map(user => {
            return <UserCard key = {user.id} user = {user} />
          })}
          {console.log(this.state.users)}
        </Grid>
      </main>
    );
  }
}

export default withStyles(useStyles)(App);
