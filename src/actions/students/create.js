import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export default (student, batch) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })


    api.post(`/batch/${batch._Id}/student`, student)
      .then(() => {
        dispatch({ type: APP_DONE_LOADING })

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
