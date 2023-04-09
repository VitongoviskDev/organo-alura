import './CampoLista.css'

const CampoLista = (props) =>{

    const HandleInputChanged = (event) => {
        props.onChange(event.target.value);
    }

    return(
        <div className="campo-lista">
            <label className='campo-lista__label'>{props.label}</label>
            <select className='campo-lista__input' value={props.valor} onChange={HandleInputChanged} required={props.obrigatorio}>
            {
                props.lista && props.lista.map((item, index) =>{
                    return <option key={index} className='campo-lista__input__item'>{item}</option>
                }
                )
            }
            </select>
        </div>
    )
}

export default CampoLista;