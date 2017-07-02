'use strict';
module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    message: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {});
  message.associate = function(models){
    message.belongsTo(model.user, {foreignKey: 'userID'});
    message.hasMany(model.likes, {foreignKey: 'messageID'});
  }
  return message;
};
