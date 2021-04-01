import React from 'react'
import CartaoTrabalho from './CartaoTrabalho'
import './ExibirTrabalhos.css'
import axios from 'axios'

export default class ExibirTrabalhos extends React.Component {

  state={
    jobs: []
  }

    //se tivesse inputs, funções de controle viriam aqui

    componentDidMount() {
      this.getApiData()
  }

  getApiData = () => {
    axios
    .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasThree/jobs',
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


    //funções de filtragem para enviar ao JSX (tal como o map)
    const jobsToScreen = this.state.jobs.map((job) => (

      // <div className='list-item' key={job.id}>


      <CartaoTrabalho 
      key={job.id}
      cartaoFoto='https://rollingstone.uol.com.br/media/_versions/village_people_michael_putland_getty_widelg.jpg'
      cartaoNome={job.title}
      cartaoPreco={job.value}
      cartaoDescricao={job.description}
      cartaoMetodo={job.paymentMethods} 
      cartaoPrazo={job.dueDate}
    />

      //  <Button
          // texto='DELETAR'
          // funcao={() => this.onClickDelete(job)}
      // /> 
      // </div>
    )) 

        
    return (
      <div>

        <div className='exibir-filtros'>

          <h2>Anúncios</h2>

          <div className='exibir-inputs'>

            <input type='text' size={90} placeholder='Qual serviço você procura? Ex.: Assistência Técnica, Consultoria, Web Design, Reformas, Serviços Domésticos e Aulas Particulares' />
            <select>
              <option>Ordenar</option>
            </select>
            <select>
              <option>Filtrar</option>
            </select>

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
