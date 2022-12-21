import { useState } from "react";
import Error from "./Error";


function Formulario({paciente,setPaciente}){

    const [nombre,setNombre] = useState("")
    const [propietario,setPropietario] = useState("")
    const [email,setEmail] = useState("")
    const [alta, setAlta] = useState("")
    const [sintomas,setSintomas] = useState("")

    const [error, setError]= useState(false)

    const  generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return fecha + random
    }

    const handleSubmit = (e) => {
       
        e.preventDefault();

        if ([nombre, propietario,email,alta,sintomas].includes("")){
            
            

            setError(true)

            return;
        }

    
        /* (e) => (false) */
        setError(false)
        
        const objetoPaciente = {
            nombre, 
            propietario,
            email,
            alta,
            sintomas,
            id: generarId()
        }

        setPaciente([...paciente,objetoPaciente])

        setNombre("")
        setPropietario("")
        setEmail("")
        setAlta("")
        setSintomas("")
    } 

    return( 

        <div className="md:w-1/2 lg:w-2/5 mb-10">

            

            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
            <p className="text-lg mt-5 text-center">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md py-10 px-5 mt-4 rounded-lg ">

                {error && <Error msj={"Todos los campos deben de estar llenos"} /> }

               <div>

                   <label htmlFor="mascotas" className="uppercase block font-bold ">Nombre mascota</label>

                    <input value={nombre} onChange={(e) => setNombre(e.target.value)}  type="text" id="mascotas" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

               </div>

               <div className="mt-5">

                    <label htmlFor="propietario" className="uppercase block font-bold ">Nombre propietario</label>

                    <input value={propietario} onChange={(e)=>setPropietario(e.target.value)}type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="email" className="uppercase block font-bold ">e-mail</label>

                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="e-mail contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="alta" className="uppercase block font-bold ">Alta</label>

                    <input value={alta} onChange={(e)=>setAlta(e.target.value)} type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="sintomas" className="uppercase block font-bold ">Sintomas</label>

                    <textarea value={sintomas} onChange={(e)=>setSintomas(e.target.value)} cols="30" rows="3" id="sintomas" className="w-full" placeholder="describe los sintomas"></textarea>

                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors " value="agregar paciente"/>



            </form>

        </div>

    )

}

export default Formulario;