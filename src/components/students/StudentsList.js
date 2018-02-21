import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../../actions/students/fetch'

class StudentsList extends PureComponent{
 static propTypes = {
   students: PropTypes.arrayOf({
     _id: PropTypes.string,
     name: PropTypes.string.isRequired,
     photo: PropTypes.string.isRequired
   })
 }


  render(){
    const { name, photo } = this.props
    const student = this.props
    return(
      <div>
        <ul>student</ul>
        <li>{ student.name } - {student.photo}</li>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return {students}
}

export default connect(mapStateToProps)(StudentsList)
