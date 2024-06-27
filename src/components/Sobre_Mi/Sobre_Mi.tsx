import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
("@fortawesome/free-solid-svg-icons");

const Sobre_Mi = () => {
  return (
    <div>
      <h1>Hola! 👋🏼 Soy Victoria Rodriguez - Full Stack Web Developer 🖥️</h1>

      <p>
        {`
        const knowMe = {
        ImFrom: '🇦🇷 Buenos Aires, Argentina',
        ProgrammingLanguages: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Mongo DB', 'Mysql', 'Node.js', 'Git', 'Github', 'NPM'];
        StudyingProgramming: 'Since 2019',
        EnglishCambridge: 'B1 (still studying)',
        LoveDogs: 'true 🐶'
        }`}

        <ul>
          <li> <FontAwesomeIcon icon={faEnvelope} /> </li>
          <li> <a href="https://github.com/VictoriaIleanaRodriguezMora"> <FontAwesomeIcon icon={faGithub}  /> </a> </li>
          <li> <a href="https://www.linkedin.com/in/victoriarodriguezmora/"> <FontAwesomeIcon icon={faLinkedin}  /> </a> </li>
        </ul>
      </p>
    </div>
  );
};

export default Sobre_Mi;
