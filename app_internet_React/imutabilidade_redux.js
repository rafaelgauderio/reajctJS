IMUTABILIDADE E REDUX

	-> IMUTABILIDADE
		1. Uma vez criada, uma coleção não pode ser alterada
		2. Persistência. Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter)
				como um conjunto.
		3. Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a 
				cópia e aumentando a performance.

			-> BENEFÍCIOS
				-> Performance
				-> Programação mais simples
				-> Debugging mais simples (detecção de mudanças)

		-> Para ter performance em reacte, use dados IMUTÁVEIS
		-> Você consegue usando o shouldComponentUpdate ou React.PureComponent (faz a mudança através
					de comparação rasa/shalow).

		-> PROBLEMA
			-> O PureComponent vai fazer uma comparação rasa entre os valores antigos e novos
					de this.props.words
			-> O código muda words no handleClick do WorkAdder, mas mesmo mudando as palavras
					elas serão consideradas como iguais.

		-> SOLUÇÃO DOS PROBLEMAS
			-> Evitar mudar valores ou estados
					handleClick() {
						this.setState(satete => ({ 
							words: [...state.words, 'palavras'],	
						} )) ;
					};
			-> Immutable.js
				-> Biblioteca que fornece coleções persistentes e imutáveis
				-> Permite detecção barata de alterações nos objetos

			-> Outras Libs para fazer IMUTABILIDADE
				-> Immer
				-> Immutability-helper
				-> Seamless-immutable

		-> Imutabilidade e um pré-requisito no REDUX
		-> Redux e React-Redux utilizam comparações rasas
		-> Manipulação de dados é mais segura
		-> Time-travel debugging
		-> Os reducers dividem o objeto de estados em domínios por uma chave;
		-> combineReducers chega mudanças usando comparações rasa.
				1. Fazem a interação nos reducers
				2. Criam um novo objeto de estado a apartir dos estados retornados para cada reducer
		-> connect gera componentes que fazem comparação rasa com o estado root
		-> retornam o valor para a função mapStateToProps, verificando aquelas que precisam de uma operação
				de re-render.

					// Não conseguimos trabalhar com estruturas mutáveis em Redux
					-> Pois, o sistema de detecção de mudanças é feito através de comparações shallow,
							 também chamadas de comparações rasas.
				

				