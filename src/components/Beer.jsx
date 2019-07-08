import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Beer(props){
  return (
    <div>
    <style jsx>{`
        div {
          background-color: red;
          text-align: center;
        }
      `}</style>
      <h3>{props.brew} - {props.names}</h3>
      <h4>Beer tapped {props.formattedWaitTime} ago</h4>
      <p><em>{props.desc}</em></p>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  desc: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Beer;
