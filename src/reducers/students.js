// src/reducers/batches.js
import { FETCHED_STUDENTS, FETCHED_ONE_STUDENT} from '../actions/students/fetch'
import { STUDENT_CREATED } from '../actions/batches/subscribe'
import { BATCH_STUDENTS_UPDATED } from '../actions/batches/subscribe'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

      case FETCHED_ONE_STUDENT :
      const studentIds = state.map(s => s._id)

      if (studentIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((student) => {
        if (student._id === payload._id) {
          return { ...payload }
        }
        return payload
      })

        case STUDENT_CREATED :
          const createStudent = { ...payload }
          return [createStudent].concat(state)


    default :
      return state

  }
}
