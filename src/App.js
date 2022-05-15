import './App.css';
import Bill from './Pages/Bill';
import Wallet from './Pages/Wallet';

 function App() {


   return (
    <div className="App">
      <div className="firstDiv">
        <Wallet />
      </div>
      <div className="secondDiv">
        <Bill />
      </div>
      </div>

  );
}

export default App;