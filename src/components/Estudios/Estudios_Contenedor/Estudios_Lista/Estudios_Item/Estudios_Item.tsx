import { Interface_Contenido_Prop } from "../../../../../interfaces/Interface_Contenido_Prop";

const Estudios_Item: React.FC<Interface_Contenido_Prop> = ({
    contenidos_prop,
}) => {
    return (
        <>
            {contenidos_prop.map((contenido_prop) => {
                return <li key={contenido_prop}>{contenido_prop}</li>;
            })}
        </>
    );
};

export default Estudios_Item;
