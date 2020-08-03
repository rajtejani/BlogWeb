import React from 'react';
import { Link } from 'react-router-dom';


const BlogPostCard = ({ index }) => {
  return (
    <React.Fragment>
      <div className="col-12 col-sm-6 my-2">
        <div className="card">

          <div className="view overlay pointer">
            <Link to="/fullBlog">
              <img className="card-img-top" src={`https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(${index + 60}).jpg`}
                alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </Link>
          </div>

          <div className="card-body">

            <h4 className="card-title">Blog Title</h4>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
             dummy text ever since the 1500s,</p>
            <div className="d-flex">
              <span className="text-secondary">2 August, 2020</span>
              <span className="ml-auto"><Link to="/fullBlog">View</Link></span>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogPostCard;