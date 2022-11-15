module.exports = app => {
    const organigramme = require("../controllers/organigramme.controller.js");
  
    const router = require("express").Router();
  
    // Create a new
    router.post("/", organigramme.create);
  
    // Retrieve all
    router.get("/", organigramme.findAll);
  
    // Retrieve a single instance with id
    router.get("/:id", organigramme.findOne);
  
    // Update an instance with id
    router.put("/:id", organigramme.update);
  
    // Delete an instance with id
    router.delete("/:id", organigramme.delete);
  
    // Delete all
    router.delete("/", organigramme.deleteAll);
  
    app.use('/api/organigramme', router);
};