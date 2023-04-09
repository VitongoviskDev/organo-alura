import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer/Footer';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    }, 
    {
      nome: 'Front-end', 
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Data Science', 
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29',
    },
]
  const [colaboladores, setColaboradores] = useState([]);

  const HandleOnColaboradorRegister = (colaborador) =>{
    debugger
    setColaboradores([...colaboladores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        times = { times.map( time => time.nome ) } 
        onRegisterColaborador = { HandleOnColaboradorRegister }
      />
      {
        times.map((time, index) => {
          return <Time 
                  key = { index } 
                  time = { time } 
                  colaboradores={colaboladores.filter(colaborador => colaborador.time === time.nome)}
                />
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
