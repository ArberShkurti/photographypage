import './App.scss';
import HeroSections from './Components/HeroSections';
import { Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header';
import MenuOverlay from './Components/MenuOverlay';
import ImagesCollections from './Components/ImagesCollections';
import InformationSection from './Components/InformationSection';
import ContactForm from './Components/ContactForm';
import { useState } from 'react';

function App() {
  const[navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <div className="App">
         <Container>
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
          <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
          <HeroSections />
          <InformationSection />
          <div className='foto' >del kjo</div>
          {/* <ImagesCollections /> */}
          <Container className='footer-section'>
            <Row>
              <Col>
              <div className='mt-1'>
                <img src="../icons/logoash.png"></img>
              </div>
              </Col>
                <Col className='mt-5' >
                <ContactForm />
                </Col>

            </Row>
          </Container>
         </Container>     
    </div>

  );
}

export default App;
