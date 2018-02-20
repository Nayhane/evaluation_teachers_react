// src/reducers/batches.js
import { FETCHED_GAMES, FETCHED_ONE_GAME } from '../actions/batches/fetch'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED,
  GAME_PLAYERS_UPDATED,
} from '../actions/batches/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GAMES :
      return [ ...payload ]

    case FETCHED_ONE_GAME :
      const batchIds = state.map(g => g._id)
      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case GAME_CREATED :
      const newBatch = { ...payload }
      return [newBatch].concat(state)

    case GAME_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case GAME_PLAYERS_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload.batch._id) {
          return { ...payload.batch, students: payload.students }
        }
        return batch
      })

    case GAME_REMOVED :
        return state.filter((batch) => (batch._id !== payload._id))

    default :
      return state

  }
}
