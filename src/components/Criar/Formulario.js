import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { baseUrl } from '../Base/Referecias'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';
import Header from '../Base/Header'
import Footer from '../Base/Footer'

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
// const Cadastrar = styled.button `
//     color:white;
//     font-weight:bolder;
//     width: 332px;
//     height:50px;
//     border-radius:10px;
//     left:calc(50% - 75px);
//     top:calc(50% - 25px);
//     background: linear-gradient(60deg, #16c153, #2ed573);
//     cursor:pointer;
//     line-height:12px;
//     border:none;
//     outline:none;
//     &:hover{
//         background: linear-gradient(60deg, #2ed573,#7bed9f);
//     }
//     margin-top:25px;
// `
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
    width: 500px;
    // color:#16c153;
    text-transform: uppercase;
    font-size: 12px;
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
            <div>
                <Header 
                    funcaoSobre={this.props.funcaoSobre} 
                    funcaoCriar={this.props.funcaoCriar}
                    funcaoExibir={this.props.funcaoExibir} 
                />

            <BaseContainer>


            <Title>Novo Anúncio</Title>
            <FormularioContainer>
                <label>
                <FormControl className={useStyles.root}>
                        <SubTitulos>Título</SubTitulos>
                            <TextField type="text" name="tituloInput" 
                            placeholder="Insira o nome do seu serviço"
                            value={this.state.inputTitle}
                            onChange={this.handleInputTitle}/>
                </FormControl>
                </label>

                <label>
                <FormControl className={useStyles.root}>
                        <SubTitulos>Descrição do Serviço</SubTitulos>
                            <TextField type="textarea" name="servicoInput" minlength="5"  maxlength="100"
                            placeholder="Descreva de forma objetiva o serviço que você precisa"
                            value={this.state.inputDescription}
                            onChange={this.handleInputDescription}
                            multiline
                            rowsMax={3}/>
                </FormControl>
                </label>

                <label>
                <FormControl className={useStyles.root}>
                        <SubTitulos>Valor do Serviço (em reais)</SubTitulos>
                            <TextField type="number" name="valorInput" 
                            placeholder="Quantos reais pretende pagar?"
                            value={this.state.inputValue}
                            onChange={this.handleInputValue}/>
                </FormControl>
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
                    <FormControl>
                        <SubTitulos>Forma de Pagamento</SubTitulos>
                            <Select name="opcoes" id="select" label="Forma de Pagamento" placeholder="Escolha uma forma de pagamento" onChange={this.handleInputPayment}>
                                <MenuItem value="">Selecione uma forma de pagamento</MenuItem>
                                <MenuItem value="dinheiro">Dinheiro</MenuItem>
                                <MenuItem value="credito">Crédito</MenuItem>
                                <MenuItem value="débito">Débito</MenuItem>
                                <MenuItem value="boleto">Boleto</MenuItem>
                                <MenuItem value="transferencia">Transferência</MenuItem>
                                <MenuItem value="pix">Pix</MenuItem>
                            </Select>
                    </FormControl>
                </label>
                
                <label>
                <FormControl className={useStyles.root}>
                    <SubTitulos>Prazo (em horas)</SubTitulos>
                    <TextField id="prazo" type="number"
                    placeholder="Qual o prazo em horas para a conclusão do serviço?"
                    value={this.state.inputDueDate}
                    onChange={this.handleInputDueDate}/>
                </FormControl>
                </label>
                <Button style={{maxHeight: '50px', marginTop: '50px', backgroundColor: '#16c153'}} variant="contained" onClick={this.cadastrarServico} color="primary" size="large" fullWidth={true}> Cadastrar </Button> 
            </FormularioContainer>
        </BaseContainer>
        <div style={{ marginTop:'80px'}}></div>
           <Footer />
                    </div>
        )
    }
}