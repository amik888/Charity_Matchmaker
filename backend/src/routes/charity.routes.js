const Express = require('express');
const {Op} = require("sequelize");
/**
 * 
 * @param {*} sequelize 
 * @param {import("sequelize").ModelCtor<import("sequelize").Model<any, any>>} Teacher 
 */
module.exports = (sequelize, Charity) => {
  const router = Express.Router();
  
  /**
   * Create and Save a new Teacher
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  // router.post("/", async function create(req, res) {
  //   // Validate request
  //   if (!req.body.firstName) {
  //     res.status(400).send({
  //       message: "Content can not be empty!"
  //     });
  //     return;
  //   }
  
  //   // Create a teacher
  //   const teacher = {
  //     teacherId: req.body.teacherId,
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     finalized: !!req.body.finalized,
  //     tenured: false
  //   };
  
  //   try {
  //     // Save Tutorial in the database
  //     const data = await Teacher.create(teacher);
  //     res.send(data)
  //   } catch (err) {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the teacher."
  //     });
  //   }
  // });

  /**
   * Retrieve all charities from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/", async function findAll(req, res) {
    const state = req.query.state;
    let query = { where: null };
    if (state) {
      query.where = { 
        state: { 
          [Op.like]: `%${state}%` 
        } 
      };
    }

    try {
      const data = await sequelize.query('CALL getAllCharities()');
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving charities."
      });
    }
  });

  /**
   * Find all finalized Teachers
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  // router.get("/finalized", async function findAllFinalized(req, res) {
  //   res.sendStatus(501);
  // });

  /**
   * Find charities by state
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/:state",   async function findAll(req, res) {
    if (isNaN(Number(req.params.state))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const state = req.params.state;
    try {
      const response = await sequelize.query('CALL CharityState(:state)', { replacements: {state}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving charities."
      });
    }
  });

 /**
   * Find charities by category
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
    router.get("/:category",   async function findAll(req, res) {
    if (isNaN(Number(req.params.category))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const category = req.params.category;
    try {
      const response = await sequelize.query('CALL CharityCategory(:category)', { replacements: {category}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving charities."
      });
    }
  });


  /**
   * Update a Teacher by the id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  // router.put("/:id", async function update(req, res) {
  //   res.sendStatus(501);
  // });

  /**
   * Delete a Teacher with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  // router.delete("/:id",  async function deleteOne(req, res) {
  //   res.sendStatus(501);
  // });

  /**
   * Delete all Teacher from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  // router.delete("/", async function deleteAll(req, res) {
  //   res.sendStatus(501);
  // });
  return router;
};