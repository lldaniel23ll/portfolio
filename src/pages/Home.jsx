import React from 'react';
import img from "../components/img/CV.png";

const Home = () => {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border">
              <img
                src={img}
                className="card-img-top"
                alt="imagen de quien soy"
              />
              <div className="card-body">
                <h5 className="card-title text-underline">Descripcion</h5>
                <p className="card-text text-secondary">
                  Soy un joven universitario con deseos de comenzar a trabajar
                  como desarrollador web de manera remota ya que tengo una
                  discapacidad la cual me impide movilizar a una oficina.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 pt-3">
            <div className="card">
              <div className="card-body">
                <div className="card-text text-secondary h1 text-underline text-center">
                  Habilidades
                </div>
                <ul className="h4 text-center">
                  <li>MySQL</li>
                  <li>Microsoft SQL Server</li>
                  <li>CSS3 y Bootstrap</li>
                  <li>HTML5</li>
                  <li>PHP</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 pt-3">
            <div className="card">
              <div className="card-body">
                <div className="card-text text-secondary h1 text-underline text-center">
                  Experiencia
                </div>
                <p className="pr-4 text-center">
                  La experiencia que poseo es de proyectos que he hecho en la
                  universidad y propios, puedo trabajar en equipo usando GIT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;