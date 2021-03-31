import React from 'react'
import Formulario from './components/Criar/Formulario'
import Home from './components/Home'
// import { AppContainer } from './components/AppContainer'


export default class App extends React.Component{
	render(){
		return(
			<div>
				{/* <h1>Teste</h1> */}
				<Home />
				<Formulario />
			</div>
		)
		
	}
}

