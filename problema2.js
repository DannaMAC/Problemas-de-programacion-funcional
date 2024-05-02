const dao = require('./DAO');

function productosExistenciaMenor15(productos) {
    const productosMenor15 = productos.filter(producto => parseInt(producto.existencia) < 15);
    return productosMenor15.length;
}

dao.cargarDatos((productos) => {
    console.log("Número de productos con existencia menor a 15:", productosExistenciaMenor15(productos));
});
