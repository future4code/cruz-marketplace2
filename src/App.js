import React from 'react'
// import AppContainer from './components/AppContainer'
import Formulario from './components/Criar/Formulario'
import ExibirTrabalhos from './components/Exibir/ExibirTrabalhos'
import Footer from './components/Base/Footer'
import Header from './components/Base/Header'

// import Home from './components/Home'
// import { AppContainer } from './components/AppContainer'


export default class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				{/* <Home /> */}
				<Formulario />
				<ExibirTrabalhos />
				<Footer />
			</div>
		)
		
	}
}

