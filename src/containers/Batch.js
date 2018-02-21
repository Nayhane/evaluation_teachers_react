import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import StudentsList from '../components/students/StudentsList'
import StudentEditor from '../components/students/StudentEditor'



class Batch extends PureComponent {

  constructor(props){
    super()

    this.state = {
      batch: undefined
    }
  }

  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchOneBatch(batchId)

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
        <h3> Add a new student</h3>
        <StudentEditor />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchOneBatch})(Batch)
