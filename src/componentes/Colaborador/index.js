import {RiDeleteBinLine} from 'react-icons/ri' //importa o item da biblioteca de icones
import './Colaborador.css'


const Colaborador = (props) => {
    
    return(
                <div className="colaborador">
                
            {/* insere o item de deletar o colaborador */}
            <RiDeleteBinLine className='deletar' onClick={props.aoDeletar}/>

            {/* acessa as props do colaborador passadas no componente Time */}
            <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
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

