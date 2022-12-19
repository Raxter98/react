
function Formulario(){

    return( 

        <div className="md:w-1/2 lg:w-2/5 mb-10">

            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
            <p className="text-lg mt-5 text-center">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form className="bg-white shadow-md py-10 px-5 mt-4 rounded-lg ">

               <div>

                   <label htmlFor="mascotas" className="uppercase block font-bold ">Nombre mascota</label>

                    <input type="text" id="mascotas" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

               </div>

               <div className="mt-5">

                    <label htmlFor="propietario" className="uppercase block font-bold ">Nombre propietario</label>

                    <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="email" className="uppercase block font-bold ">e-mail</label>

                    <input type="email" id="email" placeholder="e-mail contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="alta" className="uppercase block font-bold ">Alta</label>

                    <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />

                </div>

                <div className="mt-5">

                    <label htmlFor="sintomas" className="uppercase block font-bold ">Sintomas</label>

                    <textarea cols="30" rows="3" id="sintomas" className="w-full" placeholder="describe los sintomas"></textarea>

                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors " value="agregar paciente"/>



            </form>

        </div>

    )

}

export default Formulario;