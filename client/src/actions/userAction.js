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
    return async (dispatch) => {
        const res = await fetch("http://localhost:3000/users", {
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
        const userdata = await res.json()
        if (userdata.error) {
            alert(userdata.details)
        } else {
            // const authentication_token = userdata.data.attributes.authentication_token;
            // localStorage.setItem('token', authentication_token);
            dispatch({ type: "CREATE_USER", user: userdata })
            alert("Thank you for signing up! You may now login")
        }
    };
}

export const getUser = () => { 
    return dispatch => {   
        return fetch("http://localhost:3000/currentUser", {  
            credentials: "include",         
            headers: {            
                "Content-Type": "application/json"          
                }
            })        
            .then(res => res.json())        
            .then(resp => {          
                if (resp.error) {            
                    // alert(resp.error)          
                } else {            
                    dispatch({type: "LOGIN_USER", user: resp})          
                }
            })        
    }
}


export const logoutUser = (callback) => {
    return async dispatch => {
        const data = await fetch(`http://localhost:3000/logout`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({ type: "LOGOUT_USER" })
        callback()
    }
}

export const removeRecipe = (id, recipeId) => {
    return async dispatch => {
        const data = await fetch(`http://localhost:3000/my_recipes/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        })
        alert("Recipe Removed")
        dispatch({ type: "REMOVE_RECIPE", id: id, recipeId: recipeId })
    }
}