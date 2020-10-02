// export const loginUser = (user, callback) => {
//     return(dispatch) => {
//         fetch("http://localhost:3000/login", {
//             method: 'POST', 
//             headers: {
//                 "Content-Type":"application/json"
//             },
//             credentials: 'include',
//             body: JSON.stringify({user: user})
//         })
//         .then(res => res.json())
//         .then(userdata => {
//             if (userdata.error) {
//                 alert(userdata.error)
//             }
//             else {
//                 // const authentication_token = userdata.data.attributes.authentication_token;
//                 // localStorage.setItem('token', authentication_token);
//                 dispatch({type: "LOGIN_USER", user: userdata})
//                 callback()
//             } 
//         })
//     }
//}

export const loginUser = (user, callback) => async(dispatch) => {
    const userData = await fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    if (userData.error) {
    alert(userData.error)
    }
    dispatch({type: 'LOGIN_USER', user: userData})
    callback()
}

export const createUser = (newUser, callback) => {
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
        .then(userdata => {
            if (userdata.error) {
                alert(userdata.details)
            } else {
                // const authentication_token = userdata.data.attributes.authentication_token;
                // localStorage.setItem('token', authentication_token);
                dispatch({ type: "CREATE_USER", payload:userdata})
                callback();
            }
        })
    };
}

// export const logoutUser = () => {
//     return fetch(`http://localhost:3000/logout`, {
//         method: 'DELETE',
//         credentials: 'include'
//     }).then(res => res.json())
// }