'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Pedido.belongsTo(models.Usuario)
       Pedido.belongsToMany(Producto, { through: 'Productoypedido'});
    }
  }
  Pedido.init({
    numero: DataTypes.STRING,
    fecha_entrega: DataTypes.DATE,
    estado: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};