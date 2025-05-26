module.exports = function (sequelize, dataTypes){

    let alias = 'Comentario'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName : "comentarios",
        timestamps: true,
        underscored: false,
    };

    const Comentario = sequelize.define(alias, cols, config);

    return Comentario;

}