import './App.scss';
import HeroSections from './Components/HeroSections';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import MenuOverlay from './Components/MenuOverlay';
import ImagesCollections from './Components/ImagesCollections';
import { useState } from 'react';

function App() {
  const[navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <div className="App">
         <Container>
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
          <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
          <HeroSections />
          <ImagesCollections />
         </Container>
        <div>
        <img src='./images/image-1.jpg' width={200} margin-bottom={50}/>
        <img src='./images/image-2.jpg' width={200}/>
        <img src='./images/image-3.jpg' width={200}/>
        <img src='./images/image-4.jpg' width={200}/>
        </div>

     
    </div>

  );
}

export default App;
