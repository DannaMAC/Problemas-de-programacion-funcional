const dao = require('./DAO');

function productosPrecioMayor2030Menor4500(productos) {
    return productos.filter(producto => parseFloat(producto.precio) > 20.30 && parseFloat(producto.precio) < 45.00);
}

dao.cargarDatos((productos) => {
    console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00:", productosPrecioMayor2030Menor4500(productos));
});
