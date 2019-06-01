import React, { Component } from 'react'
import { Oficinas} from './styled-oficina'
import { connect } from 'react-redux'
import {LinkImage} from '../../main/server/links'

import Api from '../../main/server/api'

class PendenteOficina extends Component {
    state = {
        previewOficina: null
    }
    componentDidMount() {
        this.getOficinas()
    }

    getOficinas = async () => {
        const resp = await Api.get(`oficinausuario/${this.props.dados.dadosUser.id}/PENDENTE`)
        this.setState({ ...this.state, previewOficina: resp.data })
    }

    removeOficina = async (id) => {
        const resp = await Api.delete(`oficina/${id}`)
        console.log(resp);
    }

    previewOficinas = () => {
        const { previewOficina }= this.state
        let oficinas = previewOficina.map( (oficina) => {
            return (
                <div className="oficina" key={Math.random()}>
                    <img src={`${LinkImage}oficinas/${oficina.image}`} alt="imagem oficina" width="250px"  height="180px" />
                    <div className="titulo">
                        <h4 > {oficina.nome} </h4>
                        <p> <strong> Descrição: </strong>{   oficina.Descricao.substr(0, 50)} </p>
                        <p> <strong> CNPJ: </strong> {oficina.cnpj} </p>
                        <p> <strong> Telefone: </strong> {oficina.telefone} </p>
                        <div className="statusPendente"> 
                            <p> PENDENTE </p>
                        </div>
                    </div>
                    {/* Informações da oficina */}
                    <div className="botoes"> 
                    <a href={`/create-oficina/${oficina.id}`} > <button className="btnAzul"> Editar </button> </a>
                        <button className="btnVermelho" onClick={ () => this.removeOficina(oficina.id) }> Remover </button>
                    </div>
                </div>
            )
        })
        return oficinas
    }

    render() {
        let oficinas = (this.state.previewOficina) ? this.previewOficinas() : null;

        return (
            <Oficinas>
                {oficinas}
                
            </Oficinas>
        )
    }
}

const mapStateToProps = state => ({ dados: state.Autenticacao })
export default connect(mapStateToProps, null)(PendenteOficina)
