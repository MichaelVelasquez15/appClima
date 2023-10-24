import { useEffect } from "react";
import { useState } from "react";
import ImageData from "./Image";

function Card() {
  const KEY = "4034a0257120e649cb4d522b971c740c";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent] = useState(null);

  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=4034a0257120e649cb4d522b971c740c&units=metric"
  //     );
  //     const resJson = await res.json();
  //     setData(resJson);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
            <img src="/weather-app-master/Cloud-background.png" alt="" />
          </div>
          <div className="logo">
            <img src="weather-app-master/Clear.png" alt="" />
          </div>
        </div>

        <div className="temp">
          <div className="nu">
            {current === null
              ? "da click al boton plis"
              : current.main.temp + "°c"}
          </div>
        </div>

        <div>
          <p>fecha hoy</p>
        </div>

        <div className="local">
          <div className="ubi">
            <span className="material-symbols-outlined">location_on</span>
            {current === null ? "da click al boton plis" : current.name}
          </div>
        </div>
      </div>

      <div className="body">
        {/* {data.map((el, index) => {
          return (
            <div className="layout2">
              <div>
                <h3 className="tit">
                  <strong>Tomorrow</strong>
                </h3>
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
          );
        })} */}
        <div>
          <h1>Today's Hightlights</h1>
          <div className="cards">
            <div>
              <h4>Wind status</h4>
              <p>
                <strong>{current.wind.speed + " mph"}</strong>
              </p>
            </div>
            <div>
              <h4>Humidity</h4>
              <p>
                <strong>{current.main.humidity + " %"}</strong>{" "}
              </p>
            </div>
            <div>
              <h4>Visibility</h4>
              <p>
                <strong>{current.wind.gust + " milles"}</strong>
              </p>
            </div>
            <div>
              <h4>Air Pressure</h4>
              <p>
                <strong>{current.main.pressure + " mb"}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;

<main className="container"></main>;

{
  /* <div className="car" key={index}>
<div className="DivImg">
  <img src={el.flags.png} alt={el.name.official}></img>
</div>
<div className="DivText">
  <h3 className="tit">
    <strong>{el.name.official}</strong>
  </h3>
  <ul>
    <li>Population: {el.population}</li>
    <br />
    <li>Region: {el.region}</li>
    <br />
    <li>Capital: {el.capital}</li>
  </ul>
</div>
</div> */
}
