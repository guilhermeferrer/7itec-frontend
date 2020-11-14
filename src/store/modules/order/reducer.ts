const initialState = {
    orders: [],
    loading: false,
    loadingCreate: false
}

export default function order(state = initialState, action: any) {
    switch (action.type) {
        case '@ORDER/GET_DELIVERY_MAN_ORDERS':
        case '@ORDER/GET_ALL_ORDERS':
            return {
                ...state,
                loading: true,
                orders: []
            }
        case '@ORDER/GET_DELIVERY_MAN_ORDERS_SUCCESS':
        case '@ORDER/GET_ALL_ORDERS_SUCCESS':
            return {
                ...state,
                loading: false,
                orders: action.response.data[0]
            }
        case '@ORDER/CREATE_ORDER':
            return {
                ...state,
                loadingCreate: true
            }
        case '@ORDER/CREATE_ORDER_SUCCESS':
        case '@ORDER/CREATE_ORDER_ERROR':
            return {
                ...state,
                loadingCreate: false
            }
        case '@ORDER/CLEAR_ORDERS':
            return initialState;
        default:
            return state;
    }
} 