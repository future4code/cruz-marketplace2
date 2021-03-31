import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// ------------------------------------------Styled---------------------------------------------

const BaseContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:8vh;
`
const FormularioContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:flex-end;
    padding-right:8vw;
`
const Cadastrar = styled.button `
    color:white;
    font-weight:bolder;
    width: 332px;
    height:50px;
    border-radius:10px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #16c153, #2ed573);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    &:hover{
        background: linear-gradient(60deg, #2ed573,#7bed9f);
    }
    margin-top:25px;
`
const Title = styled.h1 `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:bolder;
    font-size:48px;
    color:#16c153;
    padding-left:8vw;
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
const SubTitulos = styled.h4`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 328px;
    color:#16c153;
`

// -------------------------------------------Structure---------------------------------------------
export default class Formulario extends React.Component{
    state = {
        inputTitulo: "", //Titulo do anúncio
        inputCategorias:[], //Array de categorias de serviço
        inputDescricao:"", //Descriçao do serviço
        inputValor:"", //Valor a ser pago pelo serviço
        inputPrazo:"" //Prazo para execução do serviço - Formato de data
    };
    handleInputTitulo = (e) => {
        this.setState({ inputTitulo: e.target.value });
    };
    handleInputCategorias = (e) => {
        this.setState({ inputCategorias: e.target.value });
    };
    handleInputDescricao = (e) => {
        this.setState({ inputDescricao: e.target.value });
    };
    handleInputValor = (e) => {
        this.setState({ inputValor: Number(e.target.value) });
    };
    handleInputPrazo = (e) => {
        this.setState({ inputPrazo: Number(e.target.value) });
    };

    //--------------------------------Função Cadastrar Novo Serviço-----------------------------------

    cadastrarServico = () => {
    const body = {
        title: this.state.inputTitle,
        description: this.state.inputDescription,
        value: this.state.inputValue,
        paymentMethods: [],
        dueDate: this.state.inputDueDate,
    };
    }

    // ---------------------------------------------Axios//API-----------------------------------------

    // axios	

    render(){
        return(
            <BaseContainer>
            <Title>Novo Anúncio</Title>
            <div></div>
            <FormularioContainer>
                <label>
                        <SubTitulos>Título</SubTitulos>
                            <InputForm type="text" name="tituloInput" 
                            placeholder="Insira o nome do seu serviço"
                            value={this.state.inputTit}
                            onChange={this.handleInputTitulo}/>
                </label>

                <label>
                        <SubTitulos>Descrição do Serviço</SubTitulos>
                            <InputServico type="text" name="servicoInput" 
                            placeholder="Descrição do serviço"
                            value={this.state.inputDescription}
                            onChange={this.handleInputDescription}/>
                </label>

                <label>
                        <SubTitulos>Valor do Serviço</SubTitulos>
                            <InputForm type="number" name="valorInput" 
                            placeholder="Descrição do serviço"
                            value={this.state.inputValue}
                            onChange={this.handleInputValue}/>
                </label>
                
                <SubTitulos>Método de pagamento</SubTitulos>
                <div>
                    <label>Dinheiro <input type="radio" id="dinheiro" value="dinheiro"/></label>
                    <label>Crédito <input type="radio" id="credito" value="credito"/></label>
                </div>
                <div>
                    <label>Débito <input type="radio" id="débito" value="débito"/></label>
                    <label>Boleto <input type="radio" id="boleto" value="boleto"/></label>
                </div>
                <div>
                    <label>Transferência <input type="radio" id="transferencia" value="transferencia"/></label>
                    <label>Pix <input type="radio" id="pix" value="pix"/></label>
                </div>
                
                <label>
                    <SubTitulos>Prazo</SubTitulos>
                    <InputForm id="prazo" type="date"
                    value={this.state.inputDueDate}
                    onChange={this.handleDueDate}/>
                </label>
                <Cadastrar onClickBtn={this.cadastrarServico}> Cadastrar </Cadastrar>
            </FormularioContainer>
        </BaseContainer>
        )
    }
}