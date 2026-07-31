//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Producto = sequelize.define("producto", {
        nombre: {
            type: Sequelize.STRING
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
        stock: {
            type: Sequelize.BOOLEAN
        },
        preciou: {
            type: Sequelize.INTEGER
        }
    });
    return Producto;
};