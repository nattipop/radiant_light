import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Link to="/navigate"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1707089842/settings_wtplpv.png" alt="" id="hamburger-dropdown" /></Link>
      <Footer/>
    </div>
  );
}

export default App;
