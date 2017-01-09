import React, {Component} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

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
    console.log('componentDidMount');
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
