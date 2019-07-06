import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <h2>Yo this page aint right</h2>
      <h3>You best be headed back <Link to="/">home</Link></h3>
    </div>
  );
}

Error404.propTypes = {
  brew: PropTypes.object
};

export default Error404;
