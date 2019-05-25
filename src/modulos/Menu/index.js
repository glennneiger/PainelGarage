import React from 'react'
import { MenuHeader } from './styled-menu'
import Perfil from '../../assets/imagens/perfil.jpg'
import Itens from './Itens'

export default function Menu() {
  return (
    <MenuHeader>
        <div className="image">
            <img src={Perfil} alt="foto perfil"/>
            <p> Lucas Wesley </p>
        </div>

        <Itens />
        
        
    </MenuHeader>
  )
}
