import Lista_Punteada_Item from "../Lista_Punteada_Item/Lista_Punteada_Item";

const Lista_Punteada_List = ({ contenidos_prop }) => {

  return (
    <>
      <ul>
        <Lista_Punteada_Item contenidos_prop={contenidos_prop} />
      </ul>
    </>
  );
};

export default Lista_Punteada_List;
