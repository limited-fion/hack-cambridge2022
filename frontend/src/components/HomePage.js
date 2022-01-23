import React, { Component } from "react";
import PostNeedPage from "./PostNeedPage";

import VolunteerPage from "./VolunteerPage";
import { Grid, Button, ButtonGroup, Typography, } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  renderHomePage() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          {/* position */}
          <Typography variant="h3" compact="h3">
            {/* font size */}
            Help us out
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            {/* button group */}
            <Button color="secondary" to="/help" component={Link}>
              Get help
            </Button>
            <Button color="primary" to="/volunteer" component={Link}>
              I am a volunteer
            </Button>
            
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  clearRoomCode() {
    this.setState({
      roomCode: null,
    });
  }

  render() {
    return (
     
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={() => {
                return this.state.roomCode ? (
                  <Redirect to={`/room/${this.state.roomCode}`} />
                ) : (
                  this.renderHomePage()
                );
              }}
            />
            <Route path="/volunteer" component={VolunteerPage} />
            <Route path="/help" component={PostNeedPage} />
            
          </Switch>
        </Router>
      
    );
  }
}
