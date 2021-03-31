import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// ------------------------------------------Styled---------------------------------------------

const BaseContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:12vh;
`
const FormularioContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    /* padding-top:12vh; */
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
    background: linear-gradient(60deg, #EE5A24, #f37055);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    &:hover{
        background: linear-gradient(60deg, #fa8231,#f37055);
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
    /* padding-top:12vh; */
`

const SelectForm = styled.select`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 328px;
    height:36px;
    margin-bottom:8px;
`
const InputServico = styled(InputForm)`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 320px;
    height:120px;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom:8px;
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
    const registrar = {
        titulo: this.state.inputTitulo,
        categorias: this.state.inputCategorias,
        descricao: this.state.inputDescricao,
        valor: this.state.inputValor,
        prazo: this.state.inputPrazo,
    };
    }

    // ---------------------------------------------Axios//API-----------------------------------------
    //
    //

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
                            value={this.state.inputTitulo}
                            onChange={this.handleInputTitulo}/>
                </label>

                <label>
                    <SubTitulos>Categorias</SubTitulos>
                        <SelectForm value={this.state.inputCategorias} onChange={this.handleInputCategorias}>
                            <option value="tecnica">Assistência Técnica</option>
                            <option value="aula">Aula</option>
                            <option value="consultoria">Consultoria</option>
                            <option value="tecnologia">Design e Tecnologia </option>
                            <option value="eventos">Eventos </option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="obra">Obras e Reforma</option>
                            <option value="domestico">Serviços Domésticos</option>
                        </SelectForm>
                </label>

                <label>
                        <SubTitulos>Descrição do Serviço</SubTitulos>
                            <InputServico type="text" name="servicoInput" 
                            placeholder="Descrição do serviço"
                            value={this.state.inputDescricao}
                            onChange={this.handleInputDescricao}/>
                </label>

                <label>
                        <SubTitulos>Valor do Serviço</SubTitulos>
                            <InputForm type="number" name="valorInput" 
                            placeholder="Descrição do serviço"
                            value={this.state.inputValor}
                            onChange={this.handleInputValor}/>
                </label>
                <label>
                    <SubTitulos>Prazo</SubTitulos>
                    <InputForm id="prazo" type="date"
                    value={this.state.inputPrazo}
                    onChange={this.handleInputPrazo}/>
                </label>
                <Cadastrar> Cadastrar </Cadastrar>
            </FormularioContainer>
        </BaseContainer>
        )
    }
}