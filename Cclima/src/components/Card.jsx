function Card() {
  return (
    <section className="layout">
      <div className="sidebar">
        <nav>
          <button>1</button>
          <button>2</button>
        </nav>
        <div className="fondo"></div>
        <div className="logo">
          <img src="weather-app-master/Clear.png" alt="" />
        </div>
        <div>
          <p>estado</p>
        </div>
        <div>
          <p>fecha hoy</p>
        </div>
        <div>
          <p>ubicacion</p>
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
