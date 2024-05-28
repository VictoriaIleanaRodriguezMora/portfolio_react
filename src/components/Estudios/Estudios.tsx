import "../../sass/index.scss";
import Estudios_Contenedor from "./Estudios_Contenedor/Estudios_Contenedor";

const Estudios = () => {
    return (
        <>
            <section id="experiencia" className="experiencia">
                <div>
                    <h2 className="experiencia-title">ESTUDIOS</h2>

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Desarrolladora Front End & Analista Funcional"
                        fecha_prop="NOV 2023 - Actualidad"
                        empresa_prop="Gobierno de la Ciudad de Buenos Aires"
                    />

                </div>
            </section>
        </>
    );
};

export default Estudios;
