import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <p> ~ $ cd /home</p>
        <ul>

          <Link to={`/sobremi/`}>
            <li>Sobre mí</li>
          </Link>

          <Link to={`/proyectos/`}>
            <li>Proyectos</li>
          </Link>

          <Link to={`/tecnologias/`}>
            <li>Tecnologias</li>
          </Link>

          <Link to={`/experiencia-de-trabajo/`}>
            <li>Experiencia de trabajo</li>
          </Link>

          <Link to={`/estudios/`}>
            <li>Estudios</li>
          </Link>

        </ul>
      </div>
    </header>
  );
};

export default Header;
