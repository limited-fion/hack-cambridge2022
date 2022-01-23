import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Microphone from "./microphone";

export default class PostNeedPage extends Component {
  static defaultProps = {
    Tag: null,
    Content: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      Content: this.props.Content,
      Tag: this.props.Tag,
    };
    this.handlePostButtonPressed = this.handlePostButtonPressed.bind(this);
    this.handlePostContent = this.handlePostContent.bind(this);
    this.handleTagButton = this.handleTagButton.bind(this);
  }

  handlePostButtonPressed(){

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tag: this.state.Tag,
        content: this.state.Content,
      }),
    };
    fetch("/api/post", requestOptions)
      .then((response) => response.json())
      .then((data)=> console.log(data))
      .then((data) => this.props.history.push("/room/" + data.code));
     
  }

  handlePostContent(e){
    this.setState({
      Content:e.target.value,
    });
  }

  handleTagButton(){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: this.state.Content,
      }),
    };
    fetch("/api/classification", requestOptions)
      .then((response) => response.json())
      //.then((data)=> console.log(data));
      .then((data) => this.setState({
        Tag:data,
      }));
  }

  render() {
   // const title = this.props.update ? "Update Room" : "Create a Room";
   const title = "Create a Post";
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <div>
          <p id= 'status'>Not Connected</p >
          <p id= 'transcript'> </p >
          </div>
          <Microphone/>
          <TextField
            onChange={this.handlePostContent}
            label = "Content"
            variant = "outlined"
            color = "secondary"
            multiline
            rows = {4}
            xs={6}
            required
          />
        </Grid>

        <Grid item xs={12} align="center">
          <Button  
            color="primary"
            variant="contained"
            xs={4}
            onClick={this.handleTagButton}>
            Generate Tag
          </Button>

        </Grid>
        
        <Grid item xs={12} align="center">
          
          <Button
            color="secondary"
            variant="contained"
            xs={4}
            onClick={this.handlePostButtonPressed}
          >
            Post
          </Button>
          <Button color="third" variant="contained" to="/" component={Link} xs={4}>
            Back
          </Button>
        </Grid>       
        
      </Grid>
    );
  }
}
