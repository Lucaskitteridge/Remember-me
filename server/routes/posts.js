const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.json("this works");
  });
  return router;
};