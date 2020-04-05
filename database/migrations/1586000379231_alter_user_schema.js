'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('nome', 80).nullable();
      table.string('grupo', 30).nullable();
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('nome');
      table.dropColumn('grupo');
    })
  }
}

module.exports = AlterUserSchema
