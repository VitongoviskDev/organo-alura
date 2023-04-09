import CardColaborador from '../CardColaborador';
import './Time.css'

function Time(props){
    if(props.colaboradores.length > 0){
        return(
            <section className='time' style={{backgroundColor: props.time.corPrimaria}}>
                <h3 className='time__title'>{props.time.nome}</h3>
                <hr className='time__line' style={{backgroundColor: props.time.corSecundaria}}/>
                <div className="time__lista">
                {
                    props.colaboradores.map((colaborador, index) => {
                        return <CardColaborador key={ index } colaborador={colaborador} color={props.time.corSecundaria}/>
                    })
                }
                </div>
            </section>
        )
    }else{
        return <></>
    }
    
}

export default Time;