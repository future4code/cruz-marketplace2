import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { baseUrl } from '../Base/Referecias'


// ------------------------------------------Styled---------------------------------------------

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
    flex-direction:column;
    align-items:flex-end;
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
    text-align:center;
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

// -------------------------------------------Estrutura---------------------------------------------

export default class Formulario extends React.Component{
    state = {
        inputTitle: "", //Titulo do anúncio
        inputDescription:"", //Descriçao do serviço
        inputValue:"", //Valor a ser pago pelo serviço
        inputPayment:[], //Forma de pagamento
        inputDueDate:"" //Prazo para execução do serviço - Formato de número/horas
        // inputOnChangeValue :""
    };
    handleInputTitle = (e) => {
        this.setState({ inputTitle: e.target.value });
    };
    handleInputDescription = (e) => {
        this.setState({ inputDescription: e.target.value });
    };
    handleInputValue = (e) => {
        this.setState({ inputValue: Number(e.target.value) });
    };
    handleInputPayment = (e) => {
        const array = [e.target.value]
        this.setState({ inputPayment: array });
    };
    // handleOnChangeValue(e) {
    //     this.setState({ inputOnChangeValue: (e.target.value) });
    // };
    handleInputDueDate = (e) => {
        this.setState({ inputDueDate: Number(e.target.value) });
    };

    cadastrarServico = () => {
    const body = {
        title: this.state.inputTitle,
        description: this.state.inputDescription,
        value: this.state.inputValue,
        paymentMethods: this.state.inputPayment,
        dueDate: this.state.inputDueDate,
    };

    axios
    .post(baseUrl,body)
    .then((res)=>{
        console.log(res)
        alert("Seu anúncio foi cadastrado com sucesso!")
        this.setState({ inputTitle: "", inputDescription:"", inputValue:"", inputPayment:[], inputDueDate:"" });
    }).catch((err)=>{
        alert("Ocorrou alguma falha no seu cadastro :( Tente novamente ou entre em contato com a gente!")
        console.log(err)
    })
    }

    render(){
        return(
            <BaseContainer>
            <Title>Novo Anúncio</Title>
            <FormularioContainer>
                <label>
                        <SubTitulos>Título</SubTitulos>
                            <InputForm type="text" name="tituloInput" 
                            placeholder="Insira o nome do seu serviço"
                            value={this.state.inputTitle}
                            onChange={this.handleInputTitle}/>
                </label>

                <label>
                        <SubTitulos>Descrição do Serviço</SubTitulos>
                            <InputServico type="textarea" name="servicoInput" minlength="5"  maxlength="100"
                            placeholder="Descrição do serviço"
                            value={this.state.inputDescription}
                            onChange={this.handleInputDescription}
                            multiline={true}
                            numberOfLines={3}/>
                </label>

                <label>
                        <SubTitulos>Valor do Serviço (em reais)</SubTitulos>
                            <InputForm type="number" name="valorInput" 
                            placeholder="Valor do serviço"
                            value={this.state.inputValue}
                            onChange={this.handleInputValue}/>
                </label>
                
                {/* <SubTitulos>Método de Pagamento</SubTitulos>

                {/* <SelecaoPagamento onChange={this.handleOnChangeValue} >

                    <label>Dinheiro <input type="radio" id="dinheiro" value="dinheiro" checked={true}/></label>
                    <label>Crédito <input type="radio" id="credito" value="credito"/></label>
                    <label>Débito <input type="radio" id="débito" value="débito"/></label>
                    <label>Boleto <input type="radio" id="boleto" value="boleto"/></label>
                    <label>Transferência <input type="radio" id="transferencia" value="transferencia"/></label>
                    <label>Pix <input type="radio" id="pix" value="pix"/></label>
                </SelecaoPagamento> */}

                <label>
                    <SubTitulos>Forma de Pagamento</SubTitulos>
                        <SelectForm name="opcoes" id="select" placeholder="formas de pagamento" onChange={this.handleInputPayment}>
                            <option value="">Selecione uma forma de pagamento</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="credito">Crédito</option>
                            <option value="débito">Débito</option>
                            <option value="boleto">Boleto</option>
                            <option value="transferencia">Transferência</option>
                            <option value="pix">Pix</option>
                        </SelectForm>
                </label>
                
                <label>
                    <SubTitulos>Prazo (em horas)</SubTitulos>
                    <InputForm id="prazo" type="number"
                    value={this.state.inputDueDate}
                    onChange={this.handleInputDueDate}/>
                </label>
                <Cadastrar onClick={this.cadastrarServico}> Cadastrar </Cadastrar>
            </FormularioContainer>
        </BaseContainer>
        )
    }
}