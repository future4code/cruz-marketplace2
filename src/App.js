import React from 'react'
import './App.css'
// import AppContainer from './components/AppContainer'
import Formulario from './components/Criar/Formulario'
import Home from './components/Home'
import ExibirTrabalhos from './components/Exibir/ExibirTrabalhos'
import Footer from './components/Base/Footer'

import Header from './components/Base/Header'

// import Home from './components/Home'

// import { AppContainer } from './components/AppContainer'


// export default class App extends React.Component{
	// 	render(){
		
		
export default class App extends React.Component{
	
	state = {
		page: 'home',
	}
	
	  changePage = () => {
		if (this.state.page === "home") {
		  this.setState({ page: "home" });
		} else if (this.state.page === "formulario") {
		  this.setState({ page: "formulario" });
		} else if (this.state.page === "exibir") {
			this.setState({ page: "exibir" });
		} else {
			this.setState({ page: "home" });
		}
	  };
	
	  	changeHome = () => {
			this.setState({ page: "home" });
		}

		changeCriar = () => {
			this.setState({ page: "formulario" });
		}

		changeExibir = () => {
			this.setState({ page: "exibir" });
		}


	  renderPage = () => {
		switch (this.state.page) {
		  case "home":
			return <Home 
				funcaoSobre={this.changeHome} 
				funcaoCriar={this.changeCriar} 
				funcaoExibir={this.changeExibir} 
			/> ;
		  case "formulario":
			return <Formulario 
			funcaoSobre={this.changeHome} 
			funcaoCriar={this.changeCriar} 
			funcaoExibir={this.changeExibir} 
		/>;
		case "exibir":
			return <ExibirTrabalhos 
			funcaoSobre={this.changeHome} 
			funcaoCriar={this.changeCriar} 
			funcaoExibir={this.changeExibir} 
		/>	
		  default:
			return <Home /> ;
		}
	  };

	// switch (this.state.page) {
	// 	case 'home':
	// 		return  <Home />
	// 	case 'formulario':
	// 		return   <Formulario />
	// 	case 'exibir':
	// 		return  <ExibirTrabalhos />
	// 	default:
	// 		return  <Home /> 
	// }

	render(){
		return(
			<div>

				{ this.renderPage()}



				{/* <Header/> */}
				{/* <Home /> */}

				{/* <h1>Teste</h1> */}
				{/* <Home /> */}
{/* 
				<Formulario />
				<ExibirTrabalhos /> */}
				{/* <Footer /> */}

			</div>
		)
		
	}
}
