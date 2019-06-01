import React from 'react'
import { Nav } from '../Itens/styled-itens'
import IconOficina from '../../../assets/imagens/oficina.svg'
import IconProduto from '../../../assets/imagens/produtos.svg'
export default function Itens() {
  return (
    <Nav>
        <ul>
            <a href="/oficina">
                <li> 
                    <img src={IconOficina} alt="icon" width="30px" height="30px" />
                    <p>Cadastrar uma oficina </p> 
                </li>
            </a>
            <a href="/produto">
                <li> 
                    <img src={IconProduto} alt="icon" width="30px" height="30px" />
                    <p>Cadastrar um Produto </p> 
                </li>
            </a>
            <a href="/oficinas-aprovar">
                <li> 
                    <img src={IconProduto} alt="icon" width="30px" height="30px" />
                    <p>Oficinas para aprovar</p> 
                </li>
            </a>
        </ul>
    </Nav>
  )
}
