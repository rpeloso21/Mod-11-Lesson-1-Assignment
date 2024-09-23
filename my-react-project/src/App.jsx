import Header from "./header"
import About from "./about";
import Contact from "./contact";
import'./styles.css';

function App() {

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="about">
        <Contact/>
      </div>
    </div>

  
  )
}

export default App
