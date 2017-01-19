import React, {Component} from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor (props, context) {
    super(props, context)
    context.router
    this.state = {
      username: ''
    }
  }

  _handleUpdateUser = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  _handleSubmitUser = (e) => {
    e.preventDefault()

    var username = this.state.username
    this.setState({
      username: ''
    })

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + username)
    }
  }

  render () {
    return (
      <Prompt
        onSubmitUser={this._handleSubmitUser}
        onUpdateUser={this._handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
