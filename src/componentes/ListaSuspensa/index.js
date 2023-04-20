import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    
    //onChange no select executa esta função que acessa a props.aoAlterado(informada no Formulario.js) e define como valor do input o 
    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
           
            <select value={props.nome} onChange={aoDigitado}>
                  
                    {props.itens.map(item => {
                        return <option  required={props.obrigatorio} key={item}>{item}
                        </option> //"key" é usado pelo React para controlar a renderização e saber quando atualizar o item
                    })}
           
            </select>
        </div>
    )
}

export default ListaSuspensa