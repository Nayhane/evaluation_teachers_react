import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetch'


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
      <div className="student page">
        <h3>Student: {student.name}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return { students }
}

export default connect(mapStateToProps, {fetchOneStudent})(Student)
