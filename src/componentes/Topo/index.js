import React from 'react'
import { TopoDiv } from './styled-topo'
import IconSair from '../../assets/imagens/sair.svg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../main/actions/AuthAction'

function Topo(props) {
    console.log(props.dados)
    return (
        <TopoDiv>
                
                    <div className=" sair" onClick={ () => props.logout()}> 
                        <img src={IconSair} alt="icon" width="35px" height="35px" />
                        <p> Sair </p> 
                    </div>
                
        </TopoDiv>
    )
}

const mapStateToProps = state => ({ dados: state.Autenticacao })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Topo)
