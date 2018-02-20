import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../../actions/students/fetch'

class StudentsList extends PureComponent{
 static propTypes = {
   students: PropTypes.arrayOf({
     _id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     photo: PropTypes.string.isRequired
   })
 }


  render(){
    return(
      <div>
      <ul>
      </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return {students}
}

export default connect(mapStateToProps)(StudentsList)
