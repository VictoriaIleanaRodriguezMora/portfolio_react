import { Interface_Children_Component } from "../../../../interfaces/Interface_Children_Component";

const Lista_Tecnologias: React.FC<Interface_Children_Component> = ({children}) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

export default Lista_Tecnologias