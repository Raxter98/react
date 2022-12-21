import Pacientes from "./Pacientes";

function ListadoPacientes({paciente}){ 

    return(

        <div className="md:w-1/2 lg:w-3/5 text-center h-screen overflow-y-scroll">
            

            <h2 className="text-3xl font-black pb-5 ">Listado Pacientes</h2>

            <p>Administra tu <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>  </p>

          


          {paciente.map((pacientes,key) =>(
                <Pacientes
                 key = {key}
                 datosPacientes={pacientes}
                />
          )) }
         
        
        
            
        </div>


    )

}

export default ListadoPacientes;