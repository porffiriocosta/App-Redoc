import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="main-nav">
        <Link to="/home"><h1 className="titulo">Banco Genial</h1></Link>        
        <p className="paragrafo">API Documentation</p>
    </nav>
  );
};

export default Navbar;
