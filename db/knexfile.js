// Update with your config settings.

module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: "knexdb",
			user: "node_user",
			password: "node_password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
