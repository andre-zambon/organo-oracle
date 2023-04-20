import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    
    //onChange no select acessa a props.aoAlterado(informada no Formulario.js) e define como valor do input o 
   

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
           
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                  <option valor={''}></option>
                    {props.itens.map(item => {
                        return <option  key={item}>{item}
                        </option> //"key" é usado pelo React para controlar a renderização e saber quando atualizar o item
                    })}
           
            </select>
        </div>
    )
}

export default ListaSuspensa