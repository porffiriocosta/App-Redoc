import { Link } from "react-router-dom";

import './styles.css';

const Home = () => {
    return (
      <div className="home-container">
          <Link to="/api-bass"><h2>Banco Genial API Bass</h2></Link> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis ac risus sit amet consequat. Donec quis semper odio. Vestibulum.</p>

          <Link to="/api-bass"><h2>Banco Genial API Banking</h2></Link> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis ac risus sit amet consequat. Donec quis semper odio. Vestibulum.</p>
      </div>
    );
  };
  
  export default Home;