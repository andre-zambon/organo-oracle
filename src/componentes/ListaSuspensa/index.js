import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option> //"key" é usado pelo React para controlar a renderização e saber quando atualizar o item
                    })}
            </select>
        </div>
    )
}

export default ListaSuspensa