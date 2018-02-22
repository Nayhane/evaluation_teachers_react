
import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const FETCHED_EVALUATIONS = 'FETCHED_EVALUATIONS'
export const FETCHED_LAST_EVALUATION = 'FETCHED_LAST_EVALUATION'


const api = new API()

export default (studentId) => {
  return (dispatch) => {

    dispatch({ type: APP_LOADING })

    api.get(`/students/${studentId}/evaluations`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })


        dispatch({
          type: FETCHED_EVALUATIONS,
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

export const fetchLastEvaluation = (studentId) => {
  return dispatch => {
    api.get(`/students/${studentId}/evaluations`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_LAST_EVALUATION,
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
