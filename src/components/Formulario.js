import React,{useState} from 'react'
import Logo from '../img/logo_small.png'

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda,setBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error,setError]=useState(false);

    const {artista,cancion}= busqueda;

    //FUNCION A CADA INPUT PARA LEER SU CONTENIDO

    const actulizarState  = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    //CONSULTAR APIS Y VALIDAR FORMULARIO

    const buscarInformacion = (e) =>{
        e.preventDefault();

        //VALIDACION

        if (artista.trim()===''||cancion.trim()===''){
            setError(true)
            return;
        }
        setError(false);

        //PASAR AL COMPONENETE PRINCIPAL AL PASAR LA VALIDACIÓN
        setBusquedaLetra(busqueda);
    }
 

    return (
        <div className="container-buscador">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son Obligatorios</p>
            :null }
            <div className="container ">
                <div className="row">
                    <form onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2 ">
                        <fieldset >
                            <div className="container-imagen">
                                <img src={Logo} className="imagen-logo" alt="/" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={actulizarState}
                                        value={artista}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Canción</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={actulizarState}
                                            value={cancion}/>
                                        </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block">Buscar</button>

                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
