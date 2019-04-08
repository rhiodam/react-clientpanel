// Module
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// CSS
import './App.css';

// Store
import {Provider} from "react-redux";


// Component
import Clients from "./components/clients/Clients";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <AppNavbar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>

                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
