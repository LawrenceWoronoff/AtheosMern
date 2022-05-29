import './App.css';
import Navbar from './component/Navbar';
import Character from './component/Character';
import Hero from './component/Hero';
import Introduce from './component/Introduce';
import Partnership from './component/Partnership';
import DocSlider from './component/DocSlider';
import Footer from './component/Footer';
import SplitterUp from './component/SplitterUp';
import SplitterDown from './component/SplitterDown';
import MusicPlayer from './component/MusicPlayer'
import VidoePopUp from './component/VidoePopUp'

function App() {
  return (
    <div className="App">
      <VidoePopUp/>
      <Navbar/>
      <Character/>
      <Hero/>
      <SplitterDown/>
      <Introduce/>
      <SplitterUp/>
      <DocSlider/>
      <SplitterDown/>
      <Partnership/>
      <SplitterUp/>
      <Footer/>
      <MusicPlayer/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
