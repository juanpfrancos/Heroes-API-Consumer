import React, {useState} from 'react';
import axios from 'axios';


function AddHero(){


    const [datos, setDatos] = useState({
        name:'',
        alias:'',
    });

    const handleInputChange = (event) =>{
      setDatos({
        ...datos,
        [event.target.name]: event.target.value
      })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8000/heroes/', datos)  
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return(
        <div className="container">
            <form onSubmit={enviarDatos}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name"  name="name" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Alias"  name="alias" onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


export default AddHero;