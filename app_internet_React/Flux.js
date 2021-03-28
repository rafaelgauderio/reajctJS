FLUX
	-> Facebook criou o Flux (arquitetura) para resolver o problema de notificação de mensgens
	-> É um padrão de projeto para tráfego de dados de maneira unidirecional
	-> ACTION -> DISPATCHER -> STORE -> VIEW
		Action: é como um telégrafo. Ele formata a mensagem a ser enviada
			As actions formatam a mensagem a ser enviada para o dispatcher.
		Dispatcher: É como uma telefonista, ele sabe todos os callbacks para diferentes Stores
		Store: É como um gerente super controlador. Ele guarda a informação e todas as alterações
				têm que ser feitas por eles mesmo.
		View: Não é a tela em si. É como um gerente intermediário (middleware) que recebe as notificações
				da store e passa os dados para as visões abaixo dela.

	-> Implementações (Arquitetura baseada em flux)
		-> Redux (mais popular)
		-> Reflux
		-> Mobx
		-> Vuex (baseado em Redux e Elm)
		-> NgRx/store (baseada em Redux e RxJS)

	-> Bibliotecas baseadas em Flux
		Serverm para comunicações entre componentes
		Centralizam a informação
		"Flux libraries are like glasses: you will Know when you need them." - Dan Abramov


