// Returns Token
export const isLoggedIn = () => {
    const token = localStorage.getItem('auth');
    return token;
}

//Removes the auth token
export const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    localStorage.setItem("cart", JSON.stringify([]))}

// Stores the Auth Token and admin status in LocalStorage
export const setToken = (token) => {
    localStorage.setItem('auth', token);
}


