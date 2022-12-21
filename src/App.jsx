import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

function App() {

  const [array,setArray] = useState([]);
  
  const arrowfunction = () => {

      
    2 + 2
    return
  } 

  return (
    <div className="container mx-auto mt-20">

        <Header 
          hola={arrowfunction}
        />

        <div className="mt-12 md:flex">
          <Formulario /> 
          <ListadoPacientes />
        </div>

             
    </div>    
  )
}

export default App
