// src/reducers/batches.js
import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { STUDENT_CREATE } from '../actions/students/create'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

      case STUDENT_CREATED :
        const newStudent = { ...payload }
        return [newStudent].concat(state)
      
    default :
      return state

  }
}
