import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import HomeLayout from './layouts/HomeLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeLayout />
      </Router>
    </div>
  );
}

export default App;
