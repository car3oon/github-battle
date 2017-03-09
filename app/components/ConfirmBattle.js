import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'

var puke = (obj) => {
  return <pre><code>{JSON.stringify(obj, null, '')}</code></pre>
}

var ConfirmBattle = (props) => {
  return (
    props.isLoading
    ? <p>LOADING!</p>
    : <div className="jumbotron col-sm-12 text-sm-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 offset-sm-2'>
        <div className='col-sm-6'>
          <p className='lead'>Player 1</p>
          {puke(props.playersInfo[0])}
        </div>
        <div className='col-sm-6'>
          <p className='lead'>Player 2</p>
          {puke(props.playersInfo[1])}
        </div>
      </div>
      <div className='col-sm-8 offset-sm-2'>
        <div className='col-sm-12 text-sm-center' style={styles.space}>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle
