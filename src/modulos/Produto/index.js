import React, { Component } from 'react'
import { ProdutoMain } from './styled-produto'

export default class index extends Component {
    state = {
        nomeproduto: "",
        descricao: "",
        valor: 0,
        quantidade: 0,
        image: null,
        Oficina_id: null
    }

    onchange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value })

    render() {
        return (
            <ProdutoMain>
                <h2> Cadastro de produto </h2>
                <form submit={this.submit}>
                    <div className="inputInline">
                        <div className="">
                            <input type="text" name="nomeproduto" placeholder="Nome do produto" value={this.state.nomeproduto} onChange={this.onchange} />
                        </div>
                        <div className="">
                            <input type="text" name="valor" placeholder="Valor do produto" value={this.state.valor} onChange={this.onchange} />
                        </div>

                        <div className="">
                            <input type="text" name="quantidade" placeholder="Quantidade de produtos" value={this.state.quantidade} onChange={this.onchange}/>
                        </div>
                    </div>
                    <div className="">
                        <textarea type="text" name="descricao" placeholder="Descrição do produto"  value={this.state.descricao}onChange={this.onchange} />
                    </div>

                    <div>
                        <input type="submit" value="Cadastrar produto" />
                    </div>
                </form>
            </ProdutoMain>
        )
    }
}

