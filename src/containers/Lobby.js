// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import fetchStudents from '../actions/students/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import { push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton'
import BatchEditor from '../components/batches/BatchEditor'
import './Lobby.css'

class Lobby extends PureComponent {

  componentWillMount() {
    this.props.fetchBatches()
    this.props.subscribeToWebsocket()
  }


  showBatch = batchId => event =>
    this.props.push(`/batch/${batchId}`)


  renderBatches = (batch, index) => {
    return (
      <Card key={index}>
        <CardHeader
          title={`Batch #${batch.batchNumber}`}
        />
        <CardText>
          {batch.startAt} - {batch.endAt}
          <br/>
          {`${batch.students.length} Students`}
        </CardText>
        <CardActions>
          <FlatButton onClick={this.showBatch(batch._id)}  label="Evalute" />
        </CardActions>
      </Card>
    )
  }

  render() {
    return (
      <div className="Lobby">
        <Paper className='Batch' zDepth={2} rounded={false} >
          {this.props.batches.map(this.renderBatches)}
        </Paper>
        <br /><br /><br />
        <div>
          <Paper className='Paper' zDepth={2} rounded={false} >
           <h3> Create a new Batch</h3>
           <BatchEditor />
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students, currentUser }) => ({ batches, students, currentUser })

export default connect(mapStateToProps, { fetchBatches, fetchStudents, subscribeToWebsocket, push })(Lobby)
