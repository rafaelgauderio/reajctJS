
https://github.com/Tautorn/introduction-reactjs
brunocarneirofs@gmail.com


	HISTÓRIAS E CONCEITOS DO ReactJS
	 	-> DEFINIção
	 		-> É uma biblioteca JavaScript para criar interfaces de usuário para aplicações web
	 		-> Não é um framework
	 		-> React é uma SIMGLE PAGE APPLICATION = aplicação única
	 		-> Criado em 2011 por Jordan Walke no facebook, baseado em XHP
	 				-> utilizado no mural de notícias da ferramenta
	 				-> Ulizado no Instagram, Reactive Native,
	 				-> Em 2013 virou OpenSource na JSConf
	 		-> vantagens: Não fica amarrado a um framework, usa muito componentização
	 		-> desvantagens: ecossistema muito grande
	 		-> react.js atrás apenas do jquery
	 		-> É uma linguagem DECLARATIVA
	 		-> Preocupada apenas com o que é exibido na interface para o usuário
	 		-> Utilizado em front-end e back-end.
	 		-> Baseado em COMPONENTES (pedaços a serem encaixados durante o desenvolvimento)

	 JSX
	 	-> Não é html e nem uma string
	 	-> É uma linguagem de marcação
	 			const element = <h1> Mensagem! <h1>
	 	-> React não separa as tecnoogias colocando marcação em arquivos separados, e sim
	 			separa conceitos e mantém o código pouco acoplado chamando-os de componentes.
	 	-> Não é obrigatório a utilizaçã do JSX.
	 	-> Sintax Suggar para React.createElement
	 	-> Browser não interpreta o JSX, é necessário uns TRANSPILADOR de código, mais utilizado
	 			é o BABEL
	 	-> Dentro do html para executar algum JavaScript tem que colocar entre chaves

	 RENDERIZAÇÃO
	 	-> Renderização é feita através de NÓS RAIZ
	 	-> Utiliza o VIRTUAL DOM;
	 	-> Renderização de Elementos
	 	-> Componentes seriam como peças de lego (acaba tendo muito aproveitamento de código)
	 	-> ReactDOM.render para renderização
	 	-> React pensa em como a interface deve estar, alterando somente o necessário do DOM.

	COMPONENTES E PROPS
		-> Função e Classe (mandeiras de criar componentes)
				-> JavaScript não tem classe bem definida, tem prototipo
		-> Props
		-> Composição de Componentes
		-> Extração de Componentes
		-> consigo acessar tudo que estiver dentro de um componente através de CHILDREN

	ESTADO E CLICO DE VIDA
		-> Inicialização = props e state
		-> Montagem = componetWillMount -> render -> componetDidMount
		-> Atualização = props (componenteWillReceiveProps -> shouldComponentUpdate -> 
								componetWilldUpdate -> render -> componetDiddUpdate) 
						 state (shouldComponentUpdate -> componetWilldUpdate ->
						 		 render -> componetDiddUpdate)
		-> Desmontagem = componetWillUnmont

		-> Toda vez que uma propriedade é alterada o estado, vai renderizar a página novamente
		-> Nenhum componente pai ou filho devem saber se outro componente possui estado ou não
		-> O Estado é apenas local ao componente e caso seja necessário enviar algum atributo
				para outro então é feito via props

		ECOSSISTEMA
			-> React Router;
			-> Redux;
			-> Material UI;
			-> Ant-Design;
			-> Storybook;
			-> Gatsby;
			-> Jest;
			-> React i18n Next.








		
