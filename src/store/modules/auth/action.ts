export function login(email: string, password: string) {

    return {
        type: '@AUTH/LOGIN',
        request: {
            method: 'post',
            url: `/sessions`,
            data: {
                email,
                password
            }
        }
    }
}

export function logout() {

    return {
        type: '@AUTH/LOGOUT',
    }
}