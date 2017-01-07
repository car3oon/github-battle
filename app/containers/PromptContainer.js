import React, {Component} from 'react';
import styles from '../styles';

class PromptContainer extends Component {
  constructor(props, context) {
    super(props, context)
    context.router
    this.state = {
      username: ''
    }
  }

  _onUpdateUser = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  _onSubmitUser = (e) => {
    e.preventDefault();

    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 offset-sm-3 text-sm-center" style={styles.transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this._onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                onChange={this._onUpdateUser}
                value={this.state.username}
                type="text" />
            </div>
            <div className="form-group col-sm-4 offset-sm-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
      </div>
    </div>
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default PromptContainer;
