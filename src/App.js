import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './main/store'
import RoutaAuth from './main/auth/RouteAuth'


function App() {
    return (
        <Provider store={store}>
            <RoutaAuth />
        </Provider>
    );
}

export default App;
