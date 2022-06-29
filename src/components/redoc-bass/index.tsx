import Navbar from 'components/Navbar';
import { RedocStandalone } from 'redoc';

const RedocBass = () => {
    return (
      <>
      <Navbar />
        <div className="App">
          <RedocStandalone specUrl="http://localhost:5000/swagger/v1/swagger.json" />
      </div>
      </>

    );
  };
  
  export default RedocBass;