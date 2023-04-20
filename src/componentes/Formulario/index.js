import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    //Cria a lista de times que é usada pela Lista Suspensa
    const times = [ 
        'Programação',
        'Front-End',
        'UX e Design', 
        'DevOps',
        'Back-End',
        'Mobile'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label='Nome' placeholder="Digite seu nome"/>
                <CampoTexto label='Cargo' placeholder="Digite seu cargo"/>
                <CampoTexto label='Imagem' placeholder="Digite a URL da imagem"/>
                {/* Passa a lista de times como propriedade (props) para ser usada pelo componente Lista Suspensa */}
                <ListaSuspensa label='Time' itens={times}/> 
                <Botao>
                    Criar Card {/* Children do elemento botão */}
                </Botao>
            </form>
        </section>
    )
}


export default Formulario