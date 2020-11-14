import React from 'react';

import Routes from './routes';

import { Provider } from 'react-redux';
import { store, persistor, history } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'rodal/lib/rodal.css';
import { ToastContainer, Slide } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <ToastContainer
                        position="top-center"
                        transition={Slide}
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover={false}
                    />
                    <Routes />
                </ConnectedRouter >
            </PersistGate>
        </Provider>
    );
}