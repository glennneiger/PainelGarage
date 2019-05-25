import React, { Component } from 'react'
import { LoginMain, FormSection } from './styled-login'



export default class Login extends Component {
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
                    <form>
                        <div>

                        </div>
                    </form>
                </FormSection>
            </LoginMain>
        )
    }
}
