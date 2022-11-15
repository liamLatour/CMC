const db = require("../models");
const Clubs = db.clubs;
const Op = db.Sequelize.Op;

// Create and Save a new Clubs
exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Clubs
    const club = {
      title: req.body.title,
      where: req.body.where,
      when: req.body.when,
      price: req.body.price,
      description: req.body.description,
      members: req.body.members,
    };
  
    // Save Clubs in the database
    Clubs.create(club)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the club."
        });
      });
  };

// Retrieve all Clubss from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Clubs.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clubs."
        });
      });
  };

// Find a single Clubs with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Clubs.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Clubs with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Clubs with id=" + id
        });
      });
  };

// Update a Clubs by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Clubs.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Clubs was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Clubs with id=${id}. Maybe Clubs was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Clubs with id=" + id
        });
      });
  };

// Delete a Clubs with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Clubs.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Clubs was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Clubs with id=${id}. Maybe Clubs was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Clubs with id=" + id
        });
      });
  };

// Delete all Clubss from the database.
exports.deleteAll = (req, res) => {
    Clubs.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Clubs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all clubs."
        });
      });
  };

// Find all published Clubs
exports.findAllPublished = (req, res) => {
    Clubs.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clubs."
        });
      });
  };