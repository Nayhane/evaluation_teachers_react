// src/reducers/batches.js
import { FETCHED_STUDENTS, FETCHED_ONE_STUDENT } from '../actions/students/fetch'
import { BATCH_STUDENTS_UPDATED } from '../actions/batches/subscribe'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

      case FETCHED_ONE_STUDENT :
        return payload.body

      case BATCH_STUDENTS_UPDATED :
        const newStudent = { ...payload }
        return [newStudent].concat(state)

    default :
      return state

  }
}
