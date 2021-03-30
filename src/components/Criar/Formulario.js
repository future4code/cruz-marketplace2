import React from 'react'

export default class Formulario extends React.Component{
    render(){
        return(
            <div className="BaseContainer">
            <h2>Novo Anúncio</h2>
            <div className = "FormularioContainer">
                <label>
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
                    Descrição Base
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
                <button> Cadastrar </button>
            </div>
        </div>
        )
    }
}