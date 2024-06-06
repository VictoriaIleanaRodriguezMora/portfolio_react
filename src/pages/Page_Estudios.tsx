import Lista_Punteada from "../components/Lista_Punteada/Lista_Punteada";

const Page_Estudios = () => {
    return (
        <Lista_Punteada
            title_h2="EXPERIENCIA DE TRABAJO"
            items={[
                {
                    posicion_prop: "Desarrollo Web - Nivel 1",
                    duracion_prop: "Julio 2020",
                    empresa_prop: "Aprende Programando - Secundaria",
                    contenidos_prop: ["HTML, CSS."]
                },
                {
                    posicion_prop: "Curso Introductorio de Programacion",
                    duracion_prop: "Septiembre 2020",
                    empresa_prop: "Plataforma 5 - Coding Bootcamp",
                    contenidos_prop: ["HTML, CSS y JavaScript Vainilla."]
                },
                {
                    posicion_prop: "Desarrollo Web - Nivel 2",
                    duracion_prop: "Noviembre 2020",
                    empresa_prop: "Aprende Programando - Secundaria",
                    contenidos_prop: ["JavaScript Vainilla"]
                },
                {
                    posicion_prop: "Desarrollo Web - Nivel 3",
                    duracion_prop: "Julio 2021",
                    empresa_prop: "Aprende Programando - Secundaria",
                    contenidos_prop: ["JavaScript & React.js"]
                },

                {
                    posicion_prop: "Desarrollo Web",
                    duracion_prop: "Marzo 2022",
                    empresa_prop: "Coder House",
                    contenidos_prop: ["Prototipado | HTML | CSS | Flexbox  | Grid | Animaciones | transformaciones | transiciones | GIT | Github | Bootstrap | SASS | Etiquetas SEO"]
                }
                ,
                {
                    posicion_prop: "Desarrollo Web - Nivel 4",
                    duracion_prop: "Julio 2022",
                    empresa_prop: "Aprende Programando - Secundaria",
                    contenidos_prop: ["Back End con Node.js"]
                },
                {
                    posicion_prop: "React",
                    duracion_prop: "Julio 2022",
                    empresa_prop: "Coder House",
                    contenidos_prop: ["React Js | React Hooks | useState | useState | Router | Firebase"]
                },
                {
                    posicion_prop: "Back End",
                    duracion_prop: "Marzo 2023",
                    empresa_prop: "Coder House",
                    contenidos_prop: ["Programación sincrónica y asincrónica | FileSystem | NPM | Express | Router | Multer | Websockets | MongoDB | Mongoose | Cookies, Sessions & Storages | Autorización  | Autenticación | JWT | Passport | Global & Child Process | Arquitectura por capas | Mailing y mensajería(TWILIO) | Swagger | GraphQL"]
                },
                {
                    posicion_prop: "SQL",
                    duracion_prop: "Septiembre 2023",
                    empresa_prop: "Coder House",
                    contenidos_prop: ["Lenguaje SQL | Sublenguajes SQL | DDL | DML | Objetos | Vistas | Inserción con importación | Actualización y eliminación de datos | Funciones | Stored procedures | Triggers | DCL | TCL | Backup y restauración | Datawarehouse"]
                }
            ]}
        />
    );
};

export default Page_Estudios;
