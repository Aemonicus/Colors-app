import React from 'react';
import Palette from './Palette';
import { Route, Switch } from "react-router-dom"
import seedColors from "./seedColor"
import { generatePalette } from "./colorHelpers"
import PaletteList from "./PaletteList"
import { Component } from 'react';

class App extends Component {

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }


  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )} />
        {/* <div className="App">
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Switch>
    );
  }

}

export default App;
