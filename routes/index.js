const express = require("express");
const personController = require("../controller/person");
const Person = require("../db/models/person");

const router = express.Router();
router.get("/", async (req, res, next) => {
	const person = await Person.query();

	res.json(person);
});
router.post("/", personController.createPerson);

module.exports = router;
