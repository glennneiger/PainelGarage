const userKey = 'userkey'
const INITIAL_STATE = {
    dados: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
    erroLogar: false,
    dadosUser: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "VALIDAR_TOKEN":
            if (action.payload.payload) {
                return { ...state, validToken: true, dadosUser: action.payload.user.user }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, dados: null }
            }
        case 'USER_FETCHED':

            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, dados: action.payload, validToken: true }
        case 'ERROR_LOGIN':
            return { ...state, erroLogar: action.payload }
        default:
            return state
    }
}