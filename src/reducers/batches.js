// src/reducers/batches.js
import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from '../actions/batches/fetch'
import {
  BATCH_CREATED,
  BATCH_UPDATED,
  BATCH_REMOVED,
  STUDENT_CREATED
} from '../actions/batches/subscribe'
import { FETCHED_STUDENTS, FETCHED_ASK_QUESTION } from '../actions/students/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

    case FETCHED_ONE_BATCH :
      const batchIds = state.map(b => b._id)


      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return payload
      })

    case BATCH_CREATED :
      const newBatch = { ...payload }
        return [newBatch].concat(state)


    case BATCH_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })


    case FETCHED_STUDENTS :
     return state.map((batch) => {
      payload.map((student) => {
        if (batch._id === student.batch_id) {
          batch.students = payload
          return { ...batch }
        }
      })
      return batch
    })


    case STUDENT_CREATED :
      const createStudent = { ...payload }

      return state.map((batch) => {
          if (batch._id === createStudent.batch_id) {
            batch.students = [createStudent].concat(batch.students)
            return { ...batch }
          }
        return batch
      })


    case FETCHED_ASK_QUESTION :
      return state.map((batch) => {
          if (batch._id === payload[0].batch_id) {
            batch.askQuestion = payload[0]
            return { ...batch }
          }
        return batch
    })


    case BATCH_REMOVED :
        return state.filter((batch) => (batch._id !== payload._id))

    default :
      return state

  }
}
