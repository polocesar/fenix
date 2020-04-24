'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Leito = use('App/Models/Leito');

const Database = use('Database');

class DashboardController {
    async index ({ request, response, view }) {
        /*
         select median(dias) from (
            select DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp) as dias, * from paciente_leito
            where data_desocupacao IS NOT null and data_ocupacao IS NOT null and DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp) > 0) as foo
         */
        return {
            'leitos': {
                total: await Leito.query().getCount(),
                livres: await Leito.query().where('situacao', 'Vago').getCount(),
                ocupados: await Leito.query().where('situacao', 'Ocupado por paciente').getCount(),
                manutencao: await Leito.query().where('situacao', 'Manutenção').getCount(),
                interditados: await Leito.query().whereIn('situacao', ['Interdição', 'Em Limpeza', 'Interditado por Infecção', 'Interditado Temporariamente']).getCount(),
            }
        };
    }
}

module.exports = DashboardController
