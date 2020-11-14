import { takeLatest, all, put, select, SagaReturnType } from 'redux-saga/effects';
import { getAllOrders, getDeliveryManOrders } from './action';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { push } from 'connected-react-router';

interface AuthState {
    auth: {
        user: {
            _id: string;
        };
    }
}

const getUserId = ({ auth }: AuthState) => auth.user._id;

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
    yield put(getAllOrders());
}

function* successFinishOrder() {
    const userId = yield select(getUserId);
    yield put(getDeliveryManOrders(userId));
    yield put(push('/'));
}

function* successUpdateDeliveryMan() {
    toast.success('Entregador alterado com sucesso!');
    yield put(getAllOrders());
    yield put(push('/'));
}

function* errors({ error }: ResponseError) {
    console.log(error.response);
    const message = error.response.data.error;
    toast.error(message);
}

export default all([
    takeLatest('@ORDER/GET_DELIVERY_MAN_ORDERS_ERROR', errors),
    takeLatest('@ORDER/CREATE_ORDER_ERROR', errors),
    takeLatest('@ORDER/CREATE_ORDER_SUCCESS', success),
    takeLatest('@ORDER/UPDATE_DELIVERY_MAN_SUCCESS', successUpdateDeliveryMan),
    takeLatest('@ORDER/UPDATE_DELIVERY_MAN_ERROR', errors),
    takeLatest('@ORDER/FINISH_ORDER_SUCCESS', successFinishOrder),
    takeLatest('@ORDER/DELETE_ORDER_SUCCESS', success),
    takeLatest('@ORDER/DELETE_ORDER_ERROR', errors),
    takeLatest('@ORDER/FINISH_ORDER_ERROR', errors),
    takeLatest('@ORDER/UPDATE_ORDER_SUCCESS', success),
    takeLatest('@ORDER/UPDATE_ORDER_ERROR', errors)
]);