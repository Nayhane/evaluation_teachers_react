import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'



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
        <h1>Batch!</h1>
        <h1>{batches[0].batchNumber}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchOneBatch})(Batch)
