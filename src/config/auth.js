// Returns Token
export const isLoggedIn = () => {
    const token = localStorage.getItem('auth');
    return token;
}

//Removes the auth token
export const logout = () => {
    localStorage.removeItem('auth');
}

// Stores the Auth Token in LocalStorage
export const setToken = (token, adminStatus) => {
    localStorage.setItem('auth', token);
    localStorage.setItem('isAdmin', adminStatus);
}



export const setAdmin = (adminStatus) => {
    localStorage.setItem("isAdmin", adminStatus)
}

//Stores admin status
// export const isUserAdmin = () => {
//     const email = localStorage.getItem('email');

// }