import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

import './style.css';
import BlogPostCard from './BlogPostCard';

const Blogs = ({ data }) => {
  const [activePage, _setActivePage] = useState(1);

  return (
    <React.Fragment>
      <div className="row">
        {
          data && data.slice(activePage -1, 10).map((d, i) =>
            <BlogPostCard 
            key={i} 
            index={i}
            data={d} />)
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
          totalItemsCount={data ? data.length : 0}
          pageRangeDisplayed={5}
          onChange={pageNumber => _setActivePage(pageNumber)}
        />
      </div>
    </React.Fragment>
  );
}

export default Blogs;