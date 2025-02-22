import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import './style.css';
import Routes from '../routes';

const HomeLayout = ({ children }) => {
  const location = useLocation();

  const id = parseInt(location.search.replace(/[^0-9]/g, ""));
  const { blogs, isLoadingBLogs } = useSelector(state => ({
    blogs: state.blogs,
    isLoadingBLogs: state.isLoadingBLogs
  }))
  const _onClick = () => {
    $(".collapse.navbar-collapse").toggleClass("show");
  }

  if (id) {
    return <Redirect to={{
      pathname: '/admin/read-blog/?' + id,
      state: {blog_id: id}
    }} />
  }
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">

            <Link to="/admin/" className="d-xs-block d-md-none text-white font-weight-bold">BlogMaster</Link>

            <button className="navbar-toggler bg-dark text-white" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => _onClick()}>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item  pr-md-4 active">
                  <Link to="/admin/" onClick={() => _onClick()} className="nav-link">Home</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link to="/admin/about-us" onClick={() => _onClick()} className="nav-link">About</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link to="/admin/privacy-policy" onClick={() => _onClick()} className="nav-link">Privacy</Link>
                </li>
                <li className="nav-item px-md-4">
                  <Link to="/admin/contact-us" onClick={() => _onClick()} className="nav-link">Contact</Link>
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

export default React.memo(HomeLayout);