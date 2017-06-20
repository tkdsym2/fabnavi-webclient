import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Debug from 'debug';


import player from './player';
import user from './user';
import manager from './manager';
import errors from './errors';

const debug = Debug('fabnavi:reducer');

export default combineReducers({
    player,
    user,
    manager,
    errors,
    routing: routerReducer
});
