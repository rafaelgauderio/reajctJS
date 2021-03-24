info em httos://tautorn.com.br
brunocarneirofs@gmail.com

CICLO DE VIDA
	-> 1. INICIALIZAÇÃO
	-> 2. MONTAGEM
	-> 3. ATUALIZAÇÃO
	-> 4. DESMONTAGEM

CICLO DE VIDA

	componentWillMount (deprecated 17.0)
	componentWillReceivePropos (deprecated 17.0)
	componentWillUpdate (deprecated 17.0)

	componentDidUpdate
	componentDidCatch
	componentWillUnmount -> escrita do método é retornando uma função dentro do useEffect.
	shouldComponentUpdate

	getDerivedStateFromProps
	getSnapshotBeforeUpdate

	-> Criando um projeto
		# npx create-react-app advanced-reactjs-nome_projeto
		# cd nome_projeto 
		# npm run start


HOOKS
	-> São um nova adição ao React 16.8. 
	-> Permite usar state e outros recursos do React sem escrever em uma classe
	-> não usa classe, usa função ou constante
	-> código fica muito mais legível
	-> Não utlizar Hoooks dentro de funcções JavaScript comuns
	-> Chamar Hooks em componentes React
	-> Chamar Hooks dentro de Hooks Customizados
	

		useState -> utilizado para manipulação do estado de uma página utilizando React
		useEffect -> Controlar o ciclo de vida da página.
				  -> Passagem de dependências que serão utilizadas no hook e/ou para ficar “escutando” uma determinada variável.
			UseEffect(() => {
				console.log('componetDidUpate', loading)				
			}, [loading])


		useContext
		useReducer
		useCallback
		useMemo
		useRef
		useImperativeHandle
		useLayoutEffect
		useDebugValue

	--
			componentDidMount
			componentDidMount() {
   		this.setState({
        	name: ‘Rafael’
    	}) 
	}

	-- abaixo o mesmo código usando hooks

	useEffect(() => { setName('Rafael') }, [])



CONTEXT API
	Context API providencia uma forma de enviar dados através da árvore de componentes
			sem a necessidade de encaminhar via props manualmente para cada nível.
	
	import React from 'react'
	import { ThemeContext, themes } from '.Theme'
	import Card from './Card'

	function App () {

		const [token, setToken] = useState()

		useEffect(( => {
			setTimeout(() => {
				setToken('7474343040930203')
			}, 5000)
		}, [setToken])

		return {
			<ThemeContext.Provider value={themes.primary}>
			<Card />
			<ThemeConext.Provider>
		}
	}

	export default App

	Utilizando contextApi, qual é a forma correta de criar um contexto?
		-> const myContext = React.createContext()

	
	

	Dada uma aplicação que tem um contexto criado utilizando ContextApi, 
	como é possível receber o contexto atual, em um component, enviado através do Provider?
		-> Utilizando o consumer.