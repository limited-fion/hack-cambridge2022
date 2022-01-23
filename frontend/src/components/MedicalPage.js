import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { render } from "react-dom";
import HomePage from "./HomePage";


export default class MedicalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Code: [],
      Created_at: [],
      Tag: [],
      Content: []
    };
    this.getPostTag = this.getPostTag.bind(this);
    this.createTable = this.createTable.bind(this);
    //this.getPostTag();
    }
    getPostTag() {
      return fetch("/api/get-tag" + "?tag=" + "medical")
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        for (let i=0;i<data.length;i++){
          this.setState({
            Code: this.state.Code.concat(data[i].code),
            Created_at: this.state.Created_at.concat(data[i].created_at),
            Content: this.state.Content.concat(data[i].content),
          })
        }
      });
    }

    createTable = () => {
      let table = []
  
      // Outer loop to create parent
      for (let i = 0; i < this.state.Code.length; i++) {
        let Post = []
        //Inner loop to create children
        Post.push(<td>{`${this.state.Code[i]}`}</td>)
        Post.push(<td>{`${this.state.Content[i]}`}</td>)
        Post.push(<td>{`${this.state.Created_at[i].slice(0,9)}`}</td>)
        // for (let j = 0; j < 3; j++) {
        //   children.push(<td>{`Column ${j + 1}`}</td>)
        // }
        //Create the parent and add the children
        table.push(<tr>{Post}</tr>)
      }
      return table
    }

  render(){
      return (
        <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4" xs={4}>
            Medical
          </Typography>
          <Button color="primary" variant="contained" onClick={this.getPostTag} xs={4}>
            Show Recent Post
          </Button>
          <Button color="secondary" variant="contained" to="/" component={Link} xs={4}>
            Back
          </Button>
          <table>
            {this.createTable()}
          </table>
          {/* <Typography variant="h4" component="h4" xs={4}>
            {this.state.Content}
          </Typography> */}
        </Grid>
        </Grid>
       );
    }
  }



