import React from 'react';
import './style.css';

const ContactUs = () => {
  return (
    <div className="container fullPage d-flex">
      <div className="row my-auto">
        <div className="col-12 col-md-6">
          <div className="contact-us__info">
            <h3 className="contact-title mb-5">GET IN TOUCH</h3>
            <p className="contact-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <div className="contact-method">
              <div className="contact-method__item"><i className="fa fa-map-marker"></i>
                <p>5 South Main Street Los Angeles, ZZ-96110 USA</p>
              </div>
              <div className="contact-method__item"><i className="fa fa-mobile"></i>
                <p>125-711-811   |   125-668-886</p>
              </div>
              <div className="contact-method__item"><i className="fa fa-headphones"></i>
                <p>Support.hosting@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="contact-us__form">
            <h3 className="contact-title mb-5">LEAVE A MESSAGE</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </div>
              <button type="button" className="btn btn-dark px-5 py-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;