LISTAS E CHAVES

	-> Rendeziranzo Múltiplos componentes
			{hasCustomer ? renderShowHistory : renderAddCustomer}

	-> Componente de lista básico

	-> Chaves
			As chaves ajudam o React a identificar quais itens sofreram alterações,
				 foram adicionados ou removidos.
			Necessário informar o parâmetro key no elemento <li>.

	-> Extraindo Componentes com Chaves

	-> Chaves devem ser únicas apenas entre Elementos irmão.
			

----------------------------------------------------------------
MANIPULANDO EVENTOS
		https://pt-br.reactjs.org/docs/handling-events.html

	-> É muito semelhante a manipular elementos do DOM, porém existem algum diferenças sintáticas
	-> Eventos em React são nomeados usando CAMELCASE ao invés de letras minúsculas.
	-> Com o JSX passamos uma função como manipulador de eventos ao invés de um texto.
				button onclick={activateLasers}> Ativar laser </button>
	-> Eventos
	-> Passando argumentos para Manipuladores de eventos
			<button onClick={(e) => deleteRow(id, e)}>Deletar linha</button>




	
	

