REDUX
	REACT -> ACTION -> STORE <-> REDUCER
					-> STORE -> REACT

	-> Princípios
		1. Single source of truth: Uma única store 
		2. Stare é read-only
		3. Mudanças são feitas com pure functions

	-> Actions
		-> São com em flux, com a diferença que não enviam a action em si para o dispatcher
		-> Retornam um objeto de action formatado

	-> Store 
		-> Em flux: diversas Stores
		-> Em redux: uma única Store
		-> A Store que cuida de toda a árvore de estados
		-> Os reducers que cuidam de descobrir qual o estado muda 

	-> Reducers	
		-> Em redux não há dispatcher (simplifica e divide o trabalho da Store)
		-> A Store se conect ao root reducer, que divide os estados em pequenas reducers para
		-> Root Component: O Provider recebe como atributo a store criada, usando-a onde ela for necessária para a aplicação.
				descobrir como lidar com esse estado
		-> OS estados aqui são imutáveis

	-> Views
		-> Em react, adiciona-se na camada de View 3 novos conceitos para conectar a View à Store
			1. Provider
			2. connect()
			3. selector


	-> extensão redux-devtools: Serve para monitorar os estados de uma store Redux.






