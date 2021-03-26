import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import "./styles.css";
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'


function soma() {
	alert(a+b)

}


function App() {

	return (
		<div className="App">
			Hello World
			<Button onClick={() => soma(10,20)} name="Rafael De Luca" />
			<ComponentA>
				<ComponentB>
					<Button onClick={() => soma(10,30)} name="Juliana De Luca" />
				<ComponentB>
			<ComponentA>
		<div>
		)
	}

	const rootElement = document.getElementById("root")
	ReactDOM.render(<App />), rootElement)
