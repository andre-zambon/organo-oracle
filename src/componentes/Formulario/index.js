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


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log ('submetido')

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>  {/*onSubmit é um evento padrão do JavaScript, nesse caso, ao submeter o form executa a função */}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label='Nome' placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio = {true} label='Cargo' placeholder="Digite seu cargo"/>
                <CampoTexto label='Imagem' placeholder="Digite a URL da imagem"/>
                {/* Passa a lista de times como propriedade (props) para ser usada pelo componente Lista Suspensa */}
                <ListaSuspensa obrigatorio = {true} label='Time' itens={times}/> 
                <Botao>
                    Criar Card {/* Children do elemento botão */}
                </Botao>
            </form>
        </section>
    )
}


export default Formulario