import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props){
  console.log(props.beerList);
  return (
    <div>
      <hr/>
      {props.beerList.map((beer) =>
        <Beer names={beer.names}
          location={beer.location}
          issue={beer.issue}
          key={beer.id}/>
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
