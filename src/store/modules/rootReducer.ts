import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { requestsReducer } from './rootInterceptor';

import user from './user/reducer';
import auth from './auth/reducer';
import order from './order/reducer';

const createRootReducer = (history: History) => combineReducers({
    user,
    order,
    auth,
    requestsReducer,
    router: connectRouter(history),
});

export default createRootReducer