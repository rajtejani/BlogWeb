import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import './style.css';

import { getMtipsData } from '../../redux/actions';

const Mtips = ({ showMore = true }) => {

  const { mtipsData } = useSelector(state => ({
    mtipsData: state.mtipsData
  }))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMtipsData());
  }, []);
  return (
    <div className="row mb-3">
      {
        mtipsData.map(data =>
          <div className="col-12 col-md-6 mb-2">
            <div className="bordered px-3 py-1">
              <Link to={{
                pathname: `/admin/vtips/${data.mr_slug}`,
                state: { mr_id: data.mr_id }
              }} className="no-underlink">
                <h6 className="mb-0">{data.mr_title}</h6>
                <small className="text-secondary">{data.mr_date && data.mr_date.split('-').join(" ")}</small>
              </Link>
            </div>
          </div>
        )
      }{
        showMore &&
        <div className="col-12 text-center my-1">
          <button type="button" className="btn btn-primary">
            <Link to="/admin/rtips" className="text-white no-underline">Read More</Link>
          </button>
        </div>}
    </div>
  );
}

export default Mtips;