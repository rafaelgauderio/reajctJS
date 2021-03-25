Refs e DOM
	-> Com refs é possível acessar a árvore do DOM e/ou Elementos React
		Utilizar:
			-> Manipulação de bibliotecas de terceiros
			-> Gerenciamento de inputs(foco), seleção de textos ou peprodução de mídas
			-> Animações imperativas

// no App.js

import React, {useRef, useEffect, useState} from 'react'

function App() {
	const inputRef = useRef()
	const = countRef(1)
	const [ , setValue] = useState(false)

	const handleClic = () {
		inputRef.current.focus()
		console.log('inputRef.current', inputRef.current)
	}

	useEffect(() => {
		setTimeout(() => {
			console.log('pass here')
			count.current = 300
			setValue(true)
		}, 3000)
	})

	return (
		<>
			Foco: <inout ref={inputRef} />
			<br />
			<br />
			<br />
			<button onClick={handleClick}>Focar<button>
		<>

		)
}

export default App