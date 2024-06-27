import React from 'react'
import { useState, useEffect } from 'react'


const BuscarComponent = () => {
    //configurar los hooks de usestate
    const [users, setUsers] = useState([])

    //hook de busqueda
    const [buscar, setBuscar] = useState('') //variable de estado= buscar, funcion que la actualizara setBuscar

    //funcion que trae datos de la API, el conjunto de los tres catalogos compartidos
    const url = 'http://localhost:8000/getAll'

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
    let results = [] //arreglo que guardara el resultado
    if (!buscar) {
        results = users// si no hay nda en buscar, llena con datos del setUsers

    } else {
        //filtra datos de primer get, por el name
        results = users.filter((dato) =>

            dato.marca.toLowerCase().includes(buscar.toLocaleLowerCase()
        ))

        //..falta agregar filtros para todas columnas, automatizar
    }




    useEffect(() => {
        showData()
    }, [])

    //rederizar vista
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <input value={buscar} onChange={buscarIr} placeholder='Buscar por marca' className='form-control'></input>
                        <table className="table table-striped table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">marca</th>
                                    <th scope="col">medio</th>
                                    <th scope="col">fecha</th>
                                    <th scope="col">producto</th>
                                    <th scope="col">version</th>
                                    <th scope="col">programa</th>
                                    <th scope="col">hora</th>
                                    <th scope="col">vehiculo</th>
                                    <th scope="col">anunciante</th>
                                    <th scope="col">tema</th>
                                    <th scope="col">id_categoryCopys</th>
                                    <th scope="col">processing</th>
                                    <th scope="col">file</th>
                                    <th scope="col">medioPage</th>
                                    <th scope="col">spots</th>
                                    <th scope="col">src_link</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map((user) => (
                                        <tr key={user.id}>
                                            {/* interpolamos data con la variable de usestate*/}
                                            <td>{user.marca}</td>
                                            <td>{user.medio}</td>
                                            <td>{user.fecha}</td>
                                            <td>{user.producto}</td>
                                            <td>{user.version}</td>
                                            <td>{user.programa}</td>
                                            <td>{user.hora}</td>
                                            <td>{user.vehiculo}</td>
                                            <td>{user.anunciante}</td>
                                            <td>{user.tema}</td>
                                            <td>{user.id_categoryCopys}</td>
                                            <td>{user.processing}</td>
                                            <td>{user.file}</td>
                                            <td>{user.medioPage}</td>
                                            <td>{user.spots}</td>
                                            <td>{user.src_link}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BuscarComponent
