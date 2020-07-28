// App.js

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import GearForm from "./components/GearForm";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          <NavBar />
          {/*<Intro />*/}
          <GearForm />
        </div>
    );
  }
}

export default App;
