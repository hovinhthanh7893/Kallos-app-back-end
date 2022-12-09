const { Router } = require("express");
const router = new Router();
const Users = require("../models/").users;
const Services = require("../models/").services;

// fetch all servicer by location http:4000/servicer/
router.post("/", async (request, response, next) => {
  const { area } = request.body;
  try {
    const servicerByArea = await Services.findAll({
      where: { area },
      include: [Users],
    });
    if (!servicerByArea) {
      return response
        .status(404)
        .send({ message: "Can not find servicer in this area" });
    } else {
      return response.status(200).send(servicerByArea);
    }
  } catch (e) {
    response.status(404).send({ message: e });
  }
});

module.exports = router;
