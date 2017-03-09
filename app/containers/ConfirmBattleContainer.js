import React, {Component} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import GithubHelpers from '../utils/GithubHelpers'

class ConfirmBattleContainer extends Component {
  constructor (props, context) {
    console.log('initial state')
    super(props, context)
    context.router
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    let query = this.props.location.query
    GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  _handleInitiateBattle = () => {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render () {
    const { isLoading, playersInfo } = this.state
    return (
      <ConfirmBattle
        isLoading={isLoading}
        onInitiateBattle={this._handleInitiateBattle}
        playersInfo={playersInfo}
      />
    )
  }
}

export default ConfirmBattleContainer
