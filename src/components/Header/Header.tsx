import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let path;
  console.log("path", pathname);
  
  if (pathname === "/experiencia-de-trabajo/") {
    path = <p> ~ $ cd /home/experiencia-de-trabajo/ </p>;
  }
  if (pathname === "/tecnologias/") {
    path = <p> ~ $ cd /home/tecnologias/ </p>;
  }
  if (pathname === "/proyectos/") {
    path = <p> ~ $ cd /home/proyectos/ </p>;
  }
  if (pathname === "/estudios/") {
    path = <p> ~ $ cd /home/estudios/ </p>;
  }
  if (pathname === "/sobre-mi/") {
    path = <p> ~ $ cd /home/sobre-mi/ </p>;
  }


  return (
    <header>
      <div>
        <p>{path}</p>

        <ul>
          <Link to={`/sobre-mi/`}>
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