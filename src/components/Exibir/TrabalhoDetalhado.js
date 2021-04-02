import React from 'react'
import CartaoTrabalho from './CartaoTrabalho'
import './ExibirTrabalhos.css'
import axios from 'axios'
import { api, img } from './constantes/API'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


export default class TrabalhoDetalhado extends React.Component {



    render() {
        return (
            <div className='cartaoDetalhado-container'>
            {/* {this.props.id} */}

        <div className='cartao-foto'>
            <img className='foto' src={this.props.cartaoFoto} alt='Imagem do Card'/>
        </div>

        <div className='cartao-dados'>


            <div className='cartao-nome-e-valor'>
                <div className='cartao-nome' >
                 <b>{this.props.cartaoNome}</b>
                </div>
                <div className='cartao-valor'>
                    <b>{`R$ ${this.props.cartaoPreco}`}</b>
                </div>
            </div>


            <div className='cartao-so-descricao'>
                {this.props.cartaoDescricao}
            </div>


            <div className='cartao-metodo-e-prazo'>
                <div className='cartao-metodo'>
                 Método de pagamento: <strong>{this.props.cartaoMetodo}</strong>
                </div>
                <div className='cartao-prazo'>
                 Prazo: <strong>{this.props.cartaoPrazo}</strong>
                </div>
            </div>



        </div>
            {/* <Button onClick={this.props.funcaoBotao} color="primary" size="large" style={{maxHeight: '50px', marginTop: '50px', backgroundColor: '#16c153', marginBottom: '50px', color: 'white'}} variant="contained" >{this.props.textoBotao}</Button> */}
    </div>
        )
    }
}