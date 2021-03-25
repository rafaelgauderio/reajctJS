/*
RENDER PROPS
	-> o termo se refere a um técnica de compartilhar código entre componentes React
			passando uma prop cujo valor é uma função.

	-> Um componente com uma render prop recebe uma função que retorna um elemento React e a invoca
			no momento de renderização, não sendo necessário para o componente implmentar um lógica
			própria.
*/			

	// chamando no arquivo App.js

	import React, {Component} from 'react'
	import Counter from './Counter'

	const Buttons = ({increment, decrement, count}) => (
		<div>
			<h1> Current value: {count} <h1>
			<div>
			<div>
				<button onClick={increment}> Adicionar 1 <button>
			<div>
			<div>
				<button onClick={decrement}> Remover 1 <button>
		<div>	

	)

	class App extends Component {
		render() {
			return (
				<div>
					<Counter render= {
						({increment, decrement, count}) => (
							<Buttons
								increment={increment}
								decrement={decrement}
								count={count}
								/>
							)								
					}>
					<Counter>
				<div>
		)
	}
}


	

	export default App










