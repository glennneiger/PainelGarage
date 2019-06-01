import Api from '../server/api'

export async function login(data) {
    return {
        type: "USER_FETCHED",
        payload: data
    } 
}

export async function validarToken(token) {
    try {
        const r = await Api.get('/auth/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
        const dados = { user: r.data, payload: true}
        return {
            type: "VALIDAR_TOKEN",
            payload: dados
        }
    } catch (error) {
        return {
            type: "VALIDAR_TOKEN",
            payload: false
        }
    }
}

export function logout(){
    return {
        type: "VALIDAR_TOKEN",
        payload: false
    }
}