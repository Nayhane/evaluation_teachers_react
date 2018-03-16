import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import fetchStudents  from '../actions/students/fetch'
import { askQuestion }  from '../actions/students/fetch'
import StudentsList from '../components/students/StudentsList'
import StudentEditor from '../components/students/StudentEditor'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import './Batch.css'


class Batch extends PureComponent {
  constructor(props){
    super()

    this.state = {
      batch: undefined,
      students: null
    }
  }

  componentWillMount() {
    const { batchId } = this.props.match.params
      this.props.fetchOneBatch(batchId)
      this.props.fetchStudents(batchId)
  }

  componentWillReceiveProps(nextProps){
    const { batches } = nextProps

    this.setState({
      batch: batches[0],
      students: batches[0].students
    })
  }

  doAskQuestion(){
    this.props.askQuestion(this.state.batch._id)
  }


  render() {
    const { batch, students } = this.state
    const { batches } = this.props

    if (!batch) { return null }


    return (
      <div className="Batch">
        <div className ='b_title'>Batch # {batches[0].batchNumber}</div>
        <RaisedButton className='btn_ask' onClick={this.doAskQuestion.bind(this)}  label="Ask a question" primary={true} />
        {batch.askQuestion ?
        <p className='ask'>Ask to: {batch.askQuestion.name}</p>
        : null
        }
        <StudentsList students={students}  />
        <br /><br /><br />
        <div className='create_card'>
        <Paper className='Paper2' zDepth={2} rounded={false} >
        <h3> Add a new student</h3>
        <StudentEditor batchId={batches[0]._id} />
        </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchOneBatch, fetchStudents, askQuestion })(Batch)
