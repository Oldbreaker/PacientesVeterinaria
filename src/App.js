import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";

class App extends Component {
  state = {
    citas: []
  };

  crearNuevacita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state
    this.setState({
      citas: citas
    });
  };
  render() {
    return (
      <div class="container-fluid">
        <Header titulo="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita crearNuevacita={this.crearNuevacita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
