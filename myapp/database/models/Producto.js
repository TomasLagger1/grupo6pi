module.exports = function (sequelize, dataTypes){

    let alias = 'Producto'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
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
        underscored: false,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "productoId"
        });
        
    };

    return Producto;

}