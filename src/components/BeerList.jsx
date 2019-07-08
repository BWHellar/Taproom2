import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';


function BeerList(props){
  return (
    <div>
      <hr/>
      {props.beerList.map((beer) =>
        <Beer names={beer.names}
          brew={beer.brew}
          desc={beer.desc}
          formattedWaitTime={beer.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={beer.id}/>
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default BeerList;
