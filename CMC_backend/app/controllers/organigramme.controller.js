const db = require("../models");
const Organigramme = db.organigramme;
const Op = db.Sequelize.Op;

// Create and Save a new Organigramme
exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Organigramme
    const club = {
      title: req.body.title,
      where: req.body.where,
      when: req.body.when,
      price: req.body.price,
      description: req.body.description,
      members: req.body.members,
    };
  
    // Save Organigramme in the database
    Organigramme.create(club)
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

// Retrieve all Organigrammes from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Organigramme.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving organigramme."
        });
      });
  };

// Find a single Organigramme with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Organigramme.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Organigramme with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Organigramme with id=" + id
        });
      });
  };

// Update a Organigramme by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Organigramme.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Organigramme was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Organigramme with id=${id}. Maybe Organigramme was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Organigramme with id=" + id
        });
      });
  };

// Delete a Organigramme with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Organigramme.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Organigramme was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Organigramme with id=${id}. Maybe Organigramme was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Organigramme with id=" + id
        });
      });
  };

// Delete all Organigrammes from the database.
exports.deleteAll = (req, res) => {
    Organigramme.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Organigramme were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all organigramme."
        });
      });
  };

// Find all published Organigramme
exports.findAllPublished = (req, res) => {
    Organigramme.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving organigramme."
        });
      });
  };