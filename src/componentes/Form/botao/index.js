import React from 'react'
import {Botao} from '../styled-form'
export default function Botao({ type, text }) {
  return (
    <Botao type={type}> {text} </Botao>
  )
}
