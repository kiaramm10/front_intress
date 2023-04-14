import React, { useEffect, useState } from "react";

function Holidays() {
   
  const [repo, setRepo] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:8000/apiholidays/list')
      .then(response => response.json())
  
      .then(repo => 
          setRepo(repo) )// Establece el valor de 'repo' primero
           // Puedes dejar esto aquí si quieres, pero no es necesari)
      .catch(error => console.error(error));
      
  }, []);

  return (
    <div>
      {repo.map((item) => (
        <p key={item.id}>{item.date}</p>
      ))}
    </div>
  );

}

export default Holidays
