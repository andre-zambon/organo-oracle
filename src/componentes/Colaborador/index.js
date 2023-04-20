import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            {/* acessa as props do colaborador passadas no componente Time */}
            <div className="cabecalho">
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