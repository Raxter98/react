function Pacientes({datosPacientes }){

    const {nombre, propietario,email,alta,sintomas,key } = datosPacientes;

    return (

        <div className="text-left  bg-white p-7 mt-5 ml-3 mb-3 rounded-lg">

            <p className="font-bold uppercase mb-2">
                nombre: <span className="font-light normal-case"> { nombre} </span>
            </p>

            <p className="font-bold uppercase mb-2">
                propietario: <span className="font-light normal-case"> { propietario} </span>
            </p>

            <p className="font-bold uppercase mb-2">
                email: <span className="font-light normal-case"> { email}</span>
            </p>

            <p className="font-bold uppercase mb-2">
                fecha alta: <span className="font-light normal-case"> { alta}</span>
            </p>

            <p className="font-bold uppercase mb-2">
                sintomas: <span className="font-light normal-case"> { sintomas} </span>
            </p>

        
        </div>

    )

}


export default Pacientes; 
