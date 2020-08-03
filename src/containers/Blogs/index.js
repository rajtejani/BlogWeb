import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

import './style.css';
import BlogPostCard from './BlogPostCard';

const Blogs = () => {
  const [activePage, _setActivePage] = useState(1);

  return (
    <React.Fragment>
      <div className="row">
        {
          new Array(10).fill().map((d, i) =>
            <BlogPostCard key={i} index={i} />)
        }
      </div>
      <div className="row justify-content-center">
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          innerClass="pagination justify-content-center"
          prevPageText='Prev'
          nextPageText='Next'
          firstPageText='First'
          lastPageText='Last'
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={pageNumber => _setActivePage(pageNumber)}
        />
      </div>
    </React.Fragment>
  );
}

export default Blogs;