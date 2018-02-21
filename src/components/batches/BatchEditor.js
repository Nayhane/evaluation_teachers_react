import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../../actions/batches/create'
import RaisedButton from 'material-ui/RaisedButton'


class BatchEditor extends PureComponent{
  constructor(props){
    super()


   const {batchNumber, startAt, endAt} = props

   this.state = {
    batchNumber,
    startAt,
    endAt
    }
  }

 updateBatchNumber(event){
   this.setState({
     batchNumber: this.refs.batchNumber.value
   })
 }

 updateStartAt(event){
   this.setState({
     startAt: this.refs.startAt.value
   })
 }

 updateEndAt(event){
   this.setState({
     endAt: this.refs.endAt.value
   })
 }

 saveBatch() {
    const {
      batchNumber,
      startAt,
      endAt,
    } = this.state
    this.props.createBatch({batchNumber, startAt, endAt})
  }


    render() {
        return (
          <div className="box">
          <div className="editor">
            <input
              type="number"
              ref="batchNumber"
              className="batchNumber"
              placeholder="Batch Number"
              defaultValue={this.state.batchNumber}
              onChange={this.updateBatchNumber.bind(this)}
              onKeyDown={this.updateBatchNumber.bind(this)} />


            <input
              type="date"
              ref="startAt"
              className="startAt"
              placeholder="Start At:"
              defaultValue={this.state.startAt}
              onChange={this.updateStartAt.bind(this)}
              onKeyDown={this.updateStartAt.bind(this)} />

              <input
                type="date"
                ref="endAt"
                className="endAt"
                placeholder="Ends At:"
                defaultValue={this.state.endAt}
                onChange={this.updateEndAt.bind(this)}
                onKeyDown={this.updateEndAt.bind(this)} />



              <div className="actions">
              <RaisedButton
                label="Create Batch"
                primary={true}
                onClick={this.saveBatch.bind(this)}
                 />
              </div>
            </div>
        </div>
        )
      }
    }

    export default connect(null, { createBatch })(BatchEditor)
