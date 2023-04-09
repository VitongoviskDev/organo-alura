import { useState } from "react";

import Botao from "../Botao";
import CampoLista from "../CampoLista";
import CampoTexto from "../CampoTexto";

import './Formulario.css'

function Formulario(props){
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState(props.times[0]);

    const HandleFormSubmit = (event) =>{
        event.preventDefault();
        props.onRegisterColaborador(
            {
                nome: nome, 
                cargo: cargo, 
                imagem: imagem, 
                time: time
            }
        )
        setNome('');
        setCargo('');
        setImagem('');
        setTime(props.times[0]);
    }

    return(
        <form className="formulario" onSubmit={HandleFormSubmit}>
            <h1 className="formulario__title">Preencha os dados para criar o card do colaborador</h1>
            <CampoTexto 
                valor = {nome}
                onChange = {valor => setNome(valor)}
                obrigatorio = {true} 
                label = 'Nome' 
                placeholder = 'Digite seu nome'
            />
            <CampoTexto 
                valor = {cargo}
                onChange = {valor => setCargo(valor)}
                obrigatorio = {true} 
                label = 'Cargo' 
                placeholder = 'Digite seu cargo'
            />
            <CampoTexto 
                valor = {imagem}
                onChange = {valor => setImagem(valor)}
                obrigatorio = {false} 
                label = 'Imagem' 
                placeholder = 'Informe o endeço da imagem'
            />
            <CampoLista
                valor = {time}
                onChange = {valor => setTime(valor)}
                obrigatorio = {true} 
                label = 'Time' 
                placeholder = 'Selecione o time' lista={props.times} 
            />
            <Botao>Criar card</Botao>
        </form>
    )
}

export default Formulario;