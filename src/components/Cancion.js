import React, { Fragment } from 'react';

const Cancion = ({letra}) => {

    if(letra.length === 0) return null;

    return ( 
        <Fragment>
            <h2 className="card-header bg-primary text-light font-weight-bold">Letra Canción</h2>
       

          <div className="card border-light">
            |<div className = "card-body">
                <p className="letra ">{letra}</p>
            </div>
          </div>

        </Fragment>
    );
}
 
export default Cancion;
