# Comandos
``git --version``
``node -v``
``npm -v``
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``

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