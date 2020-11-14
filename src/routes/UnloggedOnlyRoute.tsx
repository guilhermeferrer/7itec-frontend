import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { useSelector } from 'react-redux';

interface CheckAuthProps {
    component: React.FC<any>;
    path: string;
    exact?: boolean;
}

interface AuthState {
    auth: {
        token: string;
    }
}

export default function UnloggedOnlyRoute({ path, component: Component, exact }: CheckAuthProps) {
    const token = useSelector(({ auth }: AuthState) => auth.token);

    return (
        <Route
            render={
                props => token
                    ? <Redirect to={'/'} />
                    : <Component {...{ ...props, path, exact }} />
            }
        />
    )

}