/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		baseUrl: 'http://localhost:3001',
		specPattern: 'e2e-tests/**/*.cy.js',
		supportFile: false,
	},
})

