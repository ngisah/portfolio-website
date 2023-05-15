import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import './App.css'
import Experience from './Components/Experience/Experience';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience/>
    </div>
  );
}

export default App;
