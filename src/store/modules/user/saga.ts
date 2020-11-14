import { takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
interface ResponseError extends AnyAction {
    error: {
        response: {
            data: {
                error: string;
            }
        }
    }
}

function* errors({ error }: ResponseError) {
    console.log(error.response);
    const message = error.response.data.error;
    toast.error(message);
}

export default all([
    takeLatest('@USERS/GET_ALL_USERS_ERROR', errors),
]);