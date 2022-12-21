import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

function App() {

  const [paciente,setPaciente] = useState([]);
  
  

  return (
    <div className="container mx-auto mt-20">

        <Header />

        <div className="mt-12 md:flex">
          <Formulario 
          paciente = {paciente}
          setPaciente = {setPaciente}
          /> 
          <ListadoPacientes 
           paciente = {paciente} 
          />
        </div>

             
    </div>    
  )
}

export default App
