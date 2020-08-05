import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout'

import Blogs from './containers/Blogs';
import FullBlog from './containers/FullBlog';

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" layout={HomeLayout} component={Blogs} />
        <Route exact path="/:blog_id" layout={HomeLayout} component={FullBlog} />
      </Switch>
    </Router>
  );
}

export default Routes;