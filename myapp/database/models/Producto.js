module.exports = function (sequelize, dataTypes){

    let alias = 'Producto'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName : "productos",
        timestamps: true,
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto;

}