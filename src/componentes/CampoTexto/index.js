import './CampoTexto.css'

const CampoTexto = (props) => { //Recebe as propriedade (parâmetros informados no app.js) do objeto. pode usar qualquer nome para variável
    return (
         //Insere a classe no componente principal e a partir dele seleciona os filhos
         <div className = "campo-texto"> 
         {// acessa a propriedade label e usa o valor definido no parâmetro no app.js 
            <label>{props.label}</label> }
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto