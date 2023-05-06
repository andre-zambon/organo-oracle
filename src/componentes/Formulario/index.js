import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

//Cria a lista de times que é usada pela Lista Suspensa

const Formulario = (props) => {

    

    //"use" é um hook (gancho) de algo. Hook do estado de uma string, estado vazia, nesse caso. Quando o estado muda, o React sabe que tem que renderizar o componente
    //retorna um arry com dois objetos
    //o primeiro objeto é o que vc quer manipular
    //"set" é a função para editar o valor do primeiro objeto
    
    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('') 
    const [corTime, setCorTime] = useState('')


    const aoSalvar = (evento) => {
      
        evento.preventDefault()
     
        props.aoColaboradorCadastrado({ //ao submeter o formulário, envia como props os valores de cada input 
            nome,
            cargo,
            imagem,
            time
        })
        setNome('') //limpa os campos dos formulário após o envio
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>  {/*onSubmit é um evento padrão do JavaScript, nesse caso, ao submeter o form executa a função */}
                
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <Campo 
                obrigatorio = {true} 
                label='Nome'
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} //acessa o valor que foi alterado(valor) e seta com ovalor recebido
                />

                <Campo 
                obrigatorio = {true} 
                label='Cargo' 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />

                <Campo 
                label='Imagem' 
                placeholder="Digite a URL da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
               
                {/* Passa a lista de times como propriedade (props) para ser usada pelo componente Lista Suspensa */}
                <ListaSuspensa
                obrigatorio = {true} 
                label='Times' 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                /> 

                <Botao>
                    Criar Card {/* Children do elemento botão */}
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>  {/*onSubmit é um evento padrão do JavaScript, nesse caso, ao submeter o form executa a função */}
                
                <h2>Preencha os dados para criar o novo time</h2>
                
                <Campo 
                obrigatorio = {true} 
                label='Nome'
                placeholder="Digite o nome do novo time"
                valor={nomeTime}
                aoAlterado={valor => setNomeTime(valor)} //acessa o valor que foi alterado(valor) e seta com ovalor recebido
                />

                <Campo 
                obrigatorio = {true} 
                label='Cor' 
                placeholder="Digite a cor do novo time"
                valor={corTime}
                aoAlterado={valor => setCorTime(valor)}
                />

                <Botao>
                    Criar novo time {/* Children do elemento botão */}
                </Botao>
            </form>


        </section>
    )
}


export default Formulario