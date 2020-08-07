import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import './style.css';
import Routes from '../routes';
import BlogPostList from '../containers/Blogs/BlogPostList';

const HomeLayout = ({ children }) => {

  const { blogs, isLoadingBLogs } = useSelector(state => ({
    blogs: state.blogs,
    isLoadingBLogs: state.isLoadingBLogs
  }))
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
                  <Link to="/pages/about-us" className="nav-link">About</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link className="nav-link">Privacy</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link to="/pages/contact-us" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Routes />
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