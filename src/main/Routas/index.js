import React from 'react'

import { Route, Switch } from "react-router";

import Home from '../../modulos/Home'
import Oficina from '../../modulos/Oficinas'
import Produto from '../../modulos/Produto'
// import Pagamento from '../../modulos/Admin/Pagamento'
import CreateOficina from '../../componentes/CreateOficina'
import OficinasPendentes from '../../componentes/PendenteOficinas'
import AprovaOficina from '../../modulos/Admin/AprovaOficina'
import OficinaDetalhes from '../../modulos/OficinaDetalhes'
import Categoria from '../../modulos/Admin/Categoria'


export default  () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/oficina" component={Oficina} />
            <Route exact path="/produto" component={Produto} />
            {/* <Route exact path="/pagamento" component={Pagamento} /> */}
            <Route exact path="/create-oficina/:id" component={CreateOficina} />
            <Route exact path="/oficinas-pendentes" component={OficinasPendentes } />
            <Route exact path="/oficinas-aprovar" component={AprovaOficina } />
            <Route exact path="/oficina-detalhes/:id" component={OficinaDetalhes } />
            <Route exact path="/categoria" component={Categoria } />
        </Switch>
    )
}