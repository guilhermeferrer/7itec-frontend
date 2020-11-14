const initialState = {
    users: []
}

export default function todo(state = initialState, action: any) {
    switch (action.type) {
        case '@USERS/GET_ALL_USERS':
            return {
                ...state,
                loading: true,
                users: []
            }
        case '@USERS/GET_ALL_USERS_SUCCESS':
            console.log(action.response);
            return {
                ...state,
                users: action.response.data[0],
                loading: false
            }
        default:
            return state;
    }
} 