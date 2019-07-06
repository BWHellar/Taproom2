import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Brewery'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Description'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
