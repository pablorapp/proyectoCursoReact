

import {useState, useEffect} from 'react'

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const increentar = () => {
    setContador(contador+1)
  }
  return [contador, increentar]
}

const App = ()=>{
  const [contador, increentar] = useContador(0)
  useEffect(()=>{
    document.title = contador
  },[contador])
  return(
    <div>
      Contado: {contador}
      <button onClick={increentar}>
        Incrementar
      </button>
    </div>
  )
}

export default App;
