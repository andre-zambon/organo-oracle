import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  // transforma o array em um estado para que o react possa rerenderizar as cores coma função setState
  const [times, setTimes] = useState ([
    
    {
      nome: 'Programação',
      cor: '#d9f7e9'
    },

    {
      nome: 'Front-End',
      cor: '#d9f7ab'
    },

    {
      nome: 'Ux e Design',
      cor: '#d9f7e9'
    },

    {
      nome: 'DevOps',
      cor: '#d9f7e9'
    },

    {
      nome: 'Back-End',
      cor: '#d9f7e9'
    },

    {
      nome: 'Mobile',
      cor: '#d9f7e9'
    }

  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoDeletar = () => {
    console.log('deleta colaborador')
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
  //cria um novo array, espalha os colaboradores antigos e adciona o novo ao array. Array que grava os colaboradores cadastrados
  setColaboradores([...colaboradores, colaborador]) 
  }


  // função que muda cor do time ou colaborador
  function mudaCor (cor, nome) { //recebe o nome do time e a cor que vem do input color
    setTimes(times.map(time => { //map recebe time e a condicional 
      if(time.nome === nome) {
        time.cor = cor
      }
      return time //retorna para o array do map o time com a cor alterada
    }))
  }

  
  return (
   
   <div className="App">
     
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> {/*recebe os valores dos inputs como "colaborador e passa para a funcação " */}
      
      {/* percorre a lista de times e acessa o nome do time para dar nome ao time */}
      {/* para cada time, dentro da lista de times, cria um componente com o do time nome da lista */}
      
      {times.map(time =>
       <Time 
       key={time.nome} 
       nome={time.nome} 
            cor={time.cor} 
            //insere a constante que guarda os colaboradores como uma props e filtra para passar de acordo com o time 
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar = {aoDeletar}
            mudaCorTime = {mudaCor}
            />
            )} 
      
    </div>
  );
}
  

export default App;
