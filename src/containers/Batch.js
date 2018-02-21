import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import fetchStudents  from '../actions/students/fetch'
import StudentsList from '../components/students/StudentsList'
import StudentEditor from '../components/students/StudentEditor'
import Paper from 'material-ui/Paper'
import './Batch.css'



class Batch extends PureComponent {

  constructor(){
    super()

    this.state = {
      batch: undefined
    }
  }

  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchOneBatch(batchId)
    this.props.fetchStudents(batchId)

  }

  componentWillReceiveProps(nextProps){
    const { batches } = nextProps
    this.setState({batch: batches[0]})
  }

  render() {
    const { batches } = this.props
    const { batch } = this.state


    if (!batch) { return null }



    return (
      <div className="Batch">
        <h1>Batch # {batches[0].batchNumber}</h1>

        <StudentsList />
        <br /><br /><br />
        <div>
        <Paper className='Paper2' zDepth={2} rounded={false} >
        <h3> Add a new student</h3>
        <StudentEditor />
        </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchOneBatch, fetchStudents })(Batch)
