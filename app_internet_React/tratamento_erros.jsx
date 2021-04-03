/*
TRATAMENTO DE ERROS
    -> Traz resiliência ao software
    -> Segurança 


//  Tratamento de erros em components
    -> Em JS usamos PropTypes
    -> Podemos usar linguagens tipadas como TypeScript, definindo interfaces   
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Basic = ({ name }) => (
    <p>Meu nome é {name}</p>
)

Basic.propTypes = {
    name: PropTypes
}

// Tratamento em funções
export const soma = (a, b) => a + b;

export const somaSegura = (a, b) => {
    if (typeof a === number && typeof b === number) {
        return a + b;
    } else {
        // vamos convencionar -1 quando a soma for inválida 
        return -1;
    }
}

// Tratamento em forms

class NameForm extends React.Component {

render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;

// Tratamento de erros em APIs

import { fetchCientistasPending, fetchCientistasSuccess, fetchCientistasError } from '../../../redux/actions/cientistas';

function fetchCientistas() {
  return dispatch => {
    dispatch(fetchCientistasPending());
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCientistasSuccess(res));
      })
      .catch(error => {
        dispatch(fetchCientistasError(error));
      })
  }
}

export default fetchCientistas;