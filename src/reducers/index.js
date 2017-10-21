import { combineReducers } from 'redux';

import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES
} from '../actions'

const initialCategoriesState = {
	categories: [],
	fetching: false
}

function categories(state = initialCategoriesState, action) {
	switch(action.type) {
		case REQUEST_CATEGORIES :
			return {
				...state,
				fetching: true,
			}
		case RECEIVE_CATEGORIES :
			return {
				...state,
				fetching: false,
				categories: action.categories,
			}
		default :
			return state
	}
}

export default combineReducers({
	categories
})