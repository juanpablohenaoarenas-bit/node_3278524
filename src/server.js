const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync()
.then(() => {
    console.log('Conexión a la base de datos establecida');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en HTTP://localhost:${PORT}`);
    });
})
.catch(err => console.error('Error DB;', err));