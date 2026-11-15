import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  // shows or hides the opening hours when the button is clicked
  const [showHours, setShowHours] = useState(false);

  return (
    <div className="page">
      <div className="hero">
        <div>
          <h1>Welcome to Crumb &amp; Co. Bakery</h1>
          <p>
            We bake fresh bread, pastries and cakes every morning
            using simple ingredients.
          </p>
          <Link to="/products" className="button">See our bakes</Link>
        </div>
        <img src="/images/hero.svg" alt="Fresh bread" />
      </div>

      <button className="button" onClick={() => setShowHours(!showHours)}>
        {showHours ? "Hide opening hours" : "Show opening hours"}
      </button>

      {showHours && <p className="hours">Open every day: 7am - 7pm.</p>}
    </div>
  );
}

export default Home;
