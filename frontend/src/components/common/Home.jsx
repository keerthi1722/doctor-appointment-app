import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import p3 from '../../images/image.png';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link className='head' to={'/'}>BookaDoc</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll />
            <Nav>
              <Link className='li' to={'/'}>Home</Link>
              <Link className='li' to={'/login'}>Login</Link>
              <Link className='li' to={'/register'}>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='home-container'>
        <div className="left-side">
          <img alt="doctor appointment banner" src={p3} />
        </div>
        <div className="right-side">
          <p>
            <span className='f-letter'>Effortlessly schedule your doctor</span><br />
            <span className='s-letter'>appointments with just a few clicks,</span> <br />
            <span className='t-letter'>putting your health in your hands.</span><br />
            <Button className='mt-3 register'>
              <Link className='bto' to={'/login'}>Book your Doctor</Link>
            </Button>
          </p>
        </div>
      </div>

      <Container>
        <h1 className='text-center mb-4'>About Us</h1>
        <div className="right-side">
          <p>
            Booking a doctor appointment has never been easier. With our convenient online platform, you can quickly and effortlessly schedule your appointments from the comfort of your own home...
            {/* The rest of your content is unchanged for brevity */}
          </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
