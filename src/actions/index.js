import * as ReadableAPI from '../utils/ReadableAPI'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export const getCategories = () => dispatch => {
	ReadableAPI.getCategories()
		.then(res => {
			if(res.status === 200) {
				const categories = res.data.categories
				dispatch(receiveCategories(categories))
			}
		})
}