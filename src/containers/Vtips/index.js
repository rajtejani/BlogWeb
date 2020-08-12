import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getVtipData } from '../../redux/actions';


const Vtips = () => {
  const location = useLocation();
  const mr_id = location.state && location.state.mr_id ? location.state.mr_id : null;
  const dispatch = useDispatch();
  const { vtip } = useSelector(state => ({
    vtip: state.vtipData
  }))

  useEffect(() => {
    dispatch(getVtipData(mr_id));
  }, [mr_id])
  return (
    <div className="container full-page">
      <div className="row justify-content-center">
        <div class="bordered my-5">

          {
            vtip &&
            <React.Fragment>

              <div className="row">
                <div className="col text-right d-flex mt-auto justify-content-end">
                  <label>Title</label>
                </div>
                <div className="col">
                  <h3>{vtip.tips.mr_title}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>Slug</label>
                </div>
                <div className="col">
                  <label>{vtip.tips.mr_slug}</label>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>Description</label>
                </div>
                <div className="col">
                  <label>{vtip.tips.mr_description}</label>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>url</label>
                </div>
                <div className="col">
                  <a target="_blank" href={vtip.tips.mr_url} >{vtip.tips.mr_url}</a>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>Token</label>
                </div>
                <div className="col">
                  <a target="_blank" href={vtip.tips.mr_token}>{vtip.tips.mr_token}</a>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>Date</label>
                </div>
                <div className="col">
                  <label>{vtip.tips.mr_date}</label>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>Time</label>
                </div>
                <div className="col">
                  <label>{vtip.tips.mr_time}</label>
                </div>
              </div>
              <div className="row">
                <div className="col text-right">
                  <label>status</label>
                </div>
                <div className="col">
                  <label>{vtip.tips.mr_status}</label>
                </div>
              </div>

            </React.Fragment>

          }
        </div>
      </div>
    </div>
  );
}

export default Vtips;