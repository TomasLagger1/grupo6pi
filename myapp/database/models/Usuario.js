module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        documento: {
            type: dataTypes.INTEGER
        },
        nacimiento: {
            type: dataTypes.DATE
        },
        foto: {
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName : "usuarios",
        timestamps: true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}