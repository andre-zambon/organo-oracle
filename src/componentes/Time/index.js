import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        //style recebe um objeto e a segunda chave cria um objeto
        <section className='time' style={{backgroundColor: props.corSecundaria}}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <Colaborador/>
        </section>
    )
}

export default Time