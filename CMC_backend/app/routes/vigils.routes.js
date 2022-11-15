module.exports = app => {
    const vigils = require("../controllers/vigils.controller.js");
  
    const router = require("express").Router();
  
    // Create a new
    router.post("/", vigils.create);
  
    // Retrieve all
    router.get("/", vigils.findAll);
  
    // Retrieve a single instance with id
    router.get("/:id", vigils.findOne);
  
    // Update an instance with id
    router.put("/:id", vigils.update);
  
    // Delete an instance with id
    router.delete("/:id", vigils.delete);
  
    // Delete all
    router.delete("/", vigils.deleteAll);
  
    app.use('/api/vigils', router);
};