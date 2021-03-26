/*
ERROR BOUNDARIES
	-> Captura de erros que ocorreram no React.
	-> Um erro de Javascript em uma parte da UI não deve quebrar toda a aplicação.
			Para resolver este problema para usuários do React, o React 16 introduziu 
			um novo conceito de "error baundary"
	-> É um componente que envelopa toda a aplicação para não acontecer isso, ficando acima
			de todos os elementos do React
	-> captura vários erros: Quantos forem necessários, Error Boundary pode ser criado de forma granular.

	Error Bourndaries não capturam erros em
		-> Manipuladores de evento;
		-> código assíncrono (ex: callbacks de setTimeout ou RequestAnimationFrame);
		-> Renderização no servidor;
		-> Erros lançados na própria erros boundary (ao invés de em seus filhos);
*/

	class ErrorBoundary extends Component {

		constructor(props) {
			super(props)
			this.state = {
				hasError: false
			}
		}

		componentDidCatch(error, errorInfo) {
			console.log('error', error)
			console.log('errorInfo', errorInfo)
			this.state({ setState(state: any, callback: () => void) : void
				hasError: true
			})
		}

		render () {
			if (this.state.hasError) {
				return <img src={ErrorImg} />
			}
			return this.props.children
		}
	}

	export default ErrorBoundary;

	//chamando o erro no arquivo App.js

	function Column({type}) {
		return {
			<tr>
				<td> {type.name.console} </td>
			</tr>
		}
	}














