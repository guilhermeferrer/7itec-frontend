const initialState = {
    users: [],
    loading: false,
    token: null,
    user: null
}

export default function auth(state = initialState, action: any) {
    switch (action.type) {
        case '@AUTH/LOGIN':
            return {
                ...state,
                loading: true
            }
        case '@AUTH/LOGIN_SUCCESS':
            return {
                ...state,
                user: action.response.data.user,
                token: action.response.data.token,
                loading: false
            }
        case '@AUTH/LOGIN_ERROR':
            return {
                ...state,
                loading: false
            }
        case '@AUTH/LOGOUT':
            return initialState;
        default:
            return state;
    }
} 