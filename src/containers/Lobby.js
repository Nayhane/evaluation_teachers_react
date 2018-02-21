// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import fetchStudents from '../actions/students/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import StudentsList from '../components/students/StudentsList'
import BatchEditor from '../components/batches/BatchEditor'
import './Lobby.css'

class Lobby extends PureComponent {

  componentWillMount() {
    this.props.fetchBatches()
    this.props.fetchStudents()
    this.props.subscribeToWebsocket()
  }


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
      <FlatButton label="Evalute" />
    </CardActions>
  </Card>
    )
  }

  render() {
    return (
      <div className="Lobby">
      <Paper className="paper">
      </Paper>
      <br />
        {this.props.batches.map(this.renderBatches)}

      <br /><br /><br />
      <div>
      <h3> Create a new Batch</h3>
      <BatchEditor />
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students, currentUser }) => ({ batches, students, currentUser })

export default connect(mapStateToProps, { fetchBatches, fetchStudents, subscribeToWebsocket })(Lobby)
