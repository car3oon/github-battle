import React, {Component} from 'react';
import styles from '../styles';

class Prompt extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-6 offset-sm-3 text-sm-center" style={styles.transparentBg}>
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                onChange={this.props.onUpdateUser}
                value={this.props.username}
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

export default Prompt;
