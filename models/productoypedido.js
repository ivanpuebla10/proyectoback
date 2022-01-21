'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productoypedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Productoypedido.init({
    PedidoId: DataTypes.INTEGER,
    ProductoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productoypedido',
  });
  return Productoypedido;
};