import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Beer(props){
  const beerInformation =
    <div>
    <style jsx>{`
        div {
          background-color: red;
          text-align: center;
          border-radius: 25px;
        }
      `}</style>
      <h3>{props.brew} - {props.names}</h3>
      <h4>Beer tapped {props.formattedWaitTime} ago</h4>
      <p><em>{props.desc}</em></p>
      <hr/>
    </div>
    if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('hey, you just clicked the ticket belonging to ' + props.names);}}>
        {beerInformation}
      </div>
    );
  } else {
    return (
      <div>
        {beerInformation}
      </div>
    );
  }
}


Beer.propTypes = {
  names: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  desc: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Beer;
