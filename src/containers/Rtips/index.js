import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { getRtipsData } from '../../redux/actions'

const Rtips = () => {
  const dispatch = useDispatch();
  const { rtipsData } = useSelector(state => ({
    rtipsData: state.rtipsData,
  }))

  useEffect(() => {
    dispatch(getRtipsData());
  }, []);

  return (
    <React.Fragment>
      <div className="container  full-page">
        <div className="row my-5 py-3">
          {
            rtipsData.map(data =>
              <div className="col-12 col-sm-4 col-lg-3">
                <Link to={{
                  pathname: `/admin/vtips/${data.mr_slug}`,
                  state: { mr_id: data.mr_id }
                }} className="no-underline">
                  <div className="row my-2 bordered p-2 no-gutters pointer">
                    <div className="col-8 px-2">
                      <h6 className="mb-0">{data.mr_title}</h6>
                      <small className="text-secondary">{data.mr_date && data.mr_date.split('-').join(" ")}</small>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>

    </React.Fragment >
  );
}

export default Rtips;