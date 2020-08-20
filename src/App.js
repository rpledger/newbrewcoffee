// App.js

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CoffeeForm from "./components/CoffeeForm";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          <NavBar />
          <CoffeeForm />
        </div>
    );
  }
}

export default App;
