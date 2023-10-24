import { useEffect } from "react";
import { useState } from "react";

function Card() {
  const KEY = "4034a0257120e649cb4d522b971c740c";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (lat === null && long === null) return;

    console.log("fetch de datos");
    const getData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`;
      const res = await fetch(link);
      const data = await res.json();

      console.log(data);
      setCurrent(data);
    };
    getData();
  }, [lat, long]);

  const handleSucces = (data) => {
    console.log("tenemos la ubicacion", data);
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
  };

  const handleError = () => {
    console.log("Ubicacion denegada");
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
  };

  return (
    <section className="layout">
      <div className="sidebar">
        <nav className="nav1">
          <button className="bt1">Search for places</button>
          <button className="bt2" onClick={handleLocation}>
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </nav>

        <div className="caja">
          <div className="fondo">
            <img src="/public/weather-app-master/Cloud-background.png" alt="" />
          </div>
          <div className="logo">
            <img src="weather-app-master/Clear.png" alt="" />
          </div>
        </div>

        <div>
          <p>
            {current === null ? "da click al boton plis" : current.main.temp}
          </p>
        </div>

        <div>
          <p>fecha hoy</p>
        </div>

        <div>
          <p>
            <span class="material-symbols-outlined">location_on</span>
            {current === null ? "da click al boton plis" : current.name}
          </p>
        </div>
      </div>

      <div className="body">
        <div>
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>5</p>
          </div>
        </div>

        <div>
          <h1>Today's Hightlights</h1>
          <div className="cards">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
