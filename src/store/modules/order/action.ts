interface Order {
    recipient: string;
    street: string;
    number: string;
    neighborhood: string;
    postalCode: string;
    city: string;
    state: string;
}

export function getAllOrders() {

    return {
        type: '@ORDER/GET_ALL_ORDERS',
        request: {
            method: 'get',
            url: `/order`
        }
    }
}

export function getDeliveryManOrders(id: string) {

    return {
        type: '@ORDER/GET_DELIVERY_MAN_ORDERS',
        request: {
            method: 'get',
            url: `/order/${id}`
        }
    }
}

export function createOrder(order: Order) {

    return {
        type: '@ORDER/CREATE_ORDER',
        request: {
            method: 'post',
            url: `/order`,
            data: order
        }
    }
}

export function updateDeliveryMan(delivery_man: string, order_id: string) {

    return {
        type: '@ORDER/UPDATE_DELIVERY_MAN',
        request: {
            method: 'put',
            url: `/delivery-man`,
            data: {
                delivery_man,
                order_id
            }
        }
    }
}

export function finishOrder(order_id: string) {

    return {
        type: '@ORDER/FINISH_ORDER',
        request: {
            method: 'put',
            url: `/order/finish/${order_id}`
        }
    }
}

export function deleteOrder(order_id: string) {

    return {
        type: '@ORDER/DELETE_ORDER',
        request: {
            method: 'delete',
            url: `/order/${order_id}`
        }
    }
}

export function updateOrder(order: Order, order_id: string) {

    return {
        type: '@ORDER/UPDATE_ORDER',
        request: {
            method: 'put',
            url: `/order/${order_id}`,
            data: order
        }
    }
}