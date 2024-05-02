const fs = require('fs');
const csv = require('csv-parser');

function cargarDatos(callback) {
    const productos = [];

    fs.createReadStream('productos.csv')
        .pipe(csv())
        .on('data', (row) => {
            productos.push(row);
        })
        .on('end', () => {
            callback(productos);
        });
}

function productosExistenciaMayor20(productos) {
    const productosMayor20 = productos.filter(producto => parseInt(producto.existencia) > 20);
    return productosMayor20.length;
}

function productosExistenciaMenor15(productos) {
    const productosMenor15 = productos.filter(producto => parseInt(producto.existencia) < 15);
    return productosMenor15.length;
}

function productosClasificacionPrecioMayor1550(productos) {
    return productos.filter(producto => producto.precio > 15.50)
                   .reduce((result, producto) => {
                       if (!result[producto.clasificacion]) {
                           result[producto.clasificacion] = [];
                       }
                       result[producto.clasificacion].push(producto);
                       return result;
                   }, {});
}

function productosPrecioMayor2030Menor4500(productos) {
    return productos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
}

function productosAgrupadosPorClasificacion(productos) {
    return productos.reduce((result, producto) => {
        if (!result[producto.clasificacion]) {
            result[producto.clasificacion] = 0;
        }
        result[producto.clasificacion]++;
        return result;
    }, {});
}

cargarDatos((productos) => {
    console.log("Número de productos con existencia mayor a 20:", productosExistenciaMayor20(productos));
    console.log("Número de productos con existencia menor a 15:", productosExistenciaMenor15(productos));
    console.log("Lista de productos con la misma clasificación y precio mayor a 15.50:", productosClasificacionPrecioMayor1550(productos));
    console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00:", productosPrecioMayor2030Menor4500(productos));
    console.log("Número de productos agrupados por su clasificación:", productosAgrupadosPorClasificacion(productos));
});
