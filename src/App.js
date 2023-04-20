import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const times = [
    
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Front-End',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Ux e Design',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'DevOps',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Back-End',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
  //cria um novo array, espalha os colaboradores antigos e adciona o novo ao array. Array que grava os colaboradores cadastrados
  setColaboradores([...colaboradores, colaborador]) 
  console.log(colaboradores)
}
 
  return (
   
   <div className="App">
     
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> {/*recebe os valores dos inputs como "colaborador e passa para a funcação " */}
      
      {/* percorre a lista de times e acessa o nome do time para dar nome ao time */}
      {/* para cada time, dentro da lista de times, cria um componente com o do time nome da lista */}
      
      {times.map(time => <Time 
                          nome={time.nome} 
                          key={time.nome} 
                          corPrimaria={time.corPrimaria} 
                          corSecundaria={time.corSecundaria}/>)} 
      
    </div>
  );
}

export default App;
