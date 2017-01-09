import React, {Component} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import GithubHelpers from '../utils/GithubHelpers';

class ConfirmBattleContainer extends Component {
  constructor(props, context) {
    console.log('initial state');
    super(props, context)
    context.router
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }  

  componentDidMount() {
    let query = this.props.location.query;
    GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then( (players) => {
        console.log("PLAYERS", players);
      })
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { isLoading, playerInfo} = this.state;
    return (
      <ConfirmBattle 
        isLoading={isLoading}
        playerInfo={playerInfo}
      />
    );
  }
}

export default ConfirmBattleContainer;
