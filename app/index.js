import React, {Component} from 'react';
import ReactDom from 'react-dom';


const USER_DATA = {
  name: 'Luke Skywalker',
  username: 'car3oon',
  imageUrl: 'http://placekitten.com/g/200/200'
}

class ProfilePic extends Component {
  render() {
    return (
      <img src={'https://www.github.com/' + this.props.username + '.png'} style={{height: 100, width: 100,  borderRadius: 50, maxWidth: '100%' }} />
    )
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

class Avatar extends Component {
  render() {
    return (
      <div>
        <ProfilePic username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDom.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
