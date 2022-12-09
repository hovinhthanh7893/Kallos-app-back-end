const { Router } = require("express");
const router = new Router();
const Users = require("../models/").users;
const Services = require("../models/").services;
const Favorites = require("../models/").favorites;
const auth = require("../auth/middleware");

// fetch one servicer by id http:4000/user/service/:id
router.get("/service/:id", async (request, response, next) => {
  const { id } = request.params;
  try {
    const serviceById = await Services.findOne({ where: { userId: id } });
    if (!serviceById) {
      return response
        .status(404)
        .send({ message: "Can not find this person's service" });
    } else {
      return response.status(200).send(serviceById);
    }
  } catch (e) {
    response.status(404).send({ message: e });
  }
});

//fetch favorite list by id http:4000/user/favorite/:id
router.get("/favorite/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const getFavById = await Favorites.findAll({ where: { userId: id } });
    return response.send(getFavById);
  } catch (e) {
    response.status(404).send({ message: e });
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
