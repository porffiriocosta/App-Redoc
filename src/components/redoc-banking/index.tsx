import Navbar from 'components/Navbar';
import { RedocStandalone } from 'redoc';

const RedocBanking = () => {
    return (
        <>
        <Navbar />
          <div className="App">
          <RedocStandalone specUrl="https://livrariavirtualapi.azurewebsites.net/swagger/v1/swagger.json" />
        </div>
        </>
      
    );
  };
  
  export default RedocBanking;