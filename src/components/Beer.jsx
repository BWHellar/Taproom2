import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import taps from '../../assets/images/taps.jpg'

function Beer(props){
  const beerInformation =
    <div>
    <style jsx>{`
        div {
          background-color: #353839;
          text-align: center;
          border-radius: 25px;
          color: red;
          mix-blend-mode: lighten;
        }
        body {
          background-image: url(${taps});
          text-align: center;
          background-position: center;
        }
        h3, h4 {
          font: bolder 2vw "Impact";
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
