import { Interface_Contenido_Prop } from "../../../interfaces/Interface_Contenido_Prop";

const Lista_Punteada_Item: React.FC<Interface_Contenido_Prop> = ({
  contenidos_prop,
}) => {
  return (
    <>
      {contenidos_prop.map((contenido_prop) => {
        // return <li key={contenido_prop}>{contenido_prop}</li>;
        return <li key={contenido_prop.content}>{contenido_prop.content}</li>;

      })}
    </>
  );
};

export default Lista_Punteada_Item;
