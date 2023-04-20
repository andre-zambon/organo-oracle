import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

//Cria a lista de times que é usada pela Lista Suspensa
const times = [ 
    'Programação',
    'Front-End',
    'UX e Design', 
    'DevOps',
    'Back-End',
    'Mobile'
]
const Formulario = (props) => {

    

    //"use" é um hook (gancho) de algo. Hook do estado de uma string, estado vazia, nesse caso. Quando o estado muda, o React sabe que tem que renderizar o componente
    //retorna um arry com dois objetos
    //o primeiro objeto é o que vc quer manipular
    //"set" é a função para editar o valor do primeiro objeto
    
    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('') 


    const aoSalvar = (evento) => {
      
        evento.preventDefault()
     
        props.aoColaboradorCadastrado({ //ao submeter o formulário, envia como props os valores de cada input 
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>  {/*onSubmit é um evento padrão do JavaScript, nesse caso, ao submeter o form executa a função */}
                
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <CampoTexto 
                obrigatorio = {true} 
                label='Nome'
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} //acessa o valor que foi alterado(valor) e seta com ovalor recebido
                />

                <CampoTexto 
                obrigatorio = {true} 
                label='Cargo' 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                label='Imagem' 
                placeholder="Digite a URL da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
               
                {/* Passa a lista de times como propriedade (props) para ser usada pelo componente Lista Suspensa */}
                <ListaSuspensa
                obrigatorio = {true} 
                label='Time' 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                /> 

                <Botao>
                    Criar Card {/* Children do elemento botão */}
                </Botao>
            </form>
        </section>
    )
}


export default Formulario