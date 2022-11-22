const { Router } = require("express");
const router = new Router();
const Users = require("../models/").users;
const Services = require("../models/").services;
const auth = require("../auth/middleware");

// fetch one servicer by id http:4000/user/:id
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  const userById = await Users.findByPk(id, { include: Services });
  if (!userById) {
    return response.status(404).send({ message: "Can not find this person" });
  } else {
    delete userById.dataValues["password"];
    return response.status(200).send(userById.dataValues);
  }
});

// delete user http:4000/user/delete/:id
router.delete("/delete/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const target = await Users.findByPk(id);
    if (!target) {
      return res.status(404).send({ message: "Something went wrong, sorry" });
    } else {
      await target.destroy();
      res.status(201).send({ message: `Deleted #${id}` });
    }
  } catch (e) {
    res.status(404).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
