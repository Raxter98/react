import Pacientes from "./Pacientes";
import { useState,useEffect } from "react";

function ListadoPacientes({paciente, setEditarPaciente}){ 

    
    return(

        

        <div className="md:w-1/2 lg:w-3/5 text-center h-screen overflow-y-scroll">
            
            {paciente && paciente.length ? (
                    <>
                    
                            <h2 className="text-3xl font-black pb-5 ">Listado Pacientes</h2>

                            <p>Administra tu <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>  </p>




                            {paciente.map((pacientes,key) =>(
                                <Pacientes
                                key = {key}
                                datosPacientes={pacientes}
                                setEditarPaciente = {setEditarPaciente}
                                />
                            )) }
                    
                    
                    </>


            ): (

                <>
                
                    <h2 className="text-3xl font-black pb-5 uppercase ">No Hay pacientes</h2>

                    <p>Empieza agregando <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>  </p>
                
                </>

            ) }

         
        
        
            
        </div>


    )

}

export default ListadoPacientes;