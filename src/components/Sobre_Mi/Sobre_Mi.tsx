import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
("@fortawesome/free-solid-svg-icons");

const Sobre_Mi = () => {
  // const knowMe = {
  //   ImFrom: "🇦🇷 Buenos Aires, Argentina",
  //   StudyingProgramming: "Since 2019",
  //   EnglishCambridge: "B1 (still studying)",
  //   LoveDogs: "true 🐶",
  // };

  return (
    <main>
      <section id="sobremi">
        <article className="sobremi__contacto">
          <h1>
            Hola! 👋🏼 <br />
            Soy Victoria Rodriguez, <br />
            Full Stack Web Developer
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
            <button>
              VER CURRICULUM <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </article>

        <article className="sobremi__knowme">
          <div>
            <p>
              <span>
                <span className="sobremi__knowme-const">const </span>
                knowMe
                <span className="sobremi__knowme-const"> = </span>
                <span className="sobremi__knowme-bracket"> {`{`}</span>
              </span>
              <br />
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="sobremi__knowme-key">ImFrom:</span>
                <span className="sobremi__knowme-value">
                  '🇦🇷 Buenos Aires, Argentina',
                </span>
              </span>
              <br />
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="sobremi__knowme-key">
                  StudyingProgramming:
                </span>
                <span className="sobremi__knowme-value"> 'Since 2019',</span>
              </span>
              <br />
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="sobremi__knowme-key">EnglishCambridge:</span>
                <span className="sobremi__knowme-value">
                  'B1 (still studying)',
                </span>
              </span>
              <br />
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="sobremi__knowme-key">LoveDogs:</span>
                <span className="sobremi__knowme-value"> 'true 🐶'</span>
              </span>
              <br />
              <span>
                <span className="sobremi__knowme-bracket">{`};`}</span>
              </span>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Sobre_Mi;
