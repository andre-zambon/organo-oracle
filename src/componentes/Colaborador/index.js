import { AiFillCloseCircle } from 'react-icons/ai'; //importa o item da biblioteca de icones
import './Colaborador.css'
import hexToRgba from 'hex-to-rgba'; //importa conversor de hexadecimal para rgba


const Colaborador = (props) => {
    
    return(
                <div className="colaborador">
                
            {/* insere o item de deletar o colaborador */}
            <AiFillCloseCircle 
                className='deletar' 
                onClick={() => props.aoDeletar(props.colaborador.id)}
                />

            {/* acessa as props do colaborador passadas no componente Time */}
            <div className="cabecalho" style={{backgroundColor: hexToRgba('corDeFundo', '0.6') }}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
            ) 
            
        }

        export default Colaborador
        
