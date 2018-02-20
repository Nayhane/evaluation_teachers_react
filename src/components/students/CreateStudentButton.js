import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
// import createBatch from '../../actions/batches/create'

class CreateStudentButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="CreateStudentButton">
        <RaisedButton
          label="Create Student"
          primary={true}
           />
      </div>
    )
  }
}


export default CreateStudentButton
