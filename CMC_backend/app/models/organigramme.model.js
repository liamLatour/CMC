module.exports = (sequelize, Sequelize) => {
    const Organigramme = sequelize.define("organigramme", {
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.INTEGER
      },
    });
  
    return Organigramme;
};