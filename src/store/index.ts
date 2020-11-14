import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import "regenerator-runtime/runtime";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { requestsMiddleware } from './modules/rootInterceptor';

import createRootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'auth']
}

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const composeEnhancers =
    (typeof window !== 'undefined' &&
        (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...requestsMiddleware, sagaMiddleware, routerMiddleware(history))),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {
    store,
    persistor,
    history
}