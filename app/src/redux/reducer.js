export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const ACTION2 = 'action2';

export const action2 = () => ({type: ACTION2 });

export const login = (object) => {
    debugger
    return ({type: LOGIN, login: object.login, password: object.password });
}
export const logout = () => ({type: LOGOUT});
export const action1 = () => (dispatch, getState) => {
    dispatch({ type: LOGIN })
    dispatch({ type: ACTION2 })
    dispatch(action2())
}

const initialState = {
    name: 'asdfasdfasdf',
    password: '',
    login:false,
    data: [],
}

/**
 * RENAME TO ADQVTE NAME
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            debugger
            return {
                ...state,
                login: true,
                name: action.login,
                password: action.password

            };
        case LOGOUT:
            return {
                ...initialState,
            };
        case ACTION2:
            console.log('RECEIVE_STUFF Action')

            // ... - destructurisation - read about it

            return {
                ...state,
                data: [].concat(state.data.push('olololo')),
            };
        default:
            return state;
    }
}