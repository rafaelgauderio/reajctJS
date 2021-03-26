/*
TYPECHECKING 
	-> Quando um valor errado é enviado através de uma prop,um warning vai ser apresentado
			no console JavaScript
	-> Na medida que a aplicação cresce, cresce o número de erros capturados. Em algumas 
			aplicaçõe é possível usar extensões do javaScript com Flow ou TypeScript para
			checar os tipos de todas a sua aplicação. Mesmo não usando-as, o Reacto possui
			algumas habilidade de chegagem de tipos nativas
*/
 // no App.js

 import PropTypes from 'prop-types'

 // No PetShop.js

 function PetShop (props) {

 	//codigo
 }

 // definindo propriedades padrão

 PetShop.defaultProps = {
 	// se o campo é obrigatório não faz sentido setar um valor padrão para caso o usuário não preencher
 	cats: 0,
 	customers: []
 }

PetShop.PropTypes {
	dogs: PropTypes.number.isRequired,
	cats: PropTypes.number,
	customers: PropTypes.array,
	customerName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
	status: PropTypes.oneOf(["Completed","Disable"])
}

export default PetShop