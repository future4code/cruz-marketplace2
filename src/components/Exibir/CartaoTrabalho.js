import React from 'react'
import './CartaoTrabalho.css'

export default class CartaoTrabalho extends React.Component {
  render() {
    return (
      <div className='cartao-container'>
            {/* {this.props.id} */}

        <div className='cartao-foto'>
            <img className='foto' src={this.props.cartaoFoto} alt='Imagem do Card'/>
        </div>

        <div className='cartao-dados'>


            <div className='cartao-nome-e-valor'>
                <div className='cartao-nome'>
                 {this.props.cartaoNome}
                </div>
                <div className='cartao-valor'>
                    {this.props.cartaoPreco}
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
    </div>


    )
  }
}


        {/* <div className='cartao-botao'>
        <div className='cartao-botao'>
            <button onClick={this.props.funcao}> {this.props.textoBotao} </button>
        </div> */}
        {/* </div> */}
