
import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_STUDENT = 'FETCHED_ONE_STUDENT'
export const FETCHED_ASK_QUESTION = 'FETCHED_ASK_QUESTION'


const api = new API()

export default (batchId) => {
  return (dispatch) => {

    dispatch({ type: APP_LOADING })

    api.get(`/batches/${batchId}/students`)
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

export const fetchOneStudent = (batchId, studentId) => {
  return dispatch => {
    api.get(`/batches/${batchId}/students/${studentId}`)
      .then((result) => {
        dispatch({
          type: FETCHED_ONE_STUDENT,
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

export const askQuestion = (batchId) => {
  return dispatch => {
    api.get(`/batches/${batchId}/question`)
      .then((result) => {
        dispatch({
          type: FETCHED_ASK_QUESTION,
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
