// import logo from './logo.svg';
import './App.css';
import ImageSlider from './sections/ImageSlider';
import DrawerAppBar from './sections/Navbar';

function App() {
  return (
    <div className="App">
       <DrawerAppBar />
       <ImageSlider/>
    <h1>Hello PC</h1>
    </div>
  );
}

export default App;
