const personService = require("../service/person");

class PersonController {
	async createPerson(req, res) {
		try {
			const id = await personService.createPerson(req.body);
			res.status(201).json(id);
		} catch (err) {
			res.status(500).json("Oops something went wrong");
		}
	}
}

module.exports = new PersonController();
