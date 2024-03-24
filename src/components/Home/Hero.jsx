function Hero() {
  const vehicleOptions = (
    <>
      <option value="volkswagen">Volkswagen</option>
      <option value="maserati">Maserati</option>
      <option value="audi">Audi</option>
      <option value="bmw">Bmw</option>
      <option value="mercedes-benz">Mercedes-benz</option>
      <option value="lamborghini">Lamborghini</option>
      <option value="lexus">Lexus</option>
      <option value="ferrari">Ferrari</option>
      <option value="bentley">Bentley</option>
      <option value="land-rover">Land-rover</option>
      <option value="dodge">Dodge</option>
      <option value="jaguar">Jaguar</option>
    </>
  );

  return (
    <div className="hero">

      <div className="container">
        
        {/* hero call-to-action */}
        <div className="cta">
          <h2>Book Your Auto Rental</h2>
          <p>
            Luxury Cars at low-cost, starts $75 / day from over 100 premium
            locations
          </p>
        </div>

        {/* hero form */}
        <form className="hero-form">
          <div>
            <label htmlFor="pickup-date">Pick-up Date:</label>
            <input type="date" id="pickup-date" required />
          </div>

          <div>
            <label htmlFor="dropoff-date">Drop-off Date:</label>
            <input type="date" id="dropoff-date" required />
          </div>

          <div>
            <label htmlFor="maker">Makers of Vehicle</label>
            <select className="darken-text" id="location" required>
              {vehicleOptions}
            </select>
          </div>

          <button className="btn-red" onClick={(e) => e.preventDefault()}>
            Find it now
          </button>
        </form>
      </div>

      {/* transition svg */}
      <div className="transition-svg placed-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1000.1 -100.1 1000 100.2"
          preserveAspectRatio="none"
        >
          <path
            d="M -0 -6 V 0 h -1000 v -100 L -0 -6 z"
            stroke="none"
            strokeWidth="0.1"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
