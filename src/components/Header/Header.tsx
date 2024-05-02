import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header>
      <div>
        {pathname === "/experiencia-de-trabajo/" ? (
          <p> ~ $ cd /home/experiencia-de-trabajo </p>
        ) : (
          <p> ~ $ cd /home </p>
        )}
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
