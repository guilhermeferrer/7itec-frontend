import { all } from 'redux-saga/effects';
import user from './user/saga';
import auth from './auth/saga';
import order from './order/saga';


export default function* rootSaga() {
    return yield all([
        user,
        auth,
        order
    ]);
}