const { Router } = require("express");
const router = new Router();
const Users = require("../models/").users;
const auth = require("../auth/middleware");

// fetch one user by id http:4000/user/:id
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  const userById = await Users.findByPk(id, { include: Users });
  response.send(userById);
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
