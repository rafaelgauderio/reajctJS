/*

https://github.com/Tautorn/advanced-reactjs-dio

SMART COMPONENTS
	-> Chamados também de container components
	-> Preocupam-se como as coisas vão funcionar
	-> Podem conter Smart e Dumb components
	-> Providenciam dados e padrões de apresentação ou outros containers
	-> Via de regra, possuem estados e podem chamar outros fluxos do sistema
	-> Esses componentes possuem regras espefícicas
	-> Utilizar o memo para evitar uma redenrização desnecessária. Ganho de desempenho na aplicação
	-> Pode manipular dados que vem de fora, manipula os dados de uma Galleria


		Exemplos: UserGallery, UserPage, FilterBook, FollowersSidebar, ListCards
*/

//arquivo App.js

import React, { useState } from 'react'
import Button from './Component/Button'
import Calc from './Component/Calc'
import PhotosGallery from './Component/PhotosGallery'



function App () {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/nature',
  ]

  return (
    <>
     <h1>Galeria de fotos<h1>
     <PhotosGallery
        photos={photos}
     />
    <>
  )
}

export default App

// arquivo Component/PhotosGallery/index.js

import React, { memo, useState } from 'react'
import Button from '../Button'

function PhotosGallery(props) {
  const { photos } = props

  const [gallery, setGallery] = useState(photos)
  
  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key) 
    setGallery(newGallery)
  }

  const renderPhotos = (img, key) => {
    return (
      <div>
        <img src={img} />
        <Button onClick={() => handleRemove(key)}>
          Remover {key}
        <Button>
      <div>
    )
  }

  return (
    <div>
      {gallery.map(renderPhotos)}
    <div>
  )
}

export default memo(PhotosGallery)