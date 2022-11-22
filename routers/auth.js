const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").users;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

// http:4000/auth/login
router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Please provide both email and password" });
    }
    //everything is enough
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response.status(400).send({
        message: "Incorrect email or password",
      });
    } else {
      //everything is ok
      //don't send back the password hash
      delete user.dataValues["password"];
      //get token
      const token = toJWT({ userId: user.id });
      return response.status(200).send({ token, user: user.dataValues });
    }
  } catch (error) {
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

// http:4000/auth/signup
router.post("/signup", async (request, response) => {
  const { email, password, name, isArtist } = request.body;
  if (!email || !password || !name) {
    return response
      .status(400)
      .send({ message: "Missing attributes for new profile" });
  }
  try {
    const newUser = await User.create({
      name,
      email,
      isArtist,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });
    //don't send back the password hash
    delete newUser.dataValues["password"];
    //generate token
    const token = toJWT({ userId: newUser.id });
    //send to front
    response.status(201).send({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return response
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
