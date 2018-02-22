import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetch'
import Paper from 'material-ui/Paper'
import './Student.css'


class Student extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    evaluation: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchOneStudent()

  }

  render() {
    const { name, photo, evaluation } = this.props
    const { student } = this.props


    if (!student) return null

    return(
      <div>
      <Paper className='Student_page' zDepth={2} rounded={false}>
        <h3>Student: {student.name}</h3>
         <img className="Page_photo" alt="" src={ student.photo }/>
      </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return { students }
}

export default connect(mapStateToProps, {fetchOneStudent})(Student)
