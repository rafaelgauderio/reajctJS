Redux + Rest
	-> Suponha um sistema de notificações ou um sistema de logging
	-> Necessidade de manter a sincronia, independente da tela onde estiver
	-> Uma maneira de fácil de resolver seria armazenar os dados do serviço no Redux

Reduz Middlewares
	-> Servem para, por exemplo, lidar com operações assíncronas que envolvem redux
	-> É uma camada entre o disparo de uma ação e o momento que ela atinge o reducer
	-> Utilizados para uma variedade de funções, entre elas chamadas de APis de serviço
	-> Exemplo:
			-> Imagine um sistema de log, onde toda action disparada em um sistema é impressa
					com a log na tela
					ADD_TODO
						dispatching: Object {type: "ADD_TODO", text: "USe Redux"}
						next state: > Object {visibilityFilter: "SHOW_ALL", todos: Array[1]}
					ADD_TODO

					COMPLETE_TODO

					SET_VISIBILITY_FILTER

		// Tentativa1: Logging Manual
			store.dispatch(addTodo('Use Redux'))

			const action = AddTodo('Use Redux');

			console.log('dispaching',action)
			store.dispatch(action)
			console.log('next state', store.getState())

		//Tentativa2: Encapsulando o dispatch
			function dispatchAndLog(store, action) {
				console.log('dispaching',action)
				store.dispatch(action)
				console.log('next state', store.getState())
			}


			dispatchAndLog(store, addTodo('Use Redux'))

		// Tentativa3: "gambiarra" para subsituir o dispatch
		const next = store.dispatch
		store.dispatch = function dispatchAndLog(action) {
			console.log('dispatching', action)
			let result = next(action)
			console.log('next state', store.getState())
			return result
		}

		// Tentativa5: Removendo a "gambiarra"

		function logger(store) {
			return function wrapDispatchAddLoggin(next) {
				return function dispatchAndLog(action) {
					console.log('dispatching', action) 
					let result = next(action)
					console.log('next state',store.getState())
					return result
				}
			}
		}

		// Tetantiva6: Aplicando o middleware na mão

		function applyMiddleware(store, middlewares) {
			middlewares = middlewares.slice()
			middlewares.reverse()
			let dispatch = store.dispatch
			middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
			return Object.assign({}, store, {dispatch})

		}

		// Diferenças do applyMiddleware() do Redux
			1. Só expõe um subconjunto da Store API para o middleware: dispatch e getState()
			2. Fica fácil saber se store.dispatch(action) vai realmente percorrer a cadeia do 
				middleware de novo.
			3. Opera em cima de createStore() ao invés da store em si

		// Middlewares Redux mais usados no mercado
			1. redux-thunk
				// Vem do inglês think e representa uma função que retorna outra função.
				//Um thunk é uma função que chama outra função
				function some_function() {
					// faça algo aqui
						return function thunk() {
							//faça algo pensado depois
					}
				}

		// isntalando
			# yarn add redux-thunk

			2. redux-saga




















