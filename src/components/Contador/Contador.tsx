import { useState } from 'react'
import './Contador.css'

function Contador() {
  //useStats = cria uma variavel de estado
  const[numero,setNumero] = useState(0)
  
function somarMaisUm(){
  setNumero(numero+1)
}

function subtrai(){
  setNumero(numero-1)
}

  return (
    <div className="container">
        <p>O valor é: {numero}</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
        <br />
        <button onClick={subtrai}>Subtrair -1</button>
    </div>
  )
}

export default Contador