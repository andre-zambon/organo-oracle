import './Botao.css'

const Botao = (props) => {
    return (
        <div>
             <button className = "botao">{props.children}</button> {/* props.children recebe a propriedade passada como filho do elemento botão onde o componente foi usado  */}
        </div>
    )
}

export default Botao