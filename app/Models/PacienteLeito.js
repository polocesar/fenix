'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PacienteLeito extends Model {
    static get table () {
        return 'paciente_leito'
    }
}

module.exports = PacienteLeito
