import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetch'
import fetchEvaluations from '../actions/evaluation/fetch'
import EvaluationEditor from '../components/evaluation/EvaluationEditor'
import EvaluationList from '../components/evaluation/EvaluationList'
import Paper from 'material-ui/Paper'
import './Student.css'


class Student extends PureComponent {
  constructor(props){
    super()

    this.state = {
      student: null
    }
  }

  componentWillMount() {
    const { batchId, studentId } = this.props.match.params
    this.props.fetchOneStudent(batchId, studentId)
    this.props.fetchEvaluations(studentId)
  }

  componentWillReceiveProps(nextProps){
    const { students } = nextProps

    this.setState({
      student: students[0],
    })
  }


  render() {
    const { student } = this.state

  if (!student) { return null }

    return(
      <div>
      <Paper className='Student_page' zDepth={2} rounded={false}>
        <h3>Student: {student.name}</h3>
         <img className="Page_photo" alt="" src={ student.photo }/>
         <br />
         <EvaluationList evaluations={student.evaluations}/>
         <br />
         <EvaluationEditor studentId={student._id} />

      </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return { students }
}

export default connect(mapStateToProps, {fetchOneStudent, fetchEvaluations})(Student)
