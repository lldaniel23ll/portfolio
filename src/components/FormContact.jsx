import React, {Fragment, useState} from "react";
import "./css/FormContact.css"

const FormContact = () => {
    const [data, setData] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (event) =>{
//        console.log(event.target.value);
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    const sendData = (event) => {
        event.preventDefault();
        console.log(data.name, data.lastName);
    }
    return(
        <>
        <Fragment>
            <form className="formContact" onSubmit={sendData}>
                <div className="mb-3">
                    <label>Ingrese su nombre</label>
                    <input
                        type='text'
                        placeholder=""
                        className="p-2 form-control"
                        name="name"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="mb-3">
                    <label>Ingrese su apellido</label>
                    <input
                        type='text'
                        placeholder=""
                        className="p-2 form-control"
                        name="lastName"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" class="btn btn-warning">Enviar</button>
                </div>
                <div className="p-5">
                    <h3>{data.name} - {data.lastName}</h3>
                </div>
            </form>
            
        </Fragment>
        </>
    );
}

export default FormContact;