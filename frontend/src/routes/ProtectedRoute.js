const token = localStorage.getItem('token');

const ProtectedRoute = ({ isAuthenticated }) => {

    if (token) {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
};

export default ProtectedRoute;