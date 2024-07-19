const setToken = (token) => {
    localStorage.setItem('accessToken', token);
  };
  
  const getToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  const clearToken = () => {
    localStorage.removeItem('accessToken');
  };
  
  const isAdmin = (token) => {
    const decodedToken = decodeToken(token);
    console.log(decodedToken);
    return decodedToken && decodedToken.is_superuser === true;
  };
  
  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  
  export default {
    setToken,
    getToken,
    clearToken,
    isAdmin,
  };
  