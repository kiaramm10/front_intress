import React, { useEffect, useState } from "react";
import styles from "../../styles/css/main.css";


function Signin() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apisignin/list')
      .then(response => response.json())
      .then(repo => {
        setRepo(repo);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}>
      <h1 className={styles.title}>Signin Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {repo.map(int => (
            <div key={int.id} className={styles.item}>
              <h3 className={styles.subtitle}>Time Start: {int.timestart}</h3>
              <p>Time Stop: {int.timestop}</p> 
              <p>Time Restart: {int.timerestart}</p> 
              <p>Time Finish: {int.timefinish}</p>
              <p>Hour Count: {int.hourcount}</p>
              <div className={styles.actions}>
                <button className={styles.button} style={{ backgroundColor: "rgba(0, 136, 148, 1)", color: "#fff" }}>Fichar Entrada</button>
                <button className={styles.button} style={{ backgroundColor: "rgba(0, 136, 148, 1)", color: "#fff" }}>Fichar Salida</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Signin;

