Rest HTTP com React
	-> Servem para conectar um ou mais servidores HTTP
		GET: listagem
		POST: criação
		DELETE: deleção
		PUT: alteração ou Fetch para alterar
			Fetch API (O fetch fornece suporte a PWAs.)
			Axios

		-> FETCH API
			-> Nativa do browser
			-> Oferece uma alternativa ao XMLHttoRequest() e jQuery.ajax()
			-> Suporte a Service Workers
			-> Algumas diferenças
					-> Não envia nem recebe cookies (precisa definir a opção credentials)
					-> Não rejeita o status do erro HTTP
		-> Axios
			-> Lib de HTTP API
			-> Cross-browser
			-> Pode monitorar o progresso de um request 
			-> Melhor tratamento de erros
			-> Melhor teste

			# yarn add axios
				axios.get('https://...')
					.then(data =>) {
						alert(`Mensagem de Alerta ${data}`);
					}
					.catch(error => {
						alert('Erro a seguir' + erro);
					});


				// para deletar
				axios.delete(url)
