import { useEffect, useState } from 'react'
import './Task.css'


function Task() {
  const[completado,setCompletado] = useState(false)//booleann
  const[tarefa,setTarefa] = useState('')//string

//  Função a ser disparada /Um gatlho(algo a ser analizado)
  useEffect(() => {

    if(completado == true){
      setTarefa("Tarefa Concluida")
    }else{
      setTarefa(" ")
    }

  }, [completado])

  /* 
    useEffect( () => {} )
    
    é igual

    function () {} é igual () => {}
  
  */
  
  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {tarefa}</h3>
        <button onClick={() => {setCompletado(true)}}>Conclua a Tarefa</button>
        <br />
        <button onClick={() => {setCompletado(false)}}>Reiniciar tarefa</button>
    </div>
  )
}

export default Task