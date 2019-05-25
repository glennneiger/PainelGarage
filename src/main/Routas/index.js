import React from 'react'

import { Route, Switch } from "react-router";

import Home from '../../modulos/Home'
import Oficina from '../../modulos/Oficinas'
import Produto from '../../modulos/Produto'
import Pagamento from '../../modulos/Admin/Pagamento'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/oficina" component={Oficina} />
            <Route exact path="/produto" component={Produto} />
            <Route exact path="/pagamento" component={Pagamento} />
        </Switch>
    )
}