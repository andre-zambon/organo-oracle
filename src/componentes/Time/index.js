import Colaborador from '../Colaborador'
import './Time.css'
import { v4 as uuidv4 } from 'uuid'; //importa biblioteca que cria id - usa-se biblioteca pois o componente filho não consegue passar informações para o pai


const Time = (props) => {
    
    return (
        //não podermo escrever "if" dentro do JSX
        //redenderização condicional (if). "se o tamanho da array for maio que 00 então(?) executa o que estiver a seguir, se não
        // executa string vazia (:'')
        
        (props.colaboradores.length > 0) ?
        
        //style recebe um objeto e a segunda chave cria um objeto
       <section className='time' style={{backgroundColor: props.cor}}> 

            <input 
                type='color' 
                className='input-cor' 
                onChange={evento => props.mudaCorTime(evento.target.value, props.id)} 
                value={props.cor}
            />

            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {/* acessa a constante que tem os colaboradores que foram cadastrados, e retorna pra cada um, o card 
                já recebendo as props */}
                {props.colaboradores.map(colaborador => {
                    
                    
                  return(

                   <Colaborador 
                    key={colaborador.nome} 
                    id={uuidv4()} 
                    colaborador={colaborador} 
                    corDeFundo={props.cor}  
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    aoDeletar={props.aoDeletar}
                    />
                  )
                } )}
            </div>
        
        </section>

        :''

    )
}

export default Time

