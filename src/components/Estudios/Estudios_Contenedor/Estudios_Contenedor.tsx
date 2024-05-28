import "../../../sass/index.scss";
import { Interface_Estudios_Contenedor } from "../../../interfaces/Interface_Estudios_Contenedor";
import Estudios_Lista from "./Estudios_Lista/Estudios_Lista";

const Estudios_Contenedor: React.FC<
    Interface_Estudios_Contenedor
> = ({ titulo_prop, fecha_prop, empresa_prop }) => {
    return (
        <>
            <div className="experiencia-item list-steps-item">
                <h5>{fecha_prop}</h5>
                <div>
                    <h4>{titulo_prop}</h4>
                    <div className="fecha_empresa">
                        <p>{empresa_prop}</p>
                    </div>
                    <Estudios_Lista />
                </div>
            </div>
        </>
    );
};

export default Estudios_Contenedor;
