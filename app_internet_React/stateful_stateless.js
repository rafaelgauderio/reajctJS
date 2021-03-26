Stateful vs Stateless

	STATEFUL
		-> Usa estados
		-> Podemos setar o estado inicial de um componente com props.
		-> Exemplo:  um estado chamado shoe, setado inicialmente como ‘tênis’,
				 podemos trocar o seu estado, por ex, usando this.setState({ shoe: sapatenis’ })

			Initualization
				setup props and state 

			Mounting
				componentWillMount
				render
				componentDidMount

			Updating
				props
					componentWillReceiveProps
					shouldComponentUpdate
					componentWillUpdate
					render
					componentDidUpdate

				states
					shouldComponentUpdate
					componentWillUpdate
					render
					componentDidUpdate

			Unmounting
				componentDidUnount

		-> Possui gerenciamento de estados no componente.
		-> Construídos usando classes em JS


	STATELESS
		-> Não usa estados
		-> Não possui gerenciamento de estados no componente
		-> Construídos usando funções em JS
		-> Componente usado para redenrizacao de uma imagem, ícone
		-> código fica mais compacto
		-> A nomenclatura foi atualizada
			Class components 
			Function components
		-> Com hooks, estados são manipuláveis em function components 
			Com a chegada de hooks, podemos criar componentes funcionais com estados.

