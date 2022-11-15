module.exports = (sequelize, Sequelize) => {
    const Clubs = sequelize.define("clubs", {
      title: {
        type: Sequelize.STRING
      },
      where: {
        type: Sequelize.STRING
      },
      when: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      members: {
        type: Sequelize.TEXT
      },
    });
  
    return Clubs;
};