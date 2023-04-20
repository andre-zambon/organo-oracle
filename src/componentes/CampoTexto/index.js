import './CampoTexto.css'

const CampoTexto = (props) => { //Recebe as propriedade (parâmetros informados no app.js) do objeto. pode usar qualquer nome para variável


   
    //onChange no input executa esta função que acessa a props.aoAlterado (informada no Formulario.js) e define como valor do input o 
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }

    return (
         //Insere a classe no componente principal e a partir dele seleciona os filhos
         <div className = "campo-texto"> 
         {// acessa a propriedade label e usa o valor definido no parâmetro no app.js 
            <label>{props.label}</label> }
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input> {/* onChange é evento padrão JS que executa uma função quando o estado do elemento é alterado */}
        </div>
    )
}

export default CampoTexto