import React from 'react'
import CartaoTrabalho from '../components/CartaoTrabalho'

export default class ExibirTrabalhos extends React.Component {
  render() {
    return (
      <div>
        <p>Exibir Cards de trabalhos</p>
        <CartaoTrabalho 
          cartaoFoto='https://picsum.photos/199/249'
          cartaoNome='Nome do Trabalho'
          cartaoPreco='R$ 200,00'
          cartaoDescricao='Descrição do Job, descrição mesmo do Job, isso aí sobre o Job, será que vale a pena.'
          cartaoMetodo='à vista'
          cartaoPrazo='30 dias'
        />
      </div>
    )
  }
}
