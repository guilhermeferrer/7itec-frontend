import React from 'react';
import { Switch, Route } from "react-router-dom";

import AuthOnlyRoute from './AuthOnlyRoute';
import UnloggedOnlyRoute from './UnloggedOnlyRoute';

import Home from '../pages/Home';
import OrderDetails from '../pages/OrderDetails';
import NewOrder from '../pages/NewOrder';
import DeliveryManList from '../pages/DeliveryManList';
import BottomSheet from '../components/BottomSheet';
import Login from '../pages/Login';
import Modal from '../components/Modal/';

export default function Routes() {

    return (
        <div>
            <Switch>
                <UnloggedOnlyRoute path='/login' component={Login} />
                <AuthOnlyRoute path='/' component={Home} exact />
                <AuthOnlyRoute path='/order-details' component={OrderDetails} />
                <AuthOnlyRoute path='/delivery-man-list' component={DeliveryManList} />
                <AuthOnlyRoute path='/bottom-sheet' component={BottomSheet} />
                <AuthOnlyRoute path='/new-order' component={NewOrder} />
            </Switch>
            <Route path='/' component={Modal} />
        </div>
    );
}