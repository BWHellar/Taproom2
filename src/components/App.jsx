import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import taps from '../../assets/images/taps.jpg'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [],
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }
  
  componentDidMount() { 
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBeerElapsedWaitTime(),
        60000
      );
  }
  
  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }
  
  updateBeerElapsedWaitTime() {
    console.log('check');
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.forEach((beer) =>
      beer.formattedWaitTime = (beer.timeOpen).fromNow(true)
    );
    this.setState({masterBeerList: newMasterBeerList});
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice();
    newBeer.formattedWaitTime = (newBeer.timeOpen).fromNow(true);
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
      <style jsx>{`
            div {
                background-image: url(${taps});
                position: absolute;
                width: 100%;
                height: 100%;
            }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route path='/admin' render={(props)=><Admin beerList={this.state.masterBeerList} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
