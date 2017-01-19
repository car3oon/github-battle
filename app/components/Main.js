import React, {Component} from 'react'

class Main extends Component {
  render () {
    return (
      <div className='container'>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main
