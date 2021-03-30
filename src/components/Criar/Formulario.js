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
    width: 320px;
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
`
const Title = styled.h1 `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:bolder;
    font-size:48px;
    color:#16c153;
    padding-left:8vw;
`












// -------------------------------------------Structure---------------------------------------------
export default class Formulario extends React.Component{
    // state = {
    //     inputTitulo="",
    //     inputCategorias=[],
    //     inputDescricao="",
    //     inputValor="",
    //     inputPrazo="",
    // }; 
    // 
    //
    //
    //
    //
    //
    //
    
    render(){
        return(
            <BaseContainer>
            <Title>Novo Anúncio</Title>
            <div></div>
            <FormularioContainer>
                <label className>
                    Título
                        <input type="text" name="tituloInput" 
                        placeholder="Insira o nome do seu serviço"
                        />
                </label>
                <label>
                    Categorias
                <select>
                    <option value="tecnica">Assistência Técnica</option>
                    <option value="aula">Aula</option>
                    <option value="domestico">Serviços Domésticos</option>
                    <option value="tecnologia">Design e Tecnologia </option>
                    <option value="consultoria">Consultoria</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="eventos">Eventos </option>
                    <option value="obra">Obras e Reforma</option>
                </select>
                </label>
                <label>
                    Descrição do Serviço
                        <input type="text" name="servicoInput" 
                        placeholder="Descrição do serviço"
                        />
                </label>
                <label>
                    Valor do Serviço
                        <input type="number" name="valorInput" 
                        placeholder="Descrição do serviço"
                        />
                </label>
                <label>
                    Prazo
                    <input id="prazo" type="date"/>
                </label>
                <Cadastrar> Cadastrar </Cadastrar>
            </FormularioContainer>
        </BaseContainer>
        )
    }
}