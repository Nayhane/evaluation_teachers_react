// src/reducers/batches.js
import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { BATCH_STUDENTS_UPDATED } from '../actions/batches/subscribe'


export default (state = [], { type, payload } = {}) => {
  switch (type) {

      case BATCH_STUDENTS_UPDATED :
        const newStudent = { ...payload }
        return [newStudent].concat(state)

    default :
      return state

  }
}
