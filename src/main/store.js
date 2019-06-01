import { createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers'
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

export default store