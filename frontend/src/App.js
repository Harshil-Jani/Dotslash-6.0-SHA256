import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";
import Home from './components/Home';

function App() {
  const [walletConnect, setWalletConnect] = useState(null);
  const [action,setAction] = useState(<Home/>);
  return (
    <div className='webbody'>
      <Navbar setWalletConnect={setWalletConnect} setAction={setAction}/>
      {
        !walletConnect ?
          <h1>Please Connect Wallet</h1>
          :
          <div>
            {action}
          </div>
      }
    </div>
  );
}

export default App;
