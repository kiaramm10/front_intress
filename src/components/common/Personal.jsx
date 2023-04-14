import React, { useEffect, useState } from "react";
import instance from "../../api/apis";


function toggleFields() {
    const fields = document.querySelector('.fields'); // Aquí se selecciona el elemento
    if (fields) { // Se verifica que el elemento no sea nulo
      fields.classList.toggle('show-fields'); // Si el elemento es válido, se aplica la acción
    }
}
function Personal() {


    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response = await instance.get('/personals')
            setData(response.data['hydra:member']);
            // console.log(response.data['hydra:member'])

        }

        fetchData();
    }, []);

    return (
        <div className='card'>
            {data.map(int => {
                return (
                    <div className='card-body' key={int.id}>
                        <h3 className='card-title'>Hola {int.name}!</h3>
                        <p className='card-title'>{int.surname}</p>
                        <p className='card-title'>{int.rol}</p>
                        <img className='card-img' src={int.image} alt={int.name} />
                        <img className='toggle-icon closed' onClick={toggleFields} src='https://www.pngwing.com/es/free-png-yagthttps://www.flaticon.com/free-icon/user_847969?term=user&page=1&position=35&origin=tag&related_id=847969p' alt='iconouser'/>
                    </div>
                )
            })}
        </div>
    )
}

export default Personal