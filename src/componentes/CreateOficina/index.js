import React, { Component } from 'react'
import { Oficina } from './styled-oficina'
import makeAnimated from 'react-select/lib/animated';
import { connect } from 'react-redux'
import Select from 'react-select';
import Api from '../../main/server/api'
import TimeField from 'react-simple-timefield';

class CreateOficina extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nome: "",
            idEditable: null,
            endereco: "",
            telefone: "",
            descricao: "",
            cnpj: "",
            imagem: null,
            categorias: null,
            timeAbertura: '00:00',
            timeFechamento: '00:00',
            categoriaSele: null,
            DefaultCates: null
        }
    }

    onchange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value })

    componentDidMount() {
       if(this.props.match.params.id > 0) {
            this.setState({ ...this.state, idEditable: this.props.match.params.id })
            this.getOficina(this.props.match.params.id);
       }
        this.getCategorias()
    }

    getOficina = async (id) => {
        const oficina = await Api.get(`oficina/${id}`)
        let servicos = oficina.data.servicos.map( (servico) =>  {
            return { value: servico.id, label: servico.nome}
        } )
        this.setState({
            ...this.state,
            nome: oficina.data.nome,
            endereco: oficina.data.endereco,
            telefone: oficina.data.telefone,
            descricao: oficina.data.Descricao,
            cnpj: oficina.data.cnpj,
            timeAbertura: oficina.data.horario_abertura,
            timeFechamento: oficina.data.horario_fechamento,
            DefaultCates: servicos
        })
    }

    getCategorias = async () => {
        const resp = await Api.get(`servicos`)
        console.log(resp)
        this.setState({ ...this.state, categorias: resp.data });
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
                ...this.state,
                imagem: e.target.result
            })
        }
        reader.readAsDataURL(file)
    }
    
    submit = async (e) => {
        e.preventDefault();
        if(this.state.idEditable) {
            this.updateOficina();
        } else {
            this.saveOficina();
        }
        
    }

    updateOficina = async () => {
        let oficina = {
            "categorias": this.state.categoriaSele,
            "cnpj": this.state.cnpj,
            "endereco": this.state.endereco,
            "nome": this.state.nome,
            "telefone": this.state.telefone,
            "descricao": this.state.descricao,
            "horario_abertura": this.state.timeAbertura,
            "horario_fechamento": this.state.timeFechamento,
            "file": this.state.imagem
        }
        const resp = await Api.put(`oficina/${this.state.idEditable}`, oficina);
        console.log(resp)
    }

    saveOficina = async () => {
        let oficina = {
            "categorias": this.state.categoriaSele,
            "cnpj": this.state.cnpj,
            "endereco": this.state.endereco,
            "nome": this.state.nome,
            "telefone": this.state.telefone,
            "horario_abertura": this.state.timeAbertura,
            "horario_fechamento": this.state.timeFechamento,
            "file": this.state.imagem,
            "cliente_id": this.props.dados.dadosUser.id
        }
        const resp = await Api.post('oficina', oficina);
        console.log(resp)
        this.clear();

    }
    previewCategoria = () => {
        const categorias = this.state.categorias
        let options = categorias.map((categoria) => {
            return { value: categoria.id, label: categoria.nome }
        });
        return options;
    }

    clear = () => {
        this.setState({ nome: "",
        endereco: "",
        telefone: "",
        descricao: "",
        cnpj: "",
        imagem: null,
        categorias: null,
        timeAbertura: '00:00',
        timeFechamento: '00:00',
        categoriaSele: null })
    }

    onChangeCategoria = (e) => {
        this.setState({ ...this.state, categoriaSele: e })
    }

    onTimeChangeOpen(time) {
        this.setState({ ...this.state, timeAbertura: time});
    }
    onTimeChangeClose(time) {
        this.setState({ ...this.state, timeFechamento: time});
    }

    render() {
        let categorias
        (this.state.categorias) ? categorias = this.previewCategoria() : categorias = null;
        return (
            <Oficina>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label> <strong> Nome da Oficina: </strong> </label>
                        <input type="text" name="nome" value={this.state.nome} placeholder="Nome da Oficina" onChange={this.onchange} />
                    </div>
                    <div className="form-group">
                        <label> <strong> Endereço: </strong> </label>
                        <input type="text" name="endereco" value={this.state.endereco} placeholder="Endereço" onChange={this.onchange} />
                    </div>

                    <div className="form-group">
                        <label> <strong> Horário de Abertura: </strong> </label>
                        <TimeField
                            name="abertura"
                            value={this.state.timeAbertura}                     // {String}   required, format '00:00' or '00:00:00'
                            onChange={ (value) => this.onTimeChangeOpen(value) }      // {Function} required
                            colon=":"                        // {String}   default: ":"
                            showSeconds                      // {Boolean}  default: false
                        />
                        <label className="hf"> <strong> Horário de Fechamento: </strong> </label>
                        <TimeField
                            name="abertura"
                            value={this.state.timeFechamento}    // {String}   required, format '00:00' or '00:00:00'
                            onChange={ (value) => this.onTimeChangeClose(value) }      // {Function} required
                            colon=":"                        // {String}   default: ":"
                            showSeconds                      // {Boolean}  default: false
                        />
                    </div>

                    <div className="form-group">
                        <label> <strong> Categorias: </strong> </label>
                        { (categorias && this.state.DefaultCates) ? 
                            <Select
                                closeMenuOnSelect={false}
                                components={makeAnimated()}
                                defaultValue={[...this.state.DefaultCates]}
                                isMulti
                                options={categorias}
                                onChange={ (e) => this.onChangeCategoria(e)}
                             />
                        : null}
                    </div>


                    <div className="form-inline">
                        <div className="form-group mr-3">
                            <label> <strong> CNPJ: </strong> </label>
                            <input type="text" name="cnpj" value={this.state.cnpj} placeholder="CNPJ" onChange={this.onchange} />
                        </div>
                        <div className="form-group ml-3">
                            <label> <strong> Telefone: </strong> </label>
                            <input type="text" name="telefone" value={this.state.telefone} placeholder="Telefone" onChange={this.onchange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label> <strong> Imagem: </strong> </label>
                        <input type="file" name="imagem" className="ml-1" onChange={this.onChangeImage} />
                    </div>

                    <div className="form-group">
                        <label> <strong> Descrição: </strong> </label>
                        <textarea name="descricao" onChange={this.onchange} value={this.state.descricao} row="100">  </textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Enviar Oficina" />
                    </div>

                </form>
            </Oficina>
        )
    }
}

const mapStateToProps = state => ({ dados: state.Autenticacao })
export default connect(mapStateToProps, null)(CreateOficina);