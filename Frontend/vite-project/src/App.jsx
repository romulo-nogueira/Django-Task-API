import TaskList from "./components/TaskList";
import { useState } from "react";
import  Login from './components/login'
import {getAccessToken, clearTokens} from './services/api'

function App(){
  const [isAuthenticated, setIsAuthenticated]= useState(!!getAccessToken());

  function handleLogin(){
    setIsAuthenticated(true);

  }

  function handleLogout(){
    clearTokens();
    setIsAuthenticated(false);

  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin}/>
  }


  return (
    <div className="App">
      <div style={{textAlign: 'right', padding: '8px 16px'}}>
        <button onClick={handleLogout}>Sair</button>
      </div>
      <TaskList/>
    </div>
  );

}
export default App;