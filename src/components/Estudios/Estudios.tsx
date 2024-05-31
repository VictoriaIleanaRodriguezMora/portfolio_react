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
                        titulo_prop="Desarrollo Web"
                        fecha_prop="Marzo 2022"
                        empresa_prop="Coder House"
                        contenidos_prop={["Prototipado | HTML | CSS | Flexbox  | Grid | Animaciones | transformaciones | transiciones | GIT | Github | Bootstrap | SASS | Etiquetas SEO"]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Desarrollo Web - Nivel 1"
                        fecha_prop="Julio 2020"
                        empresa_prop="Aprende Programando - Secundaria"
                        contenidos_prop={["HTML, CSS."]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Desarrollo Web - Nivel 2"
                        fecha_prop="Noviembre 2020"
                        empresa_prop="Aprende Programando - Secundaria"
                        contenidos_prop={["JavaScript Vainilla"]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Desarrollo Web - Nivel 3"
                        fecha_prop="Julio 2021"
                        empresa_prop="Aprende Programando - Secundaria"
                        contenidos_prop={["JavaScript & React.js"]}
                    />


                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Desarrollo Web - Nivel 4"
                        fecha_prop="Julio 2022"
                        empresa_prop="Aprende Programando - Secundaria"
                        contenidos_prop={["Back End con Node.js"]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="React"
                        fecha_prop="Julio 2022"
                        empresa_prop="Coder House"
                        contenidos_prop={["React Js | React Hooks | useState | useState | Router | Firebase"]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="Back End"
                        fecha_prop="Marzo 2023"
                        empresa_prop="Coder House"
                        contenidos_prop={["Programación sincrónica y asincrónica | FileSystem | NPM | Express | Router | Multer | Websockets | MongoDB | Mongoose | Cookies, Sessions & Storages | Autorización  | Autenticación | JWT | Passport | Global & Child Process | Arquitectura por capas | Mailing y mensajería(TWILIO) | Swagger | GraphQL"]}
                    />

                    {/* # 1 */}
                    <Estudios_Contenedor
                        titulo_prop="SQL"
                        fecha_prop="Marzo 2023"
                        empresa_prop="Coder House"
                        contenidos_prop={["Lenguaje SQL | Sublenguajes SQL | DDL | DML | Objetos | Vistas | Inserción con importación | Actualización y eliminación de datos | Funciones | Stored procedures | Triggers | DCL | TCL | Backup y restauración | Datawarehouse"]}
                    />
                </div>
            </section>
        </>
    );
};

export default Estudios;
