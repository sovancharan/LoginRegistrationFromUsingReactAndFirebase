import SignUp from './Componant/Layout/SignUp/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './Componant/Layout/Context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dasboard from './Componant/Layout/Dasboard/Dasboard';
import Login from './Componant/Layout/Login/Login';
import Product from './Componant/Product/Product';
import React from 'react';
import { useAuth } from './Componant/Layout/Context/AuthContext';
import { useHistory } from 'react-router-dom';
// import { Router } from 'react-router-dom';

function App() {
    //   const product = useHistory();
    //   const login = useHistory();

    //   const useAuth = () => {
    //       const user = { Login: false };
    //       console.log('user.Login=', user.Login);
    //       return user && user.Login;
    //   };
    //   const ProtectedRoutes = () => {
    //       const isAuth = useAuth;
    //       console.log('hi auth');
    //       console.log('useAuth=', useAuth);
    //       return isAuth ? product.push('/product') : login.push('/login');
    //   };

    return (
        <Router>
            <AuthProvider>
                <div className="app-container">
                    <div className="sign-upDiv">
                        <Switch>
                            <Route exact path="/" component={Product} />
                            {/* <PrivateRoute
                                path="/update-profile"
                                component={UpdateProfile}
                            /> */}
                            <Route exact path="/sign-up">
                                <SignUp />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/dasboard">
                                <Dasboard />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
