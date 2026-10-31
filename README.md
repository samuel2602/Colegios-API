Este repositorio contiene el código fuente correspondiente a la Fase 2 del proyecto académico. La aplicación consiste en una API REST desarrollada con Node.js y Express, conectada a una base de datos relacional MySQL alojada en un servicio en la nube (Clever Cloud), la cual implementa operaciones CRUD completas para las entidades del sistema.

📋 Información General del Proyecto

Autor / Estudiante: [Tu Nombre Aquí]

Asignatura / Curso: [Nombre de la Asignatura]

Tecnologías Principales:

Node.js: Entorno de ejecución para JavaScript.

Express.js: Framework para la gestión del servidor y enrutamiento HTTP.

MySQL2: Conector de base de datos para Node.js.

Clever Cloud: Proveedor de infraestructura en la nube para el despliegue de la base de datos MySQL.

🛠️ Requisitos Previos

Para ejecutar este proyecto de manera local, asegúrate de tener instalado en tu equipo:

Node.js (Versión 16 o superior recomendada).

Un cliente de control de versiones (Git).

Una herramienta para pruebas de API (Postman, Hoppscotch o Insomnia).

⚙️ Instrucciones de Instalación y Ejecución

Sigue estos pasos detallados para clonar, configurar y poner en marcha el proyecto localmente:

Clonar el Repositorio:
Abre tu terminal y ejecuta el siguiente comando:

git clone https://github.com/tu-usuario/nombre-de-tu-repositorio.git


Acceder a la Carpeta del Proyecto:

cd nombre-de-tu-repositorio


Instalar las Dependencias:
Ejecuta el siguiente comando para descargar todos los paquetes necesarios definidos en el archivo package.json:

npm install


Configuración de la Base de Datos:
El sistema se conecta directamente a la base de datos MySQL remota desplegada en Clever Cloud mediante las siguientes credenciales preconfiguradas en el archivo de conexión del proyecto:

Host: bodaez9b5xl8jru92hxz-mysql.services.clever-cloud.com

Usuario: uwpjqclu81clgdmc

Base de Datos: bodaez9b5xl8jru92hxz

Puerto: 3306

Iniciar el Servidor:
Ejecuta el servidor en modo de desarrollo o producción con el comando:

npm start


(O alternativamente: node index.js o nodemon index.js)

Deberás ver en la consola un mensaje indicando que el servidor está corriendo exitosamente y que la conexión con MySQL se estableció de forma correcta.

🔗 Documentación de Endpoints (Rutas de la API)

La API cuenta con un conjunto de rutas estructuradas bajo el estándar RESTful para la gestión completa (CRUD) de las 5 tablas principales del sistema académico (roles, usuarios, cursos, materias, matriculas):

1. Gestión de Roles (/api/roles)

GET /api/roles - Retorna el listado completo de roles registrados.

GET /api/roles/:id - Consulta un rol específico por su identificador único.

POST /api/roles - Crea un nuevo rol en el sistema.

PUT /api/roles/:id - Actualiza la información de un rol existente.

DELETE /api/roles/:id - Elimina un rol del sistema.

2. Gestión de Usuarios (/api/usuarios)

GET /api/usuarios - Obtiene todos los usuarios del sistema.

GET /api/usuarios/:id - Consulta los detalles de un usuario por ID.

POST /api/usuarios - Registra un nuevo usuario en la base de datos.

PUT /api/usuarios/:id - Actualiza los datos de un usuario.

DELETE /api/usuarios/:id - Elimina un usuario por su ID.

3. Gestión de Cursos (/api/cursos)

GET /api/cursos - Lista todos los cursos disponibles.

GET /api/cursos/:id - Consulta un curso específico.

POST /api/cursos - Inserta un nuevo curso.

PUT /api/cursos/:id - Modifica un curso existente.

DELETE /api/cursos/:id - Elimina un curso.

4. Gestión de Materias (/api/materias)

GET /api/materias - Muestra todas las materias registradas.

GET /api/materias/:id - Muestra una materia por ID.

POST /api/materias - Registra una nueva materia.

PUT /api/materias/:id - Actualiza una materia.

DELETE /api/materias/:id - Elimina una materia.

5. Gestión de Matrículas (/api/matriculas)

GET /api/matriculas - Consulta todas las matrículas realizadas.

GET /api/matriculas/:id - Consulta una matrícula específica.

POST /api/matriculas - Registra una nueva matrícula (vinculando usuario, curso y materia).

PUT /api/matriculas/:id - Actualiza una matrícula.

DELETE /api/matriculas/:id - Elimina un registro de matrícula.