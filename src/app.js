const express = require('express');
const usuarioRoutes = require('./routes/usuario.routes');
const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('🆗 API funcionando correctamente')
});
/* const PORT=3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); */
module.exports = app;