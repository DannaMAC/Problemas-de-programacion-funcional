const fs = require('fs');
const csv = require('csv-parser');

// Función para cargar los datos del archivo CSV
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

module.exports = {
    cargarDatos
};

