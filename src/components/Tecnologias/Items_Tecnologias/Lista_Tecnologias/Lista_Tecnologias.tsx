import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGitAlt,
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faSass,
    faNode,
    faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

import Lista_Item from "./Lista_Item/Lista_Item";

const Lista_Tecnologias = () => {
    return (
        <ul>
            <Lista_Item className_item="css" icon_item={faCss3} span_item="CSS"/>
            <Lista_Item className_item="html" icon_item={faHtml5} span_item="HTML"/>
            <Lista_Item className_item="sass" icon_item={faSass} span_item="Sass"/>
            <Lista_Item className_item="js" icon_item={faJsSquare} span_item="JavaScript"/>
            <Lista_Item className_item="react" icon_item={faReact} span_item="React"/>
        </ul>
    )
}

export default Lista_Tecnologias