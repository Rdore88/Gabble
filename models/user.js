'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function(models){
    user.hasMany(model.message, {foreignKey: 'userID'});
    user.hasMany(model.likes, {foreignKey: 'userID'});
  }
  return user;
};
