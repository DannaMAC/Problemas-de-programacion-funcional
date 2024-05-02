const dao = require('./DAO');

function productosClasificacionPrecioMayor1550(productos) {
    return productos.filter(producto => parseFloat(producto.precio) > 15.50)
                   .reduce((result, producto) => {
                       if (!result[producto.clasificacion]) {
                           result[producto.clasificacion] = [];
                       }
                       result[producto.clasificacion].push(producto);
                       return result;
                   }, {});
}

dao.cargarDatos((productos) => {
    console.log("Lista de productos con la misma clasificación y precio mayor a 15.50:", productosClasificacionPrecioMayor1550(productos));
});
