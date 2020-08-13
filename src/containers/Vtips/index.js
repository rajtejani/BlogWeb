import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Mtips from '../Mtips';
import SideBarBlogs from '../Blogs/SideBarBlogs';
import { getVtipData } from '../../redux/actions';


const Vtips = () => {
  const location = useLocation();
  const mr_id = location.state && location.state.mr_id ? location.state.mr_id : null;
  const dispatch = useDispatch();
  const { vtip } = useSelector(state => ({
    vtip: state.vtipData
  }))
  let tips = vtip && vtip.tips ? vtip.tips : null;
  console.log('-=-=-=- vtip -=-=-', vtip, tips)
  useEffect(() => {
    dispatch(getVtipData(mr_id));
  }, [mr_id])

  return (
    <div className="container full-page">
      <div className="row">
        <div className="col-12 col-md-8">
          {
            tips &&
            <React.Fragment>
              <h3>{tips.mr_title}</h3>
              <small>{tips.mr_date.split('-').join(" ")}&nbsp;{tips.mr_time}</small>
              <p>{tips.mr_description}</p>
              <a href={tips.mr_token} target="_blank" className="text-white no-underline btn btn-primary px-5 mb-3">Read</a>
            </React.Fragment>
          }
          <p>Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.</p>

          <div className="my-4">
            <Mtips showMore={false} />
          </div>

          <p>Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.</p>

        </div>
        <div className="col-12 col-md-4">
          <SideBarBlogs />
        </div>
      </div>
    </div>
  );
}

export default Vtips;