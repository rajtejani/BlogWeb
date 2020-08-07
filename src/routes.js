import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Blogs from './containers/Blogs';
import FullBlog from './containers/FullBlog';
import AboutUs from './containers/AboutUs';
import ContactUs from './containers/ContactUs';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Blogs} />
      <Route path="/read-blog/:blog_id"  component={FullBlog} />
      <Route path="/pages/about-us"  component={AboutUs} />
      <Route path="/pages/contact-us"  component={ContactUs} />
    </Switch>
  );
}

export default Routes;