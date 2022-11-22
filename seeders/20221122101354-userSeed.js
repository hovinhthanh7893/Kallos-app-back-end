"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Thanh",
          email: "thanh@thanh",
          password: bcrypt.hashSync("thanh", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMWRiNzczYzMtOGE1Yi00Njg0LWFkNTUtYzE3NmVkZDZkMjg5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY209_CR14,0,140,209_AL_.jpg",
          provideService: false,
        },
        {
          name: "The",
          email: "the@the",
          password: bcrypt.hashSync("the", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNmMwZWMxZTgtMzg4Mi00ZjEyLWI2MjEtZGNmNTFmN2JkYWQwXkEyXkFqcGdeQXVyNzc4Nzk0Mzk@._V1_UY209_CR14,0,140,209_AL_.jpg",
          provideService: true,
        },
        {
          name: "Tho",
          email: "tho@tho",
          password: bcrypt.hashSync("tho", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOGM4ZGI5MTMtMTRkZC00MmM0LThmZTItNzNkZjM2MTg3N2U1XkEyXkFqcGdeQXVyNTQ1OTQ0OTA@._V1_UY209_CR8,0,140,209_AL_.jpg",
          provideService: false,
        },
        {
          name: "Lam",
          email: "lam@lam",
          password: bcrypt.hashSync("lam", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNjgzMzk2MjEzM15BMl5BanBnXkFtZTgwMTkzMDEwMTE@._V1_UX140_CR0,0,140,209_AL_.jpg",
          provideService: true,
        },
        {
          name: "Hang",
          email: "Hang@Hang",
          password: bcrypt.hashSync("hang", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMjA5NzA0NzQzMF5BMl5BanBnXkFtZTgwMTQxNjUzNjM@._V1_UX140_CR0,0,140,209_AL_.jpg",
          provideService: false,
        },
        {
          name: "Tam",
          email: "tam@tam",
          password: bcrypt.hashSync("tam", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2Y2Yzg3MTktMDI0Yi00MTRhLWI5YzQtMmVmN2I3MTcwNzY2L2ltYWdlXkEyXkFqcGdeQXVyMzI1NjU1NTA@._V1_UX140_CR0,0,140,209_AL_.jpg",
          provideService: true,
        },
        {
          name: "Thu",
          email: "thu@thu",
          password: bcrypt.hashSync("thu", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2QwNmE4Y2YtZjNkMS00NDAzLTliYTgtYTgyZDYyMTcwYTM4XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UX140_CR0,0,140,209_AL_.jpg",
          provideService: false,
        },
        {
          name: "Nguyen",
          email: "nguyen@nguyen",
          password: bcrypt.hashSync("nguyen", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTU3ZmUzMjYtNWU4MC00NDg1LTk5MzEtMjZmNTk5ZTEzMWYwXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY209_CR11,0,140,209_AL_.jpg",
          provideService: true,
        },
        {
          name: "Yeu",
          email: "yeu@yeu",
          password: bcrypt.hashSync("yeu", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTllYmE5YTYtZGZmYy00ZTBlLWJlODEtYWQ0ZmU1YTJkMjJlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
          provideService: false,
        },
        {
          name: "Trinh",
          email: "trinh@trinh",
          password: bcrypt.hashSync("trinh", 10),
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOTkwMDg1NDEtYmNjMS00YTQxLThjY2QtZGYzNTE2MjA4ZDQxXkEyXkFqcGdeQXVyNzY3MDIzOTY@._V1_UY209_CR38,0,140,209_AL_.jpg",
          provideService: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
