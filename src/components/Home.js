import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import consumidor from './imagens/consumidor.jpeg'
// import fornecedor from './imagens/fornecedor.jpeg'

const Container = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:12vh;
    
`

const Banner = styled.div `
    display: flex;
    height: 400px;
    background-color: #3a7fff;
`

const DivQuemSomos = styled.div `
    /* background-color: yellow; */
    border: 1px solid;

h2 {
    text-align: center;
    padding: 10px;
    color: #3c3c3c;
}   

p {
    text-align: center;
    height: 24px;
    padding: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

const DivConsumidor = styled.div `
    /* background-color: red; */
    display: flex;  
    border: 1px solid;  
    padding: 30px;

h2 {
    text-align: center;
    padding: 10px;
    color: #3c3c3c;
}   

p {
    height: 24px;
    padding: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}    

button {
    color:white;
    font-weight:bolder;
    width: 232px;
    height:50px;
    border-radius:10px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #3a7fff, #16c153);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    &:hover{
        background: linear-gradient(60deg, #3a7fff, #16c153);
    }
    margin-top:25px;
}

div {
    display: flex;
    padding: 10px;
}

img {
    height: 350px;
    width: 350px;
    background-color: #3a7fff;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
}
`

const DivFornecedor = styled.div `
    /* background-color: green; */
    display: flex;
    border: 1px solid;
    padding: 30px;
    

h2 {
    text-align: center;
    color: #3c3c3c;
}   

p {
    height: 24px;
    padding: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}

button {
    color:white;
    font-weight:bolder;
    width: 232px;
    height:50px;
    border-radius:10px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #3a7fff, #16c153);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    &:hover{
        background: linear-gradient(60deg, #3a7fff, #16c153);
    }
    margin-top:25px;

}

div {
    display: flex;
    padding: 10px;
}

img {
    height: 350px;
    width: 350px;
    background-color: #16c153;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
}
`


export default class Home extends React.Component{

    render () {

        return(

            <Container>
                <Banner> </Banner>
                <DivQuemSomos>
                    <h2>Quem somos</h2>
                        <p>Somos uma plataforma que conecta clientes e profissionais em todo Brasil 
com centenas de tipos de serviços que você pode contratar e também oferecer.
Nossa missão é atender com qualidade, garantia e rapidez. 
SOMOS NINJAS!
                        
                        </p>
                    
                </DivQuemSomos>
                <DivConsumidor>
                    <h2>O que você precisa?</h2> 
                        <p>Temos profissionais verificados, checamos antecedentes criminais, referências profissionais, 
você tem segurança na hora de contratar. Pode confiar!
Primeiro faça seu pedido e receba as indicações de acordo com o que você procura.
Combine diretamente com os profissionais e faça sua escolha. <br />
                        <button>Sou Consumidor</button>
                        </p>
                    <div>
                        <img></img>
                    </div>
                </DivConsumidor>
                <DivFornecedor>
                        <div>
                            <img ></img>
                        </div>

                    <h2>Se você é um profissional?</h2>
                    
                        <p>Conectamos você com muito mais clientes. 
Nossa plataforma te oferece toda facilidade na hora de combinar um serviço. 
Temos uma equipe pronta para te atender e divulgar seu trabalho.
Pagamento garantido de forma rápida e segura independente da forma de pagamento do cliente.
Tudo com selo de qualidade FUTURE NINJAS 2 que oferece muito mais credibilidade para o seu perfil. <br />
                        <button>Sou Fornecedor</button>
                        </p>
                        
                </DivFornecedor>
                
            </Container>

        )

    }
}

