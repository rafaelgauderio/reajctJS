/*

WEBPACK - principais conceitos
		Denifição: É um module bundlers (um empacotador de módulos para aplicações JS).
		https://github.com/tautorn/introduction-reactjs
		tem suporte a: Fontes, CSS, Imagens, HTML, JS e Plugins.

		-> ENTRY - utilizando grafo, o webpack precisa de um ponto de entrada para buscar todos
				os módulos e dependências.
		-> OUTPUT - É para determinar quais são os bundlers que o webpack irá emitir
						path: path.resolve(__dirname, 'dist')

		-> LOADERS - É para permitir que o webpack gerencie arquivos não javascript

		-> PLUGINS - Podem ser utilizdos para otimização de pacotes, minificação, injeção de scripts

		-> MODE - Utilizados para abordagem de configuração zero. É possível configurar módulos como
				production, development ou none.
				-> PRODUCTION trás otimizações internas. Gera um arquivo final
				-> DEVELOPMENT - É executado com três plugins: UglifyJsPlugin, ModuleConcatenationPlugin
						e NoEmitOnErrosPlugin
				-> NONE - não passar nenhum configuração

		Babel -> É um compilador e transpilador de JS.

		configuração

		# npm i -D webpack webpack-cli
		# npm init
		# cat package.json
		# "build": "webpack" --mode production"
		# npm install --save-dev webpack webpack-cli
		# vim webpack.config.js
						filename: 'bundler.js'
						loader: "babel-loader"
						sourcemap: true --gerar mapeamento de todos os arquivos
		# npm run build
			-- adicionando o babel ao projeto
		# npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
		# vim .babelrc
				"@babel/preset-env"
				"@babel/preset-react"
		# npm -i react react-dom
			-- aquivos necessários
			src/index.js
			src/App.jsx

			import React from "react";
			import ReactDOM from "react-dom";
			import App from "./App";
			ReactDOM.render(<App />,document.getElementById("app"));
				-- adicionar o módulo dev no packge.json
				"dev": "webpack --mode development"
		# npm run dev
		# npm run build
		# npm i -D webpack-dev-server
				-- não vai ser preciso criar um servidor para subir aplicação	
				-- adicionar o módulo dev-server no packge.json
				"start:dev": "webpack-dev-server"
		# npm run start:dev
				-- http://localhost:8080


*/


