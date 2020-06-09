// Returns Token
export const isLoggedIn = () => {
    const token = localStorage.getItem('auth');
    return token;
}

//returns admin status
export const isUserAdmin = () => {
    const status = localStorage.getItem('isAdmin');
    return status == "true";
}

//Removes the auth token
export const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('isAdmin');
    // localStorage.removeItem('user')
}

// Stores the Auth Token and admin status in LocalStorage
export const setToken = (token, adminStatus) => {
    localStorage.setItem('auth', token);
    localStorage.setItem('isAdmin', adminStatus);
    // localStorage.setItem('user', user);
}


