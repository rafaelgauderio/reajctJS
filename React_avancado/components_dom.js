COMPONENTS E DOM
	
	FRAGMENTS	
	-> Fragments: Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos
			permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.
		É um padrão do React para um componente retornar múltiplos elementos.

	-> Podemos ter vários componentes, mas o React permite que retornas apenas 1 elemento. Para retornar mais de um elemento, que
			que encapsular todos os demais nós dentro de apenas 1 <div>

		function App() {

			return {
			<React.Fragment>
				<div>
					ReactJS
				</div>
				<div>
					ReactJS Avançado
				</div>
			</React.Fragment>
			)
		}

		export default App
		

	-> sintaxe sugar <> <td> Elemento </td> </>

	//Outro exemplo se sintaxe de fragment
	function App() {
		const renderColumns = (element, key) => (
			<Fragment key={`column-${key}`}>
				<Column />
			</Fragment>
		)
		return (
			<table>

				{store.map(renderColumns)}
			</table>
		)

	}

	export default App