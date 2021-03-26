https://github.com.br/eduardogc/digital-one-react-intermediario

FORMULÁRIOS

	<form>
		<label>
			Nome:
			<input type="text" name="nome" />
		<./label>
		<input type="submit" value="Enviar" />
	<./form>

	Em HTML <input>, <textarea> e <select> têm um estado interno
	Em React, podemos controlar o estado por:
		state
		setState

	Componetes controlado
		Tanto select, input ou textarea aceitam um atributo value
		Podemos mudar esse valor usando o atributo onChange

	Componente não-controlado
		A tag input é read-only
		É definida uma referência para o campo input
		No uso de componentes não controlados, pegamos apenas a referência do estado do DOM.

		bibliotecas utilizadas
			Formik
			Redux-forms







