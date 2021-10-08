const db = require("../db/db");

class PersonDAO {
	async createPerson(first_name, last_name, email) {
		const { id } = await db("person")
			.insert({
				email,
				first_name,
				last_name,
			})
			.returning("id");

		return id;
	}
}

module.exports = new PersonDAO();
