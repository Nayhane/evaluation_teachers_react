// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import fetchBatches, { fetchStudents } from '../actions/batches/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import CreateBatchButton from '../components/batches/CreateBatchButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'


import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    this.props.fetchBatches()
    this.props.subscribeToWebsocket()
  }

  renderBatch = (batch, index) => {
    const title = batch.map(b => (b.number || null))

    return (
      <MenuItem
        key={index}
        onClick={this.findBy(batch._id)}
        primaryText={title} />
    )
  }

  render() {
    return (
      <div className="Lobby">
        <CreateBatchButton />
        <Paper className="paper">
          <Menu>
            {this.props.batches.map(this.renderBatch)}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, subscribeToWebsocket, fetchStudents })(Lobby)
