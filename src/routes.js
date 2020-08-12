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
import PrivacyPolicy from './containers/PrivacyPolicy';

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin/" exact component={Blogs} />
      <Route path="/admin/read-blog/:blog_id"  component={FullBlog} />
      <Route path="/admin/about-us"  component={AboutUs} />
      <Route path="/admin/contact-us"  component={ContactUs} />
      <Route path="/admin/privacy-policy"  component={PrivacyPolicy} />
    </Switch>
  );
}

export default Routes;