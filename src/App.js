import React from 'react';
import './App.css';
import Routa from './main/Routas'
import { BrowserRouter } from "react-router-dom";
import Menu from './modulos/Menu'
import Topo from './modulos/Topo'

// import Login from './paginas/login'

function App() {
    return (
        <BrowserRouter>
            {/* <Login /> */}
            <div className="d-flex">
                <Menu />
                <div className="content">
                    <Topo />
                    <Routa />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
