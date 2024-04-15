import Lista_Punteada_Item from "../Lista_Punteada_Item/Lista_Punteada_Item";

const Lista_Punteada_List = () => {
  return (
    <>
      <ul>
        <Lista_Punteada_Item
          contenidos_prop={[
            {content: "Dictar las clases de HTML, CSS y JavaScript"},
            {content: "Responder consultas fuera de clase"},
          ]}
        />
        
      </ul>
    </>
  );
};

export default Lista_Punteada_List;
