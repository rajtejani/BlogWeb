import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';

import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <HomeLayout />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
