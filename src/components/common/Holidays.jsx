import React, { useEffect, useState } from "react";

function Holidays() {
    
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/holidays.json')
        .then(response => response.json())
    
        .then(repo => 
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        .catch(error => console.error(error));
        
    }, []);

  return (
    <div>
        {repo.map(int => {
                return(
                    <div key={int.id}>
                        <h3>{int.date}</h3>
                    </div>
                )
            })} 
    </div>
  )
}

export default Holidays
