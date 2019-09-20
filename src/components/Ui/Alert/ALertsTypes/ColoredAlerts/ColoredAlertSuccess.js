import React from 'react';

const coloredAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-icon alert-success alert-dismissible alert-icon-colored ">
      <div className="icon">
        <span className="mdi mdi-check" />
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close" />
        </button>
        <strong>Good!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default coloredAlertSuccess;
