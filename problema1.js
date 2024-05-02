const dao = require('./DAO');

function productosExistenciaMayor20(productos) {
    const productosMayor20 = productos.filter(producto => parseInt(producto.existencia) > 20);
    return productosMayor20.length;
}

dao.cargarDatos((productos) => {
    console.log("Número de productos con existencia mayor a 20:", productosExistenciaMayor20(productos));
});
