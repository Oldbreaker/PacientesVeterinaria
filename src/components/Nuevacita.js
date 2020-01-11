import React, { Component } from "react";
import uuid from "uuid";
const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};
class Nuevacita extends Component {
  state = { ...stateInicial };
  //Cuando el usuario escribe en los inputs
  handleChange = e => {
    //colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };
  //Cuando el usuario envia el formulario
  handleSubmit = e => {
    e.preventDefault();
    //extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    //validar que todos los campos esten llenos
    if (
      mascota == "" ||
      propietario == "" ||
      fecha == "" ||
      hora == "" ||
      sintomas == ""
    ) {
      this.setState({
        error: true
      });

      //detener la ejcucion
      return;
    }
    //generar objeto con los datos
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    // Agregar la cita aL state de App
    this.props.crearNuevacita(nuevaCita);

    //colocar el state inicial
    this.setState({
      ...stateInicial
    });
  };
  render() {
    // estraer valor del state
    const { error } = this.state;
    return (
      <div className="card mt-5 py 5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            LLena el formulario para crear una nueva cita
          </h2>
          {error ? (
            <div
              className="alert alert-danger mt-2 mb-5
          text-center"
            >
              <a href="blue" class="alert-link">
                Todos los campos son obligatorios
              </a>
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-2 col lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>
              <label className="col-sm-2 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-2 col lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas de tu mascota"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>{" "}
            {/*form-group */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success 
            btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Nuevacita;
