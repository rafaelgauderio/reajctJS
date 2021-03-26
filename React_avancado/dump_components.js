/*
DUMB COMPONENTS
	-> Preocupa-se com a apresentação
	-> Recebem valores via props
	-> Não possuem dependências com o restante da aplicação
	-> Não espeficicam como os dados são carregados ou sofrem mutações
	-> Recebem valores e callbacks exclusivamente via props
	-> Raramento possuem estado, quando precisam é para controlar a interface e não dados do usuário
	-> São quase sempre escritos como componentes funcionais
  -> O componente não possui dependência com terceiros, recebendo todos valores via props.
	-> Exemplos: Button, Card, Sidebar, Footer, List, Menu, Modal

	
	*/
// arquivo App.js

import React, { useState } from 'react'
import Button from './Component/Button'
import Calc from './Component/Calc'

function App () {
  
  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = ({ target }) => {
    const value = target.value
    setValue(min + max + value)
  }

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
        >
          Adicionar no carrinho
        <Button>
      <div>
      <div>
        <h1>Valor calculado: {value}<h1>
        <Calc
          min={min}
          max={max}
          onChange={handleCalc}
        />
      <div>
    <>
  )
}

// Arquivo Component/Button/index.js

import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  const { children, onClick } = props

  return (
    <button
      onClick={onClick}
    >
      {children}
    <button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button

// No arquivo Component/Calc/index.js
  
import React from 'react'
import PropType from 'prop-types'

function Calc(props) {
  const { min, max, onChange } = props

  return (
    <div>
      <p>
        Valor mínimo: {min}
      <p>
      <p>
        Valor máximo: {max}
      <p>
      <input type="text" onChange={onChange} />
    <div>
  )
}

Calc.propTypes = {
  min: PropType.number.isRequired,
  max: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
}

export default Calc