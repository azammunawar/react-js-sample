import {combineReducers} from 'redux';
import bookreducers from './reducers_books';


const rootReducer = combineReducers({
        books: bookreducers
});
export default  rootReducer;