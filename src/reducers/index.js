import {combineReducers} from 'redux';
import bookreducers from './reducers_books';
import activebookreducers from './active_book';


const rootReducer = combineReducers({
        books: bookreducers,
        activebook: activebookreducers
});
export default  rootReducer;