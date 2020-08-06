import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Blogs from './containers/Blogs';
import FullBlog from './containers/FullBlog';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Blogs} />
      <Route path="/:blog_id" exact component={FullBlog} />
    </Switch>
  );
}

export default Routes;