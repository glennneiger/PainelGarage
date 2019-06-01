import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../main/actions/AuthAction'
import InputMask from 'react-input-mask';

import { LoginMain, FormSection } from './styled-login'
import Api from '../../main/server/api'


class Login extends Component {
    state = {
        cadastro: false,
        email: "",
        senha: "",
        nome: "",
        cpf: ""
    }
    onchange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value })
    submit = (e) => {
        e.preventDefault();
        
        if (this.state.cadastro) {
            console.log("a")
            this.fazerCadastro(); 
            return
        }
        const {  email, senha } = this.state
        if (senha  === "" || email === "") return 
        this.logar(email, senha)
    }

    fazerCadastro = async () => {
        console.log("b")
        const { nome, senha, email, cpf } = this.state
        if (nome === "", senha === "", email === "", cpf === "") return 
        try {
            const response = await Api.post('cliente', {
                "nome": nome,
                "email": email,
                "senha": senha,
                "cpf": cpf
            })
            this.logar(email, senha);
        } catch (error) {
            console.log(error);
        }
    }

    logar = async (email, senha) => {
        try {
            const response = await Api.post('auth/login', {
                email: email,
                password: senha
            })
        this.props.login(response.data)
        } catch (error) {
            // this.showErro("Email e/ou Senha incorreta", "warning")
        }
       // this.setState({ ...this.state, load: !this.state.load })
    }

    render() {
        const foto = require("../../assets/imagens/ferramentas.jpg");
        return (
            <LoginMain>
                <header>
                    <h1> Login  </h1>
                    <div className="bg-cinza"></div>
                    <img src={foto} alt="imagem ferramenta" />
                </header>
                <FormSection>
                    <div className="linha-laranja"></div>
                    <form onSubmit={this.submit}> 
                        {
                            (this.state.cadastro) ? (
                                <div className="form-group">
                                    <label> <strong> Nome: </strong> </label>
                                    <input type="text" className="" name="nome" value={this.state.nome} placeholder="Nome" onChange={this.onchange} />
                                </div>
                            ) : null
                        }
                        <div className="form-group">
                            <label> <strong> E-mail: </strong> </label>
                            <input type="text" className="" name="email" value={this.state.email} placeholder="Email" onChange={this.onchange} />
                        </div>
                        {
                            (this.state.cadastro) ?
                                <div className="form-group">
                                    <label> <strong> CPF: </strong> </label>
                                    <InputMask type="text" placeholder="CPF" name="cpf" mask="999.999.999-99" maskChar="" value={this.state.cpf} onChange={this.onchange} />
                                </div> 
                            : null
                        }
                        <div className="form-group">
                            <label> <strong> Senha: </strong> </label>
                            <input type="text" className="" name="senha" value={this.state.senha} placeholder="Senha" onChange={this.onchange} />
                        </div>
                        <div className="form-group formL">
                            <input type="submit" value={ (!this.state.cadastro) ? "Fazer Login" : "Fazer cadastro"} />

                            <button className="btnAzul" onClick={ ()=> this.setState({ ...this.state, cadastro: !this.state.cadastro })}> 
                            { (this.state.cadastro) ? "Fazer Login" : "Fazer cadastro"}
                            </button>
                            
                             
                        </div>
                       
                    </form>
                </FormSection>
            </LoginMain>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.Autenticacao
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
