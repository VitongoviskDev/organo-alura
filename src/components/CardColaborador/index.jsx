import './CardColaborador.css'

function CardColaborador(props){
    
    return(
        <div className="colaborador">
            <div className="colaborador__cabecalho" style={{backgroundColor: props.color}}>
                <img className='colaborador__imagem' src={props.colaborador.imagem} alt={`Foto do colaborador ${props.colaborador.nome} ${props.colaborador.cargo}`} />
            </div>
            <div className="colaborador__info">
                <p className='colaborador__nome'>{props.colaborador.nome}</p>
                <p className='colaborador__cargo'>{props.colaborador.cargo}</p>
            </div>
        </div>
    )
}

export default CardColaborador;