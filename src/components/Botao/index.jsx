import './Botao.css';

function Botao(prop){
    
    return(
        <button className='botao'>{prop.children}</button>
    )
}

export default Botao;