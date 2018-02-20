// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchBatches, { fetchStudents } from '../actions/batches/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import CreateBatchButton from '../components/batches/CreateBatchButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import batch from '../containers/Batch'
// import WatchBatchIcon from 'material-ui/svg-icons/image/remove-red-eye'
// import JoinBatchIcon from 'material-ui/svg-icons/social/person-add'
// import PlayBatchIcon from 'material-ui/svg-icons/hardware/videobatch-asset'
// import WaitingIcon from 'material-ui/svg-icons/image/timelapse'
import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    this.props.fetchBatches()
    this.props.subscribeToWebsocket()
  }

  // goToBatch = batchId => event => this.props.push(`${bathcId}`)

  // isJoinable(batch) {
  //   return batch.students.length < 2 &&
  //     !this.isPlayer(batch)
  // }

  // isPlayer(batch) {
  //   if (!this.props.currentUser) { return false }
  //   return batch.students.map(p => p.userId)
  //     .indexOf(this.props.currentUser._id) >= 0
  // }
  //
  // isPlayable(batch) {
  //   return this.isPlayer(batch) && batch.students.length === 2
  // }

  // renderBatch = (batch, index) => {
  //   // let ActionIcon = this.isJoinable(batch) ? JoinBatchIcon : WatchBatchIcon
  //   // if (this.isPlayer(batch)) ActionIcon = this.isPlayable(batch) ? PlayBatchIcon : WaitingIcon
  //   //
  //   // if (!batch.students[0].name) { this.props.fetchStudents(batch) }
  //
  //   const title = batch.map(b => (b.name || null))
  //
  //   return (
  //     <MenuItem
  //       key={index}
  //       onClick={this.props.(batch._id)}
  //       primaryText={title} />
  //   )
  // }

  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>
        <CreateBatchButton />
        <Paper className="paper">
          <Menu>
            {this.props.batches.map(this)}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, subscribeToWebsocket, fetchStudents })(Lobby)
