import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../styles'

class Home extends Component {
  render () {
    return (
      <div className='jumbotron col-sm-12 text-sm-center' style={styles.transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>What even is a jQuery?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
}

export default Home
