import React, {useEffect} from "react";
import logo from '../../../Assets/logo.svg';
import './Home.css';
import api from '../../../Server/api'
export default function Header() {
  useEffect(() => createUser(), [])

  function createUser(){
    api.post("/users", {
      name: 'Dude',
    }).then(function (response) {
      console.log(response);
    })
  }

  return (
    <div className="main-container">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            GIVE BACK STORAGE
          </p>
          <span className="Subtitle">Devolução Sem Enrolação</span>
          
      </header>
    </div>
  );
}
