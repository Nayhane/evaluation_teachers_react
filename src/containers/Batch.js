import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'


const studentShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

class Batch extends PureComponent {
  static propTypes = {
    fetchOneBatch: PropTypes.func.isRequired,
    subscribeToWebsocket: PropTypes.func.isRequired,
    batch: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      students: PropTypes.arrayOf(studentShape),
      endAt: PropTypes.string.isRequired,
      startAt: PropTypes.string.isRequired
    })
  }

  componentWillMount() {
    const { batch, fetchOneBatch, subscribeToWebsocket } = this.props
    const { batchId } = this.props

    if (!batch) { fetchOneBatch(batchId) }
    subscribeToWebsocket()
  }

  componentWillReceiveProps(nextProps) {
    const { batch } = nextProps

    // if (batch && !batch.students[0].name) {
    //   this.props.fetchStudents(batch)
    // }
  }

  render() {
    const { batch } = this.props

    if (!batch) return null

    const title = batch.students.map(s => (s.name || null))
      .filter(n => !!n)

    return (
      <div className="Batch">
        <h1>Batch!</h1>
        <p>{title}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => {
  const batch = batches.filter((b) => (b._id === batch._Id))[0]
  return {
    batch
  }
}

export default connect(mapStateToProps, {
  subscribeToWebsocket,
  fetchOneBatch
})(Batch)
