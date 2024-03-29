'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Monitor extends Model {
	static get table() {
		return 'monitors'
	}

	static get primaryKey() {
		return 'id'
	}
}

module.exports = Monitor
