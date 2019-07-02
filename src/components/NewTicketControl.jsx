import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisisbleOnPage: false
//   };
//   this.handleClick = this.handleClick.bond(this);
// }
//
//   handleClick() {
//     this.setState({formVisisbleOnPage: true});
//     console.log ('formVisisbleOnPage is currently set at:'+ this.state.formVisisbleOnPage);
//   }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisisbleOnPage){
      currentlyVisibleContent = <NewTicketForm/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
