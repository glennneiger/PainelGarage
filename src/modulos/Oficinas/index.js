import React, { Component } from 'react'
import { OficinaMain, Oficinas } from './styled-oficina'
import Api from '../../main/server/api'
import {LinkImage} from '../../main/server/links'

import { connect } from 'react-redux'

class Oficina extends Component {
    state = {
        previewOficina: null
    }
    async componentDidMount () {
        this.getOficina();
    }

    getOficina = async () => {
        const resp = await Api.get(`oficinausuario/${this.props.dados.dadosUser.id}/APROVADO`)
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
                        <div className="statusAprovacao"> 
                            <p> APROVADO </p>
                        </div>
                    </div>
                    {/* Informações da oficina */}
                    <div className="botoes"> 
                        <a href={`/create-oficina/${oficina.id}`} > <button className="btnAzul"> Editar </button>  </a>
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
            <OficinaMain>
                <h2> Oficinas </h2>
                <div className="botoesTop">
                    <a href="/create-oficina/0" > <button className="btnVerde">  Adicionar Oficina </button> </a>
                    <a href="/oficinas-pendentes"> <button className="btnVermelho btnBig"> Oficina Pendentes </button> </a>
                </div>
                <hr />
                <Oficinas>
                    {oficinas}
                </Oficinas>

            </OficinaMain>
        )
    }
}
const mapStateToProps = state => ({ dados: state.Autenticacao })
export default connect(mapStateToProps, null)(Oficina)