import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import App from '../components/home-page/basketball';
import Projects from '../components/home-page/projects';
import Hobbies from '../components/home-page/hobbies';
import Contact from '../components/home-page/contact';
import Footer from '../components/home-page/footer';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <App />
      <Projects />
      <Hobbies />
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default HomePage;

