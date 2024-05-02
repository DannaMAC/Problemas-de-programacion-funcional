const dao = require('./DAO');

function productosAgrupadosPorClasificacion(productos) {
    return productos.reduce((result, producto) => {
        if (!result[producto.clasificacion]) {
            result[producto.clasificacion] = 0;
        }
        result[producto.clasificacion]++;
        return result;
    }, {});
}

dao.cargarDatos((productos) => {
    console.log("Número de productos agrupados por su clasificación:", productosAgrupadosPorClasificacion(productos));
});
