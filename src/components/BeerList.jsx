import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import taps from '../../assets/images/taps.jpg'
import what from '../../assets/images/taps.jpg'


function BeerList(props){
  return (
    <div>
    <style jsx>{`
        *div {
          background-color: black;
          border-radius: 25px;
        }
        h3 {
          text-align: center;
        }
        body {
          backgroundImage: url(${taps});
          text-align: center;
          background-position: center;
        }
      `}</style>
      <h3>Beers on Tap</h3>
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
