'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Leito = use('App/Models/Leito');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Paciente = use('App/Models/Paciente');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const PacienteLeito = use('App/Models/PacienteLeito');

const Database = use('Database');

class DashboardController {
    async index ({ request, response, view }) {
        return {
            cids: await Paciente.query().select('cid', 'nome_cid', Database.raw('count(*) as quantidade'))
                                        .whereNotNull('nome_cid')
                                        .groupByRaw('cid, nome_cid')
                                        .orderBy('quantidade', 'desc')
                                        .limit(10)
                                        .fetch(),
            pacientes_alta_atrasada: await Paciente.query().whereNotNull('data_prevista_alta')
                                                           .whereNull('data_alta_medica')
                                                           .whereNull('data_alta_adm')
                                                           .whereRaw('data_prevista_alta < now()')
                                                           .getCount(),
            leitos: {
                por_convenio: (await Database.raw(
                    Database.query()
                            .select('t.nome_plano', Database.raw('count(*) as quantidade'))
                            .from(function() {
                                this.as('t').distinct('paciente_convenio.nome_plano', 'pacientes.cod_atandimento')
                                    .from('pacientes')
                                    .innerJoin('paciente_convenio', 'pacientes.cod_atandimento', 'paciente_convenio.cod_atendimento')
                                    .innerJoin('paciente_leito', 'pacientes.cod_atandimento', 'paciente_leito.cod_atendimento')
                                    .innerJoin('leitos', 'paciente_leito.cod_leito', 'leitos.cod_leito')
                                    .where('leitos.situacao', 'Ocupado por paciente');
                            })
                            .groupBy('t.nome_plano')
                            .toString())
                ).rows,
                permanencia_media: (await PacienteLeito.query()
                                                        .select(Database.raw("avg(DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp)) as permanencia_media"))
                                                        .whereNotNull('data_desocupacao')
                                                        .whereNotNull('data_ocupacao')
                                                        .whereRaw('DATE_PART(\'day\', data_desocupacao::timestamp - data_ocupacao::timestamp) > 0')
                                                        .fetch()).rows[0].permanencia_media,
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
