import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import './style.css';

const AboutUs = () => {
  return (
    <div className="container full-page d-flex">
      <div className="row align-items-center my-auto">
        <div className="col-12 col-sm-8 col-md-6 mx-auto">
          <div className="about-us__image">
            <img src="/admin/images/aboutus.png" className="w-100 h-auto"  alt="About us image" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="about-us__content lh-1-6">
              <h3>Thank you for visit out my website.</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores sit amet vel facilisis beatae vitae dicta sunt.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
              <div className="follow">
                <h6>Follow us:</h6>
                <div className="social-block">
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faDribbble} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutUs;