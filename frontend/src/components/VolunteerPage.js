import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import FoodPage from "./FoodPage";
import TransportationPage from "./TransportationPage";
import EmotionPage from "./EmotionPage";
import OthersPage from "./OthersPage";
import MedicalPage from "./MedicalPage";
import EntertainmentPage from "./EntertainmentPage";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class VolunteerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
    //this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    //this.roomButtonPressed = this.roomButtonPressed.bind(this);
  }

  renderButtonPressed() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Choose a field that you would like to offer help
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color= "primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "center"
            to = "/food"
            component={Link}
          >
            Food and Drink
          </Button>
          <Button
            variant="contained"
            color="primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "center"
            to = "/transportation"
            component={Link}
          >
            Transportation
          </Button>
          <Button
            variant="contained"
            color="primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "center"
            to = "/medical"
            component={Link}
          >
            Medical
          </Button>
        </Grid>
        
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "left"
            to = "/entertainment"
            component={Link}
          >
            Entertainment
          </Button>
          <Button
            variant="contained"
            color="primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "center"
            to = "/emotion"
            component={Link}
          >
            Emotion
          </Button>
          <Button
            variant="contained"
            color="primary"
            //onClick={this.roomButtonPressed}
            xs = {4}
            align = "center"
            to = "/others"
            component={Link}
          >
            Others
          </Button>
        </Grid>

        <Grid item xs={12} align="center">
          <Button variant="contained" color="secondary" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/volunteer" render={() => { return this.renderButtonPressed()}}/>
          <Route path="/food" component={FoodPage} />
          <Route path="/transportation" component={TransportationPage} />
          <Route path="/medical" component={MedicalPage} />
          <Route path="/emotion" component={EmotionPage} />
          <Route path="/entertainment" component={EntertainmentPage} />
          <Route path="/others" component={OthersPage} />
          
        </Switch>
      </Router>
    );
  }
}
