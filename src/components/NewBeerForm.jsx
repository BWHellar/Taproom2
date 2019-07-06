import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props){
  let _names = null;
  let _brew = null;
  let _desc = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({names: _names.value, brew: _brew.value, desc: _desc.value, id: v4()});
    _names.value = '';
    _brew.value = '';
    _desc.value = '';
  }

  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={myStyledComponentStyles}>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brew'
          placeholder='Brewery'
          ref={(input) => {_brew = input;}}/>
        <textarea
          id='desc'
          placeholder='Description'
          ref={(textarea) => {_desc = textarea;}}/>
        <button type='submit'>Enter!</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
