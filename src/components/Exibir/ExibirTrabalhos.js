import React from 'react'
import CartaoTrabalho from './CartaoTrabalho'
import './ExibirTrabalhos.css'
import axios from 'axios'
import { api, img } from './constantes/API'

export default class ExibirTrabalhos extends React.Component {

  state={
    valorSelectOrdem: 'maior preço',
    valorInputMinimo: 100,
    valorInputMaximo: 5000,
    valorInputNome: '',

    jobs: []
  }

    //se tivesse inputs, funções de controle viriam aqui

  componentDidMount() {
      this.getApiData()
  }

  onChangeSelectOrdem = (event) => {
    this.setState( { valorSelectOrdem: event.target.value } )
  }

  onChangeInputMinimo = (event) =>{
    this.setState( { valorInputMinimo: event.target.value } )
  }
  onChangeInputMaximo = (event) => {
    this.setState( { valorInputMaximo: event.target.value } )
  }
  onChangeInputNome =(event) => {
    this.setState( { valorInputNome: event.target.value } )
  }


  getApiData = () => {
    axios
    .get(
        api,
    //     {
    //         headers: {
    //             Authorization: 'marcos-maia'
    //         }
    //     }
    )
    .then((res) => {
        this.setState({ jobs : res.data.jobs})
        console.log(res.data.jobs);

    })
    .catch((err) => {
        console.log(err.response.data)
    })

  }

  

  render() {

    const produtoFiltrado = this.state.jobs.filter ( job => {
      
      if ((
        job.title === this.state.valorInputNome 
        || this.state.valorInputNome === '' 
        || job.title.includes(this.state.valorInputNome)
        || job.description.includes(this.state.valorInputNome)
        ) 
      && job.value >= this.state.valorInputMinimo && job.value <= this.state.valorInputMaximo ) {
          return true
      }
      return false
  })
  
    //ORDENAÇÃO COM MÉTODO SORT
    
    // const produtoOrdenadoPrazo = produtoFiltrado.sort( (a, b) => {
    //   return this.state.prazoSelectOrdem === 'menor prazo' ? a.value - b.value : b.value - a.value 
    //   })
  
    // const produtoOrdenado = produtoFiltrado.sort( (a, b) => {
    //   switch (this.state.valorSelectOrdem) {
    //     case 'menor preço':
    //       return a.value - b.value
    //       break
    //     case 'maior preço':
    //       return b.value - a.value
    //     case 'menor prazo':
    //       return a.dueDate - b.dueDate
    //     case 'maior prazo':
    //       return b.dueDate - a.dueDate
    //     default:
    //       return a.value - b.value
    //   }
    // })

    // const produtoOrdenado = produtoFiltrado.sort( (a, b) => {
    //   return this.state.valorSelectOrdem === 'menor preço' ? a.value - b.value : b.value - a.value 
    //   })

      const produtoOrdenado = produtoFiltrado.sort( (a, b) => {
        if (this.state.valorSelectOrdem === 'menor preço') {
          return a.value - b.value
        } else if (this.state.valorSelectOrdem === 'maior preço') {
          return b.value - a.value
        } else if (this.state.valorSelectOrdem === 'maior prazo') {
          return b.dueDate - a.dueDate
        } else if (this.state.valorSelectOrdem === 'menor prazo') {
          return a.dueDate - b.dueDate
        } else if (this.state.valorSelectOrdem === 'ordem alfabética') {
          return a.title < b.title
        } else {
          console.log("nenhum")
        }
      })

    // JSX (tal como o map)
    const jobsToScreen = produtoOrdenado.map((job) => (

        <CartaoTrabalho 
        key={job.id}
        // cartaoFoto={'../../img/ninja-azul.jpg'}
        cartaoFoto={img}
        cartaoNome={job.title}
        cartaoPreco={job.value}
        cartaoDescricao={job.description}
        cartaoMetodo={job.paymentMethods} 
        cartaoPrazo={job.dueDate}
      />
  
      )) 
        
        
    return (
      <div>

        <div className='exibir-filtros'>

          <h2>Anúncios</h2>

          <div className='exibir-inputs'>

            <input 
              type='text' 
              size={90} 
              placeholder='Qual serviço você procura? Ex.: Assistência Técnica, Consultoria, Web Design, Reformas, Serviços Domésticos e Aulas Particulares' 
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
          />
            <p>Ordenar por:</p>
            <select className='selectTamanho'
              value={this.state.valorSelectOrdem}
              onChange={this.onChangeSelectOrdem}
            >
                <option value='maior preço'>Maior preço </option>
                <option value='menor preço'>Menor preço </option>
                <option value='maior prazo'>Maior prazo </option>
                <option value='menor prazo'>Menor prazo </option>
                <option value='ordem alfabética'>Ordem alfabética </option>
            </select> 


            <p>Filtrar por valor:</p>
            <input 
                type='number'
                className='minimo'
                value={this.state.valorInputMinimo}
                onChange={this.onChangeInputMinimo}
                placeholder={'Valor mínimo'}
            /> 
            <input 
                type='number'
                className="maximo"
                value={this.state.valorInputMaximo}
                onChange={this.onChangeInputMaximo}
                placeholder={'Valor máximo'}
                // onKeyDown={this.onKeyDown}
            /> 


          </div>



        </div>

        <div className='exibir-cartoes'>
          
          {/* <h3>Exibir Cards de trabalhos</h3> */}

          <div className='exibir-grade-cartoes'>

            {jobsToScreen}

          {/* <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
                  <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          />
          <CartaoTrabalho 
            cartaoFoto='https://picsum.photos/199/249'
            cartaoNome='Nome do Trabalho'
            cartaoPreco='R$ 200,00'
            cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
            cartaoMetodo='à vista'
            cartaoPrazo='30 dias'
          /> */}
          </div>
        </div>


      </div>
    )
  }
}
