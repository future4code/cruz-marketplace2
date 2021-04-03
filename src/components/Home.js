import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import busca from '../components/img/pesquisa.svg'
import servico from '../components/img/serviço.svg'
import bananinha from '../banner.png'
// import consumidor from './imagens/consumidor.jpeg'
// import fornecedor from './imagens/fornecedor.jpeg'
import Header from './Base/Header'
import Footer from './Base/Footer'

// ------------------------------------------------------------Ajuste Códigos ------------------------------------------------------------------------
const Container = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    /* padding-top:4vh; */
`
const Banner = styled.div `
    display: flex;
    height: 600px;
    width: 100vw;
    background-image:url(${bananinha});
`
const DivQuemSomos = styled.div `
    display:flex;
    flex-direction:column;
    width:90vw;
    padding:60px 0 0 60px;
`
const TitloTexto = styled.h2 `
    text-align: left;
    color: #3c3c3c;
    font-size:40px;
`
const Textodiv = styled.p `
    font-size:20px;
    color: #3c3c3c;
    span{
        color:#3a7fff;
        font-weight:bold;
    }
`
const DivConsumidor = styled.div `
    display:flex;
    text-align:justify;
    flex-direction:column;
    width:48vw;
    padding:60px 0 0 60px;
`
const TextoDivPequeno = styled.p `
    font-size:18px;
    color: #3c3c3c;
`
const ImgConsumidor = styled.img `
    height: 380px;
    width: 400px;
    position:relative;
    left:798px;
    bottom:252px;
`
const DivFornecedor = styled.div `
    display:flex;
    text-align:justify;
    flex-direction:column;
    width:48vw;
    padding-top: 100px;
    /* padding:60px 0 0 60px; */
`
const DivTeste = styled.div`
    position:relative;
    left:598px;
    bottom:252px;
`
const ImgFornecedor = styled.img `
    height: 430px;
    width: 450px;
    position:relative;
    left:24px;
    bottom:622px;
`



// ---------------------------------------------------------------Código Original---------------------------------------------------------------

// const Botao = styled.button `
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

// const DivQuemSomos = styled.div `
    /* background-color: yellow; */
    /* border: 1px solid; */

/* h2 {
    text-align: center;
    padding: 10px;
    color: #3c3c3c;
}    */

/* p {
    text-align: center;
    
    height: 24px;
    padding: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
` */

// const DivConsumidor = styled.div `
//     display: flex; 
//     padding-top: 30px; 

// `


// const DivConsumidor = styled.div `
//     /* background-color: red; */
//     display: flex;  
//     /* border: 1px solid;   */
//     padding: 30px;

// /* h2 {
//     text-align: center;
//     padding: 10px;
//     color: #3c3c3c;
// }    */

// p {
//     height: 24px;
//     padding: 20px;
//     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
//     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     text-align: center;
// }    


// div {
//     display: flex;
//     padding: 10px;
// }

// img {
//     height: 350px;
//     width: 350px;
//     /* -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
// 	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
// 	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77); */
// }
// `

// const DivFornecedor = styled.div `
    /* background-color: green; */
    // display: flex;
    /* border: 1px solid; */
    /* padding: 30px; */
    

/* h2 {
    text-align: center;
    color: #3c3c3c;
}    */

// p {
//     height: 24px;
//     padding: 20px;
//     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
//     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     text-align: center;
// }

// div {
//     display: flex;
//     padding: 10px;
// }

// img {
//     height: 350px;
//     width: 350px;
    /* -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77); */
// }
// `

export default class Home extends React.Component{

    render () {

        return(

            <Container>
                <Header 
				funcaoSobre={this.props.funcaoSobre} 
				funcaoCriar={this.props.funcaoCriar} 
				funcaoExibir={this.props.funcaoExibir} 
                />

                {/* <Banner><img src={bananinha}/> </Banner >  */}
                <Banner></Banner>

                <DivQuemSomos>
                    <TitloTexto>Quem Somos</TitloTexto>
                        {/* <div> */}
                            <Textodiv>Somos uma plataforma que conecta clientes e profissionais em todo Brasil 
                                com centenas de tipos de serviços  que você pode contratar e também oferecer.
                                Nossa missão é atender com qualidade, garantia e rapidez.   
                                <span> SOMOS NINJAS! SOMOS FUTURE NINJAS!</span>
                            </Textodiv>
                        {/* </div> */}
                        
                </DivQuemSomos>


                <DivConsumidor>
                    <TitloTexto>O que você precisa?</TitloTexto>
                        <div>
                            <TextoDivPequeno>Temos profissionais verificados, checamos antecedentes criminais,
                                referências profissionais,você tem segurança na hora de contratar. Pode confiar!
                                Primeiro faça seu pedido e receba as indicações de acordo com o que você procura.
                                Combine diretamente com os profissionais e faça sua escolha. 
                            </TextoDivPequeno>
                                <Button style={{maxHeight: '50px', marginTop: '50px', backgroundColor: '#16c153'}} 
                                variant="contained" color="primary" size="large"
                                onClick={this.props.funcaoExibir}
                                > Sou Cliente </Button> 
                        </div> 
                        {/* <ImgConsumidor> */}
                                <ImgConsumidor src={busca}/>
                        {/* </ImgConsumidor> */}
                </DivConsumidor>
                

                
                <DivFornecedor>

                    <DivTeste>
                        <TitloTexto>Você é um profissional?</TitloTexto>
                            <TextoDivPequeno>Conectamos você com muito mais clientes. 
                                Nossa plataforma te oferece toda facilidade na hora de combinar um serviço. 
                                Temos uma equipe pronta para te atender e divulgar seu trabalho.
                                Pagamento garantido de forma rápida e segura independente da forma 
                                de pagamento do cliente.Tudo com selo de qualidade <span>FUTURE NINJAS 2</span> que oferece muito mais credibilidade para o seu perfil.
                            </TextoDivPequeno>
                                <Button style={{maxHeight: '50px', marginTop: '50px', 
                                backgroundColor: '#16c153'}} variant="contained"  color="primary" size="large" 
                                onClick={this.props.funcaoCriar}
                                > Sou fornecedor </Button> 
                    </DivTeste>
                        {/* <div> */}
                            <ImgFornecedor src={servico}/>
                        {/* </div> */}
                        
                </DivFornecedor>
                <Footer />
            </Container>

        )

    }
}

