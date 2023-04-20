import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  //cria um novo array, espalha os colaboradores antigos e adciona o novo ao array. Array que grava os colaboradores cadastrados
  setColaboradores([...colaboradores, colaborador]) 
  console.log(colaboradores)
}
 
  return (
   
   <div className="App">
     
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> {/*recebe os valores dos inputs como "colaborador e passa para a funcação " */}
      <Time nome="Programação" />
      <Time nome="Front-End" />

    </div>
  );
}

export default App;
