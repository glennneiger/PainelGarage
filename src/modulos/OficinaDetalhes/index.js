import React, { Component } from 'react'
import Api from '../../main/server/api'
import { OficinaMain } from './styled-detalhes'
import {LinkImage} from '../../main/server/links'

class OficinaDetalhes extends Component {
    state = {
        idOficina: this.props.match.params.id,
        oficina: null
    }
    componentDidMount() {
        this.getOficina();
    }

    getOficina = async () => {
        const id = this.state.idOficina
        const oficina = await Api.get(`oficina/${id}`);
        this.setState({ ...this.state, oficina: oficina.data })
    }   

    aprovarOficina = async () => {
        const id = this.state.idOficina
        const resp = await Api.put(`oficinaaprovar/${id}`);
    }

    render() {
        const  oficina  = this.state.oficina
        console.log(oficina)
        return (
            <OficinaMain>
                {(oficina) ? (
                    <>
                        <div className="">
                            <img src={`${LinkImage}oficinas/${oficina.image}`} />
                            <div className="d-flex "> <p className="text-aprov"> Status de Aprovação:  </p> <div className="statusAprovacao"> {oficina.status}  </div></div>
                            <div className="d-flex"> <p className="text-aprov"> Status de Pagamento:  </p> <div className="statusPendente"> {oficina.status}  </div></div>
                            <div className="opcoes">
                                <button className="btnPagamento mt-2"> Fazer Pagamento </button>
                                <button className="btnVermelho mt-2"> Remover </button>
                                <button className="btnAzul mt-2"> Editar </button>
                                <button onClick={this.aprovarOficina} className="btnPagamento mt-2"> Aceitar Oficina </button>
                            </div>
                        </div>

                        <div className="ml-3">
                            <h3 className="mb-2"> {oficina.nome} </h3>
                            <p>{oficina.Descricao} </p>
                            <div className="info-inline mt-2">
                                <div className="endereco mr-3">
                                    <h3 className="mb-1"> Endereço: </h3>
                                    <p className=""> {oficina.endereco}</p>
                                </div>
                                <div className="cnpj mr-3">
                                    <h3 className="mb-1"> CNPJ: </h3>
                                    <p className=""> {oficina.cnpj}</p>
                                </div>
                                <div className="telefone mr-3">
                                    <h3 className="mb-1"> Telefone: </h3>
                                    <p className=""> {oficina.telefone}</p>
                                </div>
                            </div>
                            <div className="info-inline">

                                <div className="horarios mt-3">
                                    <p className="mb-1"> <strong>   Horário de Abertura: </strong> {oficina.horario_abertura} Hrs </p>
                                    <p> <strong>  Horário de Fechamento: </strong> {oficina.horario_fechamento} Hrs </p>
                                </div>

                                <div className=" ml-2 mt-3">
                                    <h3 className="ml-1"> Serviços: </h3>
                                    <div className="ml-1 grid-servico">
                                        {
                                            oficina.servicos.map( (servico) => <div className="servicos mr-1 mt-1" key={servico.id}> {servico.nome} </div> )
                                        }
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                    </>


                
                
                
                
                
                
                
                
                ) : null}
                
            </OficinaMain>
        )
    }
}

export default OficinaDetalhes