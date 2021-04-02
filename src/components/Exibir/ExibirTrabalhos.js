import React from 'react'
import CartaoTrabalho from './CartaoTrabalho'
import './ExibirTrabalhos.css'
import axios from 'axios'
import { api, img } from './constantes/API'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';

const BaseContainer = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:8vh;
`
const FormularioContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:flex-start;
`

const InputMaior = styled.input `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 150px;
    height:32px;
    outline:none;
    border-radius:5px;
    border-bottom-color:#3c3c3c;
`

const Title = styled.h2 `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    font-size:48px;
    color:#16c153;
    text-align: center;

`
const InputForm = styled.input`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 320px;
    height:32px;
    outline:none;
    border-radius:5px;
    border-bottom-color:#3c3c3c;
`

const SelectForm = styled.select`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 328px;
    height:36px;
    margin-bottom:8px;
    color:#3c3c3c;
    outline:none;
    border-radius:5px;
`
const InputServico = styled(InputForm)`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 320px;
    height:120px;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom:8px;
    outline:none;
    color:#3c3c3c;
    border-radius:5px;
`
const SubTitulos = styled.p`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* width: 500px; */
    // color:#16c153;
    text-transform: uppercase;
    font-size: 12px;
    margin-left: 15px;
`
const SelecaoPagamento = styled.div `
    display:flex;
    text-align:left;
    justify-content:space-around;
    flex-direction:column;
    padding-left:-200px;
`
// const Pagamento = styled.div `
//     display:flex;
//     position: relative;
//     left: -164px;
//     &:tr:nth-child(2n+1){
//         margin-left:10px;
//     }
// `
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50vw',
    },
    },
}));


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


  onClickContratar = (job) => {
    alert(`Você contratou o serviço: ${job.title}`)
  }
  

  render() {

    const produtoFiltrado = this.state.jobs.filter ( job => {
        
        if ((
          job.title === this.state.valorInputNome 
          || this.state.valorInputNome === '' 
          || job.title.toLowerCase().includes(this.state.valorInputNome)
          || job.title.toUpperCase().includes(this.state.valorInputNome)
          || job.description.toLowerCase().includes(this.state.valorInputNome)
          || job.description.toUpperCase().includes(this.state.valorInputNome)
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
    // const jobsToScreen = produtoOrdenado.map((job) => (

    //     <CartaoTrabalho 
    //     key={job.id}
    //     // cartaoFoto={'../../img/ninja-azul.jpg'}
    //     cartaoFoto={img}
    //     cartaoNome={job.title}
    //     cartaoPreco={job.value}
    //     cartaoDescricao={job.description}
    //     cartaoMetodo={job.paymentMethods} 
    //     cartaoPrazo={job.dueDate}
    //     textoBotao={'Contratar'}
    //     funcaoBotao={() => this.onClickContratar(job.title)}
    //   />



    // )) 
        
        
    return (

      <BaseContainer>
        <Title>Pesquisar Anúncios</Title>
        <FormularioContainer>
            <TextField 
              type='text' 
              size={100} 
              placeholder='Que serviço você procura? Ex.: Assistência Técnica, Consultoria, Web Design, Reformas, Serviços Domésticos e Aulas Particulares' 
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
            />

            <SubTitulos>Ordenar por:</SubTitulos>
            <Select className='selectTamanho'
              value={this.state.valorSelectOrdem}
              onChange={this.onChangeSelectOrdem}
            >
              <MenuItem value='maior preço'>Maior preço </MenuItem>
              <MenuItem value='menor preço'>Menor preço </MenuItem>
              <MenuItem value='maior prazo'>Maior prazo </MenuItem>
              <MenuItem value='menor prazo'>Menor prazo </MenuItem>
              <MenuItem value='ordem alfabética'>Ordem alfabética </MenuItem>
          </Select> 
          <SubTitulos>Filtrar por valor:</SubTitulos>
          <TextField 
              type='number'
              className='minimo'
              value={this.state.valorInputMinimo}
              onChange={this.onChangeInputMinimo}
              placeholder={'Valor mínimo'}
          /> 
          <TextField 
              type='number'
              className="maximo"
              value={this.state.valorInputMaximo}
              onChange={this.onChangeInputMaximo}
              placeholder={'Valor máximo'}
              // onKeyDown={this.onKeyDown}
          /> 
        </FormularioContainer>




        <div className='exibir-cartoes'>
          
          <div className='exibir-grade-cartoes'>

            {/* {jobsToScreen} */}
              {produtoOrdenado.map((job) => {
                  return(
                    <CartaoTrabalho 
                      key={job.id}
                      // cartaoFoto={'../../img/ninja-azul.jpg'}
                      cartaoFoto={img}
                      cartaoNome={job.title}
                      cartaoPreco={job.value}
                      cartaoDescricao={job.description}
                      cartaoMetodo={job.paymentMethods} 
                      cartaoPrazo={job.dueDate}
                      textoBotao={'Contratar'}
                      funcaoBotao={() => this.onClickContratar(job)}
                    />
                  )
              })}
          </div>
        </div>

      </BaseContainer>





          // <div>

          //   <div className='exibir-filtros'>

          //     <h2>Anúncios</h2>

          //     <div className='exibir-inputs'>

          //       <input 
          //         type='text' 
          //         size={90} 
          //         placeholder='Qual serviço você procura? Ex.: Assistência Técnica, Consultoria, Web Design, Reformas, Serviços Domésticos e Aulas Particulares' 
          //         value={this.state.valorInputNome}
          //         onChange={this.onChangeInputNome}
          //     />
          //       <p>Ordenar por:</p>
          //       <select className='selectTamanho'
          //         value={this.state.valorSelectOrdem}
          //         onChange={this.onChangeSelectOrdem}
          //       >
          //           <option value='maior preço'>Maior preço </option>
          //           <option value='menor preço'>Menor preço </option>
          //           <option value='maior prazo'>Maior prazo </option>
          //           <option value='menor prazo'>Menor prazo </option>
          //           <option value='ordem alfabética'>Ordem alfabética </option>
          //       </select> 


          //       <p>Filtrar por valor:</p>
          //       <input 
          //           type='number'
          //           className='minimo'
          //           value={this.state.valorInputMinimo}
          //           onChange={this.onChangeInputMinimo}
          //           placeholder={'Valor mínimo'}
          //       /> 
          //       <input 
          //           type='number'
          //           className="maximo"
          //           value={this.state.valorInputMaximo}
          //           onChange={this.onChangeInputMaximo}
          //           placeholder={'Valor máximo'}
          //           // onKeyDown={this.onKeyDown}
          //       /> 



          //     </div>



          //   </div>

          //   <div className='exibir-cartoes'>
              
          //     <div className='exibir-grade-cartoes'>

          //       {jobsToScreen}

          //     </div>
          //   </div>


          // </div>

    )
  }
}
