import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <Header titulo="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
