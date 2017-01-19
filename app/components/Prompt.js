import React, {PropTypes} from 'react'
import styles from '../styles'

var Prompt = (props) => {
  return (
      <div className="jumbotron col-sm-6 offset-sm-3 text-sm-center" style={styles.transparentBg}>
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                onChange={props.onUpdateUser}
                value={props.username}
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
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt
