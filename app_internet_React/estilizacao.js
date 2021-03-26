/*
ESTILIZAÇÃO
	1. Inlice
	2. Classes
	3. CSS in JS (usado em camelCase)

 INLINE
 	-> Prós
 		Modo mais prático e direto
 		Ajustes rápidos
 		Testes de estilo
 	-> Contras
 		Difícil Manutenção
 */


 const divStyle = {
 	color: 'blue',
 	backgroundImage: 'url(' + imgURL')'

 };
 function HelloWorldComponent() {
 	return <div style={divStyle}> Hello World! <./div>
 }

 function App() {
 	return ( 
 			<HelloWorld style={{marginTop: '10px'}} />
 		)
 }

/* CLASSES
	Em JSX, define-se classes pelo atributo className
	-> Prós
		Maneira mais prática e direta
	-> Contras
		Díficil manutenção
		Pouca flexibilidade
		Conflitos com nomes	

*/

.div-style {
	color: blue;
	background: url('https://bit.ly/2L8xxHz');
}

import './HelloWorldComponet.css';

function HelloWorldComponent() {
	return <div className="div-style"> Hello World! <./div>
}

/*
 CSS in JS

 	-> Os estilos pela tag style são feitos por um JSON onde o CSS é escrito CamelCase.
	-> JavaScript gera css para nós
	-> Manutenção
		Facilidade para remover CSS
		Estilos dinâmicos
	-> Performance
	-> Injeção automática de prefixos vendor
*/

# npm install --save style-components

const DivStyle = style.div`
	color: blue;
	background: url('$ {props => props.imageUrl}');
	`;

function HelloWorldComponet() {
	const url = 'https://bit.ly/2L8xxHz';
	return <DivStyle imageUrl={url}>Hello World <./divStyle>;
}






