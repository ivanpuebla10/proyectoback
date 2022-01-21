const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json())

app.use('/productos', require('./routes/productos'));
app.use('/categorias', require('./routes/categorias'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/pedidos', require('./routes/pedidos'));
app.use('/productosypedidos', require('./routes/productosypedidos'));
app.use('/categoriasyproductos', require('./routes/categoriasyproductos'));




app.listen(PORT, () => console.log('servidor levantado en el puerto' + PORT))
