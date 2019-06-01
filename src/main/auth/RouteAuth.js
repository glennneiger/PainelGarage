import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { validarToken } from '../actions/AuthAction'
import axios from 'axios'

import Login from '../../paginas/login'
import Painel from '../../componentes/Painel'

class RoutesAuth extends Component {
    componentWillMount() {
        if (this.props.auth.dados) {
            this.props.validarToken(this.props.auth.dados.token)
        }
    }
    render() {
        const { dados, validToken, cadastrar } = this.props.auth
        if (dados && validToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${dados.token}`;
            return <Painel>{this.props.children}</Painel>
        } else if (!dados && !validToken) {
            return <Login>{this.props.children}</Login>
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({
    auth: state.Autenticacao
})
const mapDispatchToProps = dispatch => bindActionCreators({ validarToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RoutesAuth)