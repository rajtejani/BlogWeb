import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Blogs from './containers/Blogs';
import Rtips from './containers/Rtips';
import Vtips from './containers/Vtips';
import FullBlog from './containers/FullBlog';
import AboutUs from './containers/AboutUs';
import ContactUs from './containers/ContactUs';
import PrivacyPolicy from './containers/PrivacyPolicy';

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin/" exact component={Blogs} />
      <Route path="/admin/read-blog/:blog_slug"  component={FullBlog} />
      <Route path="/admin/about-us"  component={AboutUs} />
      <Route path="/admin/contact-us"  component={ContactUs} />
      <Route path="/admin/privacy-policy"  component={PrivacyPolicy} />
      <Route path="/admin/rtips" component={Rtips} />
      <Route path="/admin/vtips/:mr_slug" component={Vtips} />
      <Route path="/admin/*" component={Blogs} />
    </Switch>
  );
}

export default Routes;