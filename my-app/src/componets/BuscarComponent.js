import React from 'react'
import { useState, useEffect } from 'react'


const BuscarComponent = () => {
    //configurar los hooks de usestate
    const [users, setUsers] = useState([])

    //hook de busqueda
    const [buscar, setBuscar] = useState('') //variable de estado= buscar, funcion que la actualizara setBuscar

    //funcion que trae datos de la API
    const url = 'https://jsonplaceholder.typicode.com/users'

    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        //pasamos el data json a la variable de estado de usestate
        setUsers(data)
    }

    //busqueda de dato, trae el valor del input buscar
    const buscarIr = (e) => {
        setBuscar(e.target.value)
        console.log(e.target.value)
    }


    //filtrado de datos
    let results=[] //arreglo que guardara el resultado
    if (!buscar) {
        results=users// si no hay nda en buscar, llena con datos del setUsers

    }else{
        //filtra datos de primer get, por el name
        results = users.filter((dato)=>
            dato.name.toLowerCase().includes(buscar.toLocaleLowerCase())      
        )

        //..falta agregar filtros para todas columnas, automatizar
    }

    useEffect(() => {
        showData()
    }, [])

    //rederizar vista
    return (
        <div>
            <input value={buscar} onChange={buscarIr} placeholder='Buscar' className='form-control'></input>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((user) => (
                            <tr key={user.id}>
                                {/* interpolamos data con la variable de usestate*/}
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BuscarComponent
