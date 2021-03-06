// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Lobby,
  Batch,
  SignIn,
  SignUp,
  Student,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Lobby} />
        <Route path="/batch/:batchId" component={Batch} />
        <Route path="/student/:batchId/:studentId" component={Student} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
