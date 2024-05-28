import Estudios_Item from "./Estudios_Item/Estudios_Item";

const Estudios_Lista = () => {
  return (
    <>
      <ul>
        <Estudios_Item
          contenidos_prop={[
            "Dictar las clases de HTML, CSS y JavaScript",
            "Responder consultas fuera de clase",
          ]}
        />
      </ul>
    </>
  );
};

export default Estudios_Lista;
