import { Interface_Contenido_Prop } from "../../interfaces/Interface_Contenido_Prop";

const Lista_Punteada_Item: React.FC<Interface_Contenido_Prop> = ({  contenidos_prop,}) => {
  // console.log(contenidos_prop);

  return (
    <>
      <div className="experiencia-item">
        <h4>PUESTO DE TRABAJO</h4>
        <h5>12/2021 - Present</h5>
        <p>Saint-Gobain INDEC, Mumbai,</p>
        <ul>
          {contenidos_prop.map((contenido_prop) => {
            return <li key={contenido_prop}>{contenido_prop}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Lista_Punteada_Item;
