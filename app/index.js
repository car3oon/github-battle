import React, {Component} from 'react'
import ReactDom from 'react-dom'
import routes from './config/routes'


const USER_DATA = {
  name: 'Luke Skywalker',
  username: 'car3oon',
  imageUrl: 'http://placekitten.com/g/200/200'
}

class Link extends Component {

  _changeURL = () => {
    window.location.replace(this.props.href)
  }

  render () {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this._changeURL}
      >
        {this.props.children}
      </span>
    )
  }

}

class ProfilePic extends Component {
  render () {
    return (
      <img src={'https://www.github.com/' + this.props.username + '.png'} style={{ height: 100, width: 100, borderRadius: 50, maxWidth: '100%' }} />
    )
  }
}

class ProfileLink extends Component {
  render () {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
}

class ProfileName extends Component {
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
}

class Avatar extends Component {
  render () {
    return (
      <div>
        <ProfilePic username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDom.render(routes, document.getElementById('app'))
