import {Fragment,useState,useEffect} from 'react'
import Cancion from './components/Cancion';
import Formulario from './components/Formulario';
import axios from 'axios';
import Info from './components/Info';


function App() {

  //Definimos el STATE

  const [busquedaLetra,setBusquedaLetra]=useState({
    artista:"Pearl Jam",
    cancion:"Black"
  });
  const [letra,setLetra]=useState('');
  const [info,setInfo]=useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    

    const consultarApiLetra = async () =>{

      const {artista,cancion} = busquedaLetra;

      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      //HACER MAS DE UNA PETICION A UNA API
      const [letra ,informacion]  = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics)
      //console.log(letra.data.lyrics)

      setInfo(informacion.data.artists[0]);
      //setLetra(dataApi.lyrics);
    
    }
    consultarApiLetra();
  }, [busquedaLetra])


  return (
      <Fragment>
        <Formulario setBusquedaLetra={setBusquedaLetra}/>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
                <Info info={info}/>
            </div>
            <div className="col-md-6">
              <Cancion letra={letra}/>
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default App;
