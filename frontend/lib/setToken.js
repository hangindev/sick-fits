function setToken(token, days = 365) {
    const date = new Date();
    date.setTime(+ date + (days * 24 * 60 * 60 * 1000));
    window.document.cookie = `token=${token}; expires=${date.toGMTString()}; path=/`;
}

export default setToken