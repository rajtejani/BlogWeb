import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Blogs from '../containers/Blogs';
import FullBlogView from '../containers/FullBlog';

import './style.css';
import BlogPostList from '../containers/Blogs/BlogPostList';
const axios = require("axios");

const HomeLayout = () => {
  const [blogs, _setBlogsData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/blogs',
    })
      .then(res => {
        _setBlogsData(res.data);
      })
      .catch(error => console.log('------- error ---------', error))
  }, [])
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">

            <a className="d-xs-block d-md-none text-white font-weight-bold" href="javascript:void(0)">BlogMaster</a>

            <button className="navbar-toggler bg-dark text-white" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item  pr-md-4 active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link className="nav-link">About</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link className="nav-link">Privacy</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <Switch>
                <Route exact path='/'>
                  <Blogs data={blogs} />
                </Route>
                <Route path='/:blog_id' >
                  <FullBlogView data={blogs} />
                  </Route>
              </Switch>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="">
                    <h3>Recents</h3>
                  </div>
                  <div>
                    {
                      blogs.map((d, i) =>
                        <BlogPostList
                          key={i}
                          index={i}
                          data={d} />)
                    }
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="">
                    <h3>Trending</h3>
                  </div>
                  <div>
                    {
                      blogs.map((d, i) =>
                        <BlogPostList
                          key={i}
                          index={i}
                          data={d} />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-white py-2">
        <div className="container text-center">
          <p className="mb-0">All Rights Reserved By BlogMaster</p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default HomeLayout;