import Cookies from 'js-cookie';

function setToken(token, days = 365) {
    Cookies.set('token', token, { expires: days, path: '' })
}

function getToken() {
    return Cookies.get('token');
}

function removeToken() {
    return Cookies.remove('token');
}

export {setToken, getToken, removeToken}