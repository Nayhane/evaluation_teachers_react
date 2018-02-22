import API from '../../api/client'
import { EVALUATION_CREATED } from '../batches/subscribe'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


const api = new API()


export default (newEvaluation, student) => {

  return (dispatch) => {
    dispatch({ type: APP_LOADING })

  api.post(`/students/${student._id}/evaluations`, newEvaluation )
    .then((result_evaluation) => {
        student.current_color = newEvaluation.color

        api.put(`/students/${student._id}`, student._id, student)
        .then((result) => {
          dispatch({ type: APP_DONE_LOADING })
          dispatch({ type: LOAD_SUCCESS })
          dispatch({
            type: EVALUATION_CREATED,
            payload: result_evaluation.body
          })
        })
        .catch((error) => {
          dispatch({ type: APP_DONE_LOADING })
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
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
