const db = require("../models");
const Vigils = db.vigils;
const Op = db.Sequelize.Op;

// Create and Save a new Vigils
exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Vigils
    const club = {
      title: req.body.title,
      where: req.body.where,
      when: req.body.when,
      price: req.body.price,
      description: req.body.description,
      members: req.body.members,
    };
  
    // Save Vigils in the database
    Vigils.create(club)
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

// Retrieve all Vigilss from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Vigils.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vigils."
        });
      });
  };

// Find a single Vigils with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Vigils.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Vigils with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Vigils with id=" + id
        });
      });
  };

// Update a Vigils by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Vigils.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vigils was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Vigils with id=${id}. Maybe Vigils was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vigils with id=" + id
        });
      });
  };

// Delete a Vigils with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Vigils.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vigils was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Vigils with id=${id}. Maybe Vigils was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vigils with id=" + id
        });
      });
  };

// Delete all Vigilss from the database.
exports.deleteAll = (req, res) => {
    Vigils.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Vigils were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all vigils."
        });
      });
  };

// Find all published Vigils
exports.findAllPublished = (req, res) => {
    Vigils.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vigils."
        });
      });
  };