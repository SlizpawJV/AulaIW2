import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const[vetor, setVetor] = useState(["Rian" , "Marcos", "Larissa"]);

  const[aluno, setAluno] = useState("");

  function adicionar()
  {
    setVetor([...vetor,aluno])
    setAluno("");
  }

  return (
    <div>
      <h1>Aula 04 - Estudo De Vetores</h1>

      <br/><br/>

      <div className='conteudo'>
        <h3> Entrada de dados</h3>
        <form>
          <p>
            Digite o nome do aluno<br/>
            <input type="text" value={aluno} onChange={(e) => setAluno(e.target.value)}></input>
          </p>
          <p>
            <button type="button" onClick={adicionar}>Adicionar o nome na lista</button>
          </p>
        </form>
      </div>


      <div className='conteudo'>
        <h3>Lista de Alunos</h3>

        <ul>

            {vetor.map( nome => (<li>{nome}</li>))}

        </ul>
      </div>
      
      <br/><br/>
      <img src="https://i.pinimg.com/originals/04/9c/23/049c23465bfdd88188f10b293ba8e928.gif"/>

    </div>
  );
}

export default App;
 