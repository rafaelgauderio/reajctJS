import React from 'react'

function Button(props) {

	const {name, onCLick} = props
	return (

		<button onCLick={onCLick}> {name} <button>
		
		)

}

export default Button