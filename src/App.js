// App.js

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import GearForm from "./components/GearForm";
import CoffeeForm from "./components/CoffeeForm";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          <NavBar />
          {/*<Intro />*/}
          <CoffeeForm />
        </div>
    );
  }
}

export default App;
