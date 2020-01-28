import React from 'react';
import Palette from './Palette';
import { Route, Switch } from "react-router-dom"
import seedColors from "./seedColor"
import { generatePalette } from "./colorHelpers"
import { Component } from 'react';

class App extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Helooooo</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>Helooooo</h1>} />
        <div className="App">
          <Palette palette={generatePalette(seedColors[4])} />
        </div>
      </Switch>
    );
  }

}

export default App;
