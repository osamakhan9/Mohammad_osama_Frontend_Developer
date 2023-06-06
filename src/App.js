
import './App.css';
import Main from './Routes/Main';
import Landing_page from './components/Landing_page';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <Landing_page/> */}
     <Main/>
    </div>
  );
}

export default App;
