import React from 'react'
import CartaoTrabalho from './CartaoTrabalho'
import './ExibirTrabalhos.css'
import axios from 'axios'
import { api, img } from './constantes/API'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';
import Trabalho from './Trabalho'
import Header from '../Base/Header'
import Footer from '../Base/Footer'


export default class ExibirTrabalhos extends React.Component {

  state={
    tela: 'Trabalho',
  }


  render() {

        
        
    return (

      <div>
        <Header 
				funcaoSobre={this.props.funcaoSobre} 
				funcaoCriar={this.props.funcaoCriar} 
				funcaoExibir={this.props.funcaoExibir} 
        />
        <Trabalho
           
        />
        <Footer />
      </div>



    )
  }
}
