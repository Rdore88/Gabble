'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    userID: DataTypes.INTEGER,
    messageID: DataTypes.INTEGER
  }, {});

  likes.associate = function(models){
    likes.belongsTo(models.user, {foreignKey: 'userID'});
    likes.belongsTo(models.message, {foreignKey: 'messageID'});
  }

  return likes;
};
