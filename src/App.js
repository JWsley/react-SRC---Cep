import { FiSearch } from 'react-icons/fi';

import '../src/styles.css'

import { useState } from 'react';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')

  const [cep,setCep] = useState({});
 async function srch(){
  
  if(input === ''){

    alert('Digite alguma coisa!')

  }

  try{
    const response = await api.get(`${input}/json`)
    console.log(response.data)
    setCep(response.data)


  }catch{
    alert('Alguma coisa deu errado... Verifique se seu Cep esta correto!')
    setInput('')

  }
}



  return (
    <div className="container">
     <h1 className="title">Buscador Cep</h1>
    <div className="cinpt"><input type="text" placeholder="Digite seu Cep..." 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />
    <button className="btn" onClick={srch}><FiSearch size={25} color='#fff'/></button></div>
    
    {Object.keys(cep).length > 0 && (
         <main className='main'>


         <h2>CEP: {cep.cep} </h2>
         <span>Rua: {cep.logradouro}</span>
         <span>Complemento: {cep.complemento}</span>    
         <span>Bairro: {cep.bairro}</span>    
         <span>{cep.localidade} - {cep.uf}</span>    
     </main>



    )}
   


    </div>




  );
}

export default App;
