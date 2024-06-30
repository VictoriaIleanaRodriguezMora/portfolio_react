import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faEnvelope } from "@fortawesome/free-solid-svg-icons";
("@fortawesome/free-solid-svg-icons");

const Sobre_Mi = () => {
  return (
    <main>
      <section id="sobremi">
        <article className="sobremi__contacto">
          <h1>
            Hola! 👋🏼 Soy Victoria Rodriguez - Full Stack Web Developer
            <FontAwesomeIcon icon={faDesktop} />
          </h1>

          <div className="sobremi__contacto--redes">
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li>
                <a href="https://github.com/VictoriaIleanaRodriguezMora">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/victoriarodriguezmora/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>

          <div className="sobremi__contacto--curriculum">
            <button>Curriculum</button>
          </div>
        </article>

        <article className="sobremi__knowme">
          <div>
            <p>
              {`
              const knowMe = {
              ImFrom: '🇦🇷 Buenos Aires, Argentina',
              ProgrammingLanguages: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Mongo DB', 'Mysql', 'Node.js', 'Git', 'Github', 'NPM'];
              StudyingProgramming: 'Since 2019',
              EnglishCambridge: 'B1 (still studying)',
              LoveDogs: 'true 🐶'
            }`}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Sobre_Mi;
