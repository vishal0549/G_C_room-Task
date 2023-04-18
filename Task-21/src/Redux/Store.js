import { legacy_createStore } from 'redux';
import reducer from './Reducer';

const initialState = { count: 0 };

const myStore = legacy_createStore(reducer);

export default myStore;