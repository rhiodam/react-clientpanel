// Module
import React, {Component} from 'react';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

// CSS
import './App.css';

// Componenet
import Clients from "./components/clients/Clients";
import AppNavbar from "./components/layout/AppNavbar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <AppNavbar/>
                    <div className="container">
                        <h1>Hello</h1>
                        <Clients/>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
