module.exports = app => {
    const clubs = require("../controllers/clubs.controller.js");
  
    const router = require("express").Router();
  
    // Create a new
    router.post("/", clubs.create);
  
    // Retrieve all
    router.get("/", clubs.findAll);
  
    // Retrieve a single instance with id
    router.get("/:id", clubs.findOne);
  
    // Update an instance with id
    router.put("/:id", clubs.update);
  
    // Delete an instance with id
    router.delete("/:id", clubs.delete);
  
    // Delete all
    router.delete("/", clubs.deleteAll);
  
    app.use('/api/clubs', router);
};