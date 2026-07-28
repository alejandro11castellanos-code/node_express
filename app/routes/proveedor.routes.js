module.exports = app => {
    const proveedores = require("../controllers/proveedor.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", proveedores.create);
    // Retrieve all Client
    router.get("/", proveedores.findAll);
    // Retrieve all published Client
    router.get("/status", proveedores.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", proveedores.findOne);
    // Update a Client with id
    router.put("/update/:id", proveedores.update);
    // Delete a Client with id
    router.delete("/delete/:id", proveedores.delete);
    // Delete all Cliente
    router.delete("/delete/", proveedores.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/proveedor", router);
};