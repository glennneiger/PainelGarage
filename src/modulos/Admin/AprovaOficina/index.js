import React, { Component } from 'react'
import {connect } from 'react-redux'
import {Oficinas} from './styled-aprova'
import Api from '../../../main/server/api'
import {LinkImage} from '../../../main/server/links'


class AprovaOficina extends Component {
    state = {
        previewOficina: null
    }
    componentDidMount() {
        this.getOficinas();
    }

    getOficinas = async () => {
        const resp = await Api.get(`oficinapendentes`)
        this.setState({ ...this.state, previewOficina: resp.data })
    }

    previewOficinas = () => {
        const { previewOficina }= this.state
        let oficinas = previewOficina.map( (oficina) => {
            console.log(oficina)
            return (
                <div className="oficina" key={Math.random()}>
                    <img src={`${LinkImage}oficinas/${oficina.image}`} alt="imagem oficina" width="250px"  height="180px" />
                    <p className="titulo"> {oficina.nome} </p>
                    {/* Informações da oficina */}
                    <a href={`/oficina-detalhes/${oficina.id}`}> <button className="btnVermelho"> Ver mais Detalhes </button> </a>
                </div>
            )
        })
        return oficinas
    }

    render() {
        let oficinas = (this.state.previewOficina) ? this.previewOficinas() : null;

        return (
            <Oficinas>
                <h1> Oficinas para avalição</h1>
                <hr />
                <div className="d-flex">
                    {oficinas}
                </div>
            </Oficinas>
        )
    }
}

const mapStateToProps = state => ({ dados: state.Autenticacao })
export default connect(mapStateToProps, null)(AprovaOficina)
