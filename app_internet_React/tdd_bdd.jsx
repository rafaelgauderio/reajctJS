/*
TDD
	-> Test-Driven Development
	-> Antecipar erros a nível de desenvolvimento
		Teste escrito antes da funcionalidade
	-> Não descarta a presença de um tester

	-> CICLO
		RED (write a test that fails) -> GREEN (Make the code work) -> REFACTOR (Eliminate redundancy)

	-> VERTENTES
		-> Teste Unitário
		-> Teste end-tpEmd (E2E), teste de ponta a ponta

	-> BIBLIOTECAS para fazer teste
		Jest - utiliza jasmine em JavaScript
		React-testing-Library
		Shallow
		Enzyme
		Chai
		Mocha
		Selenium
		Puppeteer
	*/

		//Exemplo de teste de soma
		function soma(a, b) {
			returb a +b;
		}

		import { soma } from './soma';

		describe('testendo função soma', () ) => {
			it('A soma deve dar 5'),() => {
				const result = soma(2,3);
				expect(result).toBe(5);
			}
		}

		/*-> Teste de componente
			 # yarn add --dev @testing-library/react

			 # yarn add --dev @testing-library/jest-dom/extend-expect
		*/

		import React from 'react';
		const Basic = (props) => (
			<p>MEu nome é {props.name}<./p>
		)
		export default Basic;



		import React from 'react';
		import Basic from './Basic';
		import { render } from '@testing-library/react'
		import '@testing-library/jest-dom/extend-expect';

		describe('Testando Basic', () =>  {
			it('O componente Basic deve renderizar corretamente', () =>  {
				const { baseElement } = render (<Basic name="Rafael" />);
				expect(baseElement).toHaveTextContent('Meu nome é Rafael');
			}) 
		})

		/* Muitas aplicações exigem em torno de 70% de cobertura
		BDD
			-> Behavior-Driven Development (teste baseado em comportameto)
			-> Teste de especificação
					Une expecificação, teste automatizado e premissa de teste (documento de teste)


		BDD e sintaxe Gherkin
			-> Sintaxe de steps para definir cenários
			-> Descreve cada funcionalidade por feature (caso de uso)

		PALAVRAS RESERVADAS NO JEST
			Funcionalidade
			Cenario
			Dado
			Quando 
			e
			Entao

		BIBLIOTECAS MAIS UTILIZADAS
			-> Jest-cucumber
			-> Chai

		# yarn add --dev jest-cucumber
			

		*/
