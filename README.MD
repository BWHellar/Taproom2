# TapRoom
#### This will create a mock Tap Room, 7/5/2019


#### By _**Brendan Hellar**_

## Description


#### The goal of this project is to create a mock Tap Room.  Users will be able to see which beers are on tap.  Users will also be able to see how much is left in each Keg.  The admin will be able to add more beers to the list.

## Specs
| Spec | Reasoning |
| :-------------   | :----------- |
| **Allows Customer to View Beer** | Reasoning: The customer will be able to select which beer they would like to buy. |
| **Allows Customer to See Beer Levels** | Reasoning: The customer will be able to see how much beer is left in the keg. |
| **Admin Will be Able to Add Beer** | Reasoning: Ad more beers are added to the Tap Room the admin will be able to add them to the list. |

## Breakdown
###### This constant will represent our Header which will stay with the customer as a navigation bar throughout the experience.
```
<div>
<style jsx>{`
    div {
      background-image: url(${toothy});
      text-align: center;
      background-position: center;
      border-radius: 25px;
    }
    h1{
      text-shadow: white 0px 0px 10px;
    }
  `}</style>
  <h1>"You Good Bro?" Brewery</h1>
  <Link to="/">Home</Link> | <Link to="/newbeer">Input Beer</Link>
</div>
==============
```
###### This will allow for the admin to select if he is currently allowed to add more beers to the list.
```
let currentlyVisibleContent = null;
if (this.state.formVisibleOnPage){
  currentlyVisibleContent = <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>;
} else {
  currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
}
return (
  <div>
    {currentlyVisibleContent}
  </div>
==============
```


## Setup/Installation Requirements

1. Clone this repository: $ git clone >repo name here<
2. Change into the work directory: $ cd Taproom
3. In console type: npm install
4. In console type: npm run start



## Known Bugs

None

## Support and contact details

If you have any issues please contact Brendan Hellar at bwhellar@gmail.com

## Technologies Used

Node.js
REACT

### License

MIT

Copyright (c) 2019 **Brendan Hellar**
