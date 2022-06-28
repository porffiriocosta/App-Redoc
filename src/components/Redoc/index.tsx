import { RedocStandalone } from 'redoc';

const Redoc = () => {
    return (
        <div className="App">
          <RedocStandalone specUrl="https://livrariavirtualapi.azurewebsites.net/swagger/v1/swagger.json" />
      </div>
    );
  };
  
  export default Redoc;