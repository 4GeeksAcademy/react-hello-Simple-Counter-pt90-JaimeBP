import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondsCounter";

const Home = () => {
  const [seconds, setSeconds] = useState(0); // Estado para los segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Incrementar segundos cada segundo
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo
  }, []);

  return (
    <div className="text-center">
      <h1>Seconds Counter</h1>
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
