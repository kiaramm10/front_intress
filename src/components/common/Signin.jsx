import React, { useEffect, useState } from "react";


function Signin() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:8000/apisignin/list')
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
                        <h3>{int.timestart}</h3>
                        <p>{int.timestop}</p> 
                        <p>{int.timerestart}</p> 
                        <p>{int.timefinish}</p>
                        <p>{int.hourcount}</p>
                    </div>
                )
            })} 
    </div>
  )
}

export default Signin