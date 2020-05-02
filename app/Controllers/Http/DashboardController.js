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
        const sql = `SELECT avg(DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp)) as permanencia_media
                     FROM paciente_leito
                     WHERE data_desocupacao IS NOT NULL AND data_ocupacao IS NOT NULL AND DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp) > 0`;
        const sql2 = `
        select b.nome_plano, count(*) as quantidade
        from (
            select distinct paciente_convenio.nome_plano, pacientes.cod_atandimento 
                      from pacientes
                inner join paciente_convenio 
                        on pacientes.cod_atandimento = paciente_convenio.cod_atendimento
                inner join paciente_leito 
                        on pacientes.cod_atandimento = paciente_leito.cod_atendimento
                inner join leitos 
                        on paciente_leito.cod_leito = leitos.cod_leito 
                       and leitos.situacao = 'Ocupado por paciente'
        ) as b
        group by b.nome_plano`;
        const sql3 = `
        select cid, nome_cid, count(*) as quantidade 
          from pacientes
        group by cid, nome_cid`;
        return {
            cids: (await Database.raw(sql3)).rows,
            leitos: {
                por_convenio: (await Database.raw(sql2)).rows,
                permanencia_media: (await Database.raw(sql)).rows[0].permanencia_media,
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
