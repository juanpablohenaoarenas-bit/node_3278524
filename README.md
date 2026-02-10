# Comandos
``git --version``
``node -v``
``npm -v``
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``
``git remote add origin https://github.com/juanpablohenaoarenas-bit/node_3278524.git``
``git push -u origin master``

# 📁Estructuras profesionales de API en Node.js
api-node
    |-src **Aqui vive todo el codigo real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediarios de seguridad y validacion**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Logica del negocio**
        |-untils **Funciones reutilizables**
        |-app.js **Configuracion de la aplicacion**
        |-server.js **Punto de arranque**
``npm install  dotenv sequelize mysql2 pg pg-hstore``
``npm install nodemon --save-dev``
crear .env anivel de src
```
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api
DB_USER=root
DB_PASSWORD=
PORT=3000

```
```
```
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=node_api
DB_USER=root
DB_PASSWORD=
PORT=3000

```
📁 src/config/database.js

📁 src/server.js

configuramos a package.json ``"start": "node src/server.js"``
ejecutamos el servidor con ``npm start``

ajustamos app.js

/* const PORT=3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); */

module.exports = app;

📁 src/models/usuario.model.js
📁 src/services/usuario.service.js
📁 src/controllers/usuario.controller.js