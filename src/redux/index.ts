import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer, composeEnhancers())

export default store