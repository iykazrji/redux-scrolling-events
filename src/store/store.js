// This creates the store by combining all the reducers.
// One might decide to place it directly in the 
// index, but I see it as a great way to 
// separate concerns and test easier.

import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

const store = createStore(rootReducer);

export default store;