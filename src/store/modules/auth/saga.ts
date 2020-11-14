import { takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { push } from 'connected-react-router';

interface ResponseError extends AnyAction {
    error: {
        response: {
            data: {
                error: string;
            }
        }
    }
}

function* success() {
    yield put(push('/'));
}

function* resetOrders() {
    yield put({ type: '@ORDER/CLEAR_ORDERS' });
}

function* errors({ error }: ResponseError) {
    const message = error.response.data.error;
    toast.error(message);
}

export default all([
    takeLatest('@AUTH/LOGIN_ERROR', errors),
    takeLatest('@AUTH/LOGIN_SUCCESS', success),
    takeLatest('@AUTH/LOGOUT', resetOrders),
]);