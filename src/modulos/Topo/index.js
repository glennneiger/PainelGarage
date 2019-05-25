import React from 'react'
import { TopoDiv } from './styled-topo'
import IconSair from '../../assets/imagens/sair.svg'

export default function Topo() {
    return (
        <TopoDiv>
                <div className=" sair"> 
                    <img src={IconSair} alt="icon" width="35px" height="35px" />
                    <p> Sair </p> 
                </div>
        </TopoDiv>
    )
}
