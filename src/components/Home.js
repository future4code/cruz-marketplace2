import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:12vh;
`

const Banner = styled.div `
    display: flex;
    height: 100px;
    background-color: blue;
`

export default class Home extends React.Component{

    render () {

        return(

            <Container>
                <Banner> </Banner>
                <div></div>
                <div></div>
            </Container>

        )

    }
}