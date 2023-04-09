import './CampoTexto.css';

const CampoTexto = (props) =>{

    const HandleInputChanged = (event) => {
        props.onChange(event.target.value);
    }

    return(
        <div className="campo-texto">
            <label className="campo-texto__label" htmlFor={props.label}>{props.label}</label>
            <input value={props.valor} onChange={HandleInputChanged} className="campo-texto__input" required={props.obrigatorio} id={props.label} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto