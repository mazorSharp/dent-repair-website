import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About, Home, Gallery, Contact, Error } from "./Pages";
import logoImg from "./Assets/pro_dent_master_logo.png";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <div className="nav">
        <nav>
          <div className="homeLink" id="home">
            <a href="#home">
              <img src={logoImg} alt="logo" id="logoImg"></img>
            </a>
          </div>
          <div className="navLinks">
            {/* <Link to="/" className="links">Home</Link>
          <Link to="/gallery" className="links">Gallery</Link>
          <Link to="/about" className="links">About</Link>
          <Link to="/contact" className="links">Contact</Link> */}
            <a href="#home" className="links">
              Home
            </a>
            <a href="#gallery" className="links">
              Gallery
            </a>
            <a href="#about" className="links">
              About
            </a>
            <a href="#contact" className="links">
              Contact
            </a>
          </div>
        </nav>
      </div>
      {/* <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Gallery" element={ <Gallery /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/*" element={ <Error /> } />
      </Routes> */}

      <Home />

      <div className="footer" id="contact">
        <div className="footerTitle">
          <article> Craftmanship you can trust!</article>
        </div>
        <br />
        <div className="footerText">
          <article> Call now for a free quote: (403) 872-8050</article>
          {/* <article> (403) 872-8050</article> */}
        </div>

        {/* <div className="contactBox">
            <article className="contactTitle"> Contact us for a free quote now!</article>
 
        <form action="https://formsubmit.co/turbodm@hotmail.com" method="POST" id="requestQuote">
          <input type="hidden" name="_subject" value="Free Quote from Pro Dent Master"></input>
          <div>
            Name: <input type="text" name="name" placeholder="Name" required className="formInput"></input>
            E-Mail: <input type="email" name="email" placeholder="Email" required className="formInput"></input>
          </div>
          <div>
            Number: <input type="number" name="phone_number" placeholder="Phone Number" required className="formInput"></input>
          </div>

          <div>

          <textarea name="message" placeholder="Enter message..." form="requestQuote" className="textArea"></textarea>
          </div>
          <button type="submit" className="submitButton">Send</button>
        </form>
        </div> */}
      </div>

      {/* </Router> */}
    </div>
  );
}

export default App;
