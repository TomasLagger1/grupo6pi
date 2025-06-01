module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        nombre: {
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
        underscored: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos", 
            foreignKey: "usuarioId" 
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios", 
            foreignKey: "usuarioId" 
        });
    };

    return Usuario;

}