module.exports = (sequelize, Sequelize) => {
    const vigils = sequelize.define("vigils", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      software: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      preference: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
    });
  
    return vigils;
};