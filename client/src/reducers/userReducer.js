const userReducer = (state={user: {}, loggedIn: false}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {user: action.user, loggedIn: true}
        case 'CREATE_USER':
            return {user: action.user, loggedIn: false}

        default:
            return state;
    }
}

export default userReducer