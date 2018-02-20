
import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
// import { BATCH_STUDENTS_UPDATED } from './subscribe'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_BATCH = 'FETCHED_ONE_BATCH'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('/students')
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_STUDENTS,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}

// export const fetchOneStudent = (studentId) => {
//   return dispatch => {
//     dispatch({ type: APP_LOADING })
//
//     api.get(`/students/${studentId}`)
//       .then((result) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({ type: LOAD_SUCCESS })
//
//         dispatch({
//           type: FETCHED_ONE_STUDENT,
//           payload: result.body
//         })
//       })
//       .catch((error) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({
//           type: LOAD_ERROR,
//           payload: error.message
//         })
//       })
//   }
// }