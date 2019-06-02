import React, { Component } from 'react'
import { Categoria } from './styled-cate'
import Api from '../../../main/server/api'
import { LinkImage } from '../../../main/server/links'

export default class index extends Component {
    state = {
        servicos: null,
        nome: "",
        descricao: "",
        imagem: null,
        idEditable: null
    }

    onchange = (e) => { this.setState({ ...this.state, [e.target.name]: e.target.value }) }

    componentDidMount() {
        this.getCategoria();
    }

    getCategoria = async () => {
        const resp = await Api.get('servicos')
        this.setState({ ...this.state, servicos: resp.data, imagem: null })
    }

    onChangeImage = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
    }

    createImage = (file) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            this.setState({
                imagem: e.target.result
            })
        }
        reader.readAsDataURL(file)
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.idEditable) {
            this.updateCategoria();
        } else {
            this.saveCategoria();
        }
    }

    saveCategoria = async () => {
        let categoria = {
            nome: this.state.nome,
            descricao: this.state.descricao,
            file: this.state.imagem
        }
        const resp = await Api.post('servicos', categoria);
        console.log(resp)
    }

    updateCategoria = async () => {
        let categoria = {
            nome: this.state.nome,
            descricao: this.state.descricao,
            file: this.state.imagem
        }
        const resp = await Api.put(`servicos/${this.state.idEditable}`, categoria);
        console.log(resp)
        this.getCategoria();

    }

    editableCategoria = async (id) => {
        const resp = await Api.get(`servicos/${id}`);
        this.setState({ ...this.state, idEditable: id, nome: resp.data.nome, descricao: resp.data.descricao, imagem: null })
    }

    removeCategoria = async (id) => {
        await Api.delete(`servicos/${id}`)
        this.getCategoria();
    }

    previewCategoria = () => {
        let categorias = this.state.servicos
        let servicos = categorias.map((categoria) => (
            <div className="servico" key={categoria.id}>
                <div>
                    <img src={`${LinkImage}servicos/${categoria.image}`} width="200px" />
                </div>
                <div className="ml-2">
                    <p> <strong>  Nome: </strong> {categoria.nome} </p>
                    <p>  <strong> Descrição: </strong>  {categoria.descricao} </p>
                    <div className="mt-1">
                        <button className="btnAzul" onClick={() => this.editableCategoria(categoria.id)}> EDITAR  </button>
                        <button className="btnVermelho" onClick={() => this.removeCategoria(categoria.id)}> REMOVER  </button>
                    </div>
                </div>
            </div>
        ))

        return servicos
    }


    render() {
        let categorias
        (this.state.servicos) ? categorias = this.previewCategoria() : categorias = null;
        return (
            <Categoria>
                <div>
                    <p className="title mb-1">  <strong> Adicionar Categorias: </strong> </p>
                    <form onSubmit={this.submit}>
                        <div>
                            <input type="text" name="nome" value={this.state.nome} onChange={this.onchange} placeholder="Nome da Categoria" />
                            <textarea name="descricao" placeholder="Descrição da Categoria" value={this.state.descricao} onChange={this.onchange}> </textarea>
                            <label> Imagem: </label><input type="file" className="mb-1 mt-1" onChange={this.onChangeImage} />
                        </div>
                        <input type="submit"
                            value={(this.state.idEditable) ? "Atualizar" : "Cadastrar"} />
                    </form>
                </div>

                <h1 className="mb-1"> Categorias </h1>
                <hr />
                <div className="categorias">
                    {categorias}
                </div>

            </Categoria>
        )
    }
}
