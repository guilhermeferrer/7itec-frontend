import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';
import api from '../../services/api';

const { requestsMiddleware, requestsReducer } = handleRequests({
    driver: createDriver(api),
    onRequest: (request, action, store) => {
        const token = store.getState().auth.token;

        const accessRequest = [{ ...request, headers: { ...request.headers, "Authorization": `Bearer ${token}` } }];

        return token ? accessRequest : request;
    }
});

export { requestsMiddleware, requestsReducer };