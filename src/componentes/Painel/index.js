import React from 'react';
import Routa from '../../main/Routas'
import { BrowserRouter } from "react-router-dom";
import Menu from '../../modulos/Menu'
import Topo from '../../componentes/Topo'


function App() {
    return (
        <BrowserRouter>
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