import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import toothy from '../../assets/images/toothy.png'



function BeerList(props){
  var img = '../assets/images/toothy.png';
  var stylesBeerList = {
    backgroundImage: url('img'),
  }
  return (
    <div style={stylesBeerList}>
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
