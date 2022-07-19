import SignUp from './Componant/Layout/SignUp/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './Componant/Layout/Context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dasboard from './Componant/Layout/Dasboard/Dasboard';
import Login from './Componant/Layout/Login/Login';
import Product from './Componant/Product/Product';
import React from 'react';
import ContactUs from './Componant/Layout/ContactUs/ContactUs'
import { useAuth } from './Componant/Layout/Context/AuthContext';
import { useHistory } from 'react-router-dom';
// import { Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="app-container">
                    <div className="sign-upDiv">
                        <Switch>
                            <Route exact path="/" component={Product} />
                            <Route exact path="/sign-up">
                                <SignUp />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/dasboard">
                                <Dasboard />
                            </Route>
                            <Route exact path="/contactUs">
                                <ContactUs />
                            </Route>
                            
                        </Switch>
                    </div>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
