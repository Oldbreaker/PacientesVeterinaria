import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  crearNuevacita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state
    this.setState({
      citas
    });
  };
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita crearNuevacita={this.crearNuevacita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas citas={this.state.citas} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
