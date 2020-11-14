export function getAllUsers() {

    return {
        type: '@USERS/GET_ALL_USERS',
        request: {
            method: 'get',
            url: `/user`
        }
    }
}