export const loginUser = (user) => {
    return(dispatch) => {
        dispatch({type: "LOADING"})
        fetch("http://localhost:3000/login", {
            method: 'POST', 
            headers: {
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(res => res.json())
        .then(data => dispatch({type: "LOGIN_USER", user: data}))
    }
}

export const createUser = (newUser) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: newUser.username,
                    email: newUser.email,
                    password: newUser.password
                }
            })
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'CREATE_USER', user: data})
        )
    };
}

// export const logoutUser = () => {
//     return fetch(`http://localhost:3000/logout`, {
//         method: 'DELETE',
//         credentials: 'include'
//     }).then(res => res.json())
// }