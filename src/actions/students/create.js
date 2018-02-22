import API from '../../api/client'
import { STUDENT_CREATED } from '../batches/subscribe'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


const api = new API()


export default (newStudent, batchId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })


  api.post(`/batches/${batchId}/students`, newStudent )
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: STUDENT_CREATED,
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
