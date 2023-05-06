import Colaborador from '../Colaborador'
import './Time.css'

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
        onChange={evento => props.mudaCorTime(evento.target.value, props.nome)} 
        value={props.cor}
        />

            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {/* acessa a constante que tem os colaboradores que foram cadastrados, e retorna pra cada um, o card 
                já recebendo as props */}
                {props.colaboradores.map(colaborador => {
                  
                  return <Colaborador key={colaborador.nome} corDeFundo={props.cor}  nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
                  
                } )}
            </div>
        
        </section>

        :''

    )
}

export default Time

