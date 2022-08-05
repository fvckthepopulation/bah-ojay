import './App.css';
import { HashRouter ,Switch,Route,Link } from "react-router-dom";
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Galery from './pages/Galery';ct';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import logo from '../src/assets/logo-bahojay.png';
import iconWA from '../src/assets/icons/icon-whatsapp.svg';

function App(args) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins','Josefin Sans','Libre Baskerville']
      }
    });
   }, []);

  return (
    <HashRouter>
      <div className="font-1">
        <div className='navbar d-flex'>
          <div className='nav-title'>
            <img className='logo-navbar' alt='logo' src={logo}/>
          </div>
          <div className='nav-menu d-flex font-2'>
            <h4><Link className='nav-item' to="/">Home</Link></h4>
            <h4><Link className='nav-item' to="/about">Tentang Kami</Link></h4>
            <h4><Link className='nav-item' to="/contact">Kontak Kami</Link></h4>
            <h4><Link className='nav-item' to="/galery">Galeri</Link></h4>
            <button className='btn-hubungi-wa font-2 d-flex'>
              <img alt='icon-wa' src={iconWA} width={20} className='icon-button'></img>
              <p className='p-icon'>Hubungi WhasApp</p>
            </button>
          </div>
        </div>
        {/* <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">Tentang Kami</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Kontak Kami</Link>
            </NavItem>
            <NavItem>
              <Link to="/galery">Galeri</Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/galery">
            <Galery />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
