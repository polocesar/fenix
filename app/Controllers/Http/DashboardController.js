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
    // async index ({ request, response, view }) {
    //     return {
    //         cids: await Paciente.query().select('cid', 'nome_cid', Database.raw('count(*) as quantidade'))
    //                                     .whereNotNull('nome_cid')
    //                                     .groupByRaw('cid, nome_cid')
    //                                     .orderBy('quantidade', 'desc')
    //                                     .limit(10)
    //                                     .fetch(),
    //         pacientes_alta_atrasada: await Paciente.query().whereNotNull('data_prevista_alta')
    //                                                        .whereNull('data_alta_medica')
    //                                                        .whereNull('data_alta_adm')
    //                                                        .whereRaw('data_prevista_alta < now()')
    //                                                        .getCount(),
    //         leitos: {
    //             por_convenio: (await Database.raw(
    //                 Database.query()
    //                         .select('t.nome_plano', Database.raw('count(*) as quantidade'))
    //                         .from(function() {
    //                             this.as('t').distinct('paciente_convenio.nome_plano', 'pacientes.cod_atandimento')
    //                                 .from('pacientes')
    //                                 .innerJoin('paciente_convenio', 'pacientes.cod_atandimento', 'paciente_convenio.cod_atendimento')
    //                                 .innerJoin('paciente_leito', 'pacientes.cod_atandimento', 'paciente_leito.cod_atendimento')
    //                                 .innerJoin('leitos', 'paciente_leito.cod_leito', 'leitos.cod_leito')
    //                                 .where('leitos.situacao', 'Ocupado por paciente');
    //                         })
    //                         .groupBy('t.nome_plano')
    //                         .toString())
    //             ).rows,
    //             permanencia_media: (await PacienteLeito.query()
    //                                                     .select(Database.raw("avg(DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp)) as permanencia_media"))
    //                                                     .whereNotNull('data_desocupacao')
    //                                                     .whereNotNull('data_ocupacao')
    //                                                     .whereRaw('DATE_PART(\'day\', data_desocupacao::timestamp - data_ocupacao::timestamp) > 0')
    //                                                     .fetch()).rows[0].permanencia_media,
    //             total: await Leito.query().getCount(),
    //             livres: await Leito.query().where('situacao', 'Vago').getCount(),
    //             ocupados: await Leito.query().where('situacao', 'Ocupado por paciente').getCount(),
    //             manutencao: await Leito.query().where('situacao', 'Manutenção').getCount(),
    //             interditados: await Leito.query().whereIn('situacao', ['Interdição', 'Em Limpeza', 'Interditado por Infecção', 'Interditado Temporariamente']).getCount(),
    //         }
    //     };
    // }

    async index ({ request, response, view, params }) {
        let total, ocupados, livres, alas;
        let { q } = request.all();
        switch (params.filtro) {
            case 'taxa_ocupacao':
                total = await Leito.query().getCount();
                ocupados = await Leito.query().where('situacao', 'Ocupado por paciente').getCount();
                return {
                    dados: Math.ceil((ocupados/total)*100)
                };
            case 'permanencia_media':
                return {
                    dados: Math.ceil((await PacienteLeito.query()
                                                .select(Database.raw("avg(DATE_PART('day', data_desocupacao::timestamp - data_ocupacao::timestamp)) as permanencia_media"))
                                                .whereNotNull('data_desocupacao')
                                                .whereNotNull('data_ocupacao')
                                                .whereRaw('DATE_PART(\'day\', data_desocupacao::timestamp - data_ocupacao::timestamp) > 0')
                                                .fetch()).rows[0].permanencia_media)
                };
            case 'taxa_desocupacao':
                total = await Leito.query().getCount();
                livres = await Leito.query().where('situacao', 'Vago').getCount();
                return {
                    dados: Math.ceil((livres/total)*100)
                }
            case 'altas_atrasadas':
                return {
                    dados: await Paciente.query()
                                        .whereNotNull('data_prevista_alta')
                                        .whereNull('data_alta_medica')
                                        .whereNull('data_alta_adm')
                                        .whereRaw('data_prevista_alta < now()')
                                        .getCount()
                }
            case 'leitos_livres':
                return {
                    dados: await Leito.query().where('situacao', 'Vago').getCount(),
                }
            case 'leitos_ocupados':
                return {
                    dados: await Leito.query().where('situacao', 'Ocupado por paciente').getCount(),
                }
            case 'leitos_manutencao':
                return {
                    dados: await Leito.query().where('situacao', 'Manutenção').getCount(),
                }
            case 'leitos_interditados':
                return {
                    dados: await Leito.query().whereIn('situacao', ['Interdição', 'Em Limpeza', 'Interditado por Infecção', 'Interditado Temporariamente']).getCount()
                }
            case 'leitos_ocupados_plano_saude':
                return {
                    dados: (await Database.raw(
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
                            ).rows
                }
            case 'enfermidades_recorrentes':
                return {
                    dados: await Paciente.query().select('cid', 'nome_cid', Database.raw('count(*) as quantidade'))
                                        .whereNotNull('nome_cid')
                                        .groupByRaw('cid, nome_cid')
                                        .orderBy('quantidade', 'desc')
                                        .limit(10)
                                        .fetch()
                }
            case 'internacao_ano':
                return {
                    dados: await Paciente.query()
                                        .select(Database.raw(`DATE_PART('month', data_entrada::timestamp) as mes, count(*) as quantidade`))
                                        .whereRaw(`DATE_PART('year', data_entrada::timestamp) = '${q}'`)
                                        .groupByRaw(`DATE_PART('month', data_entrada::timestamp)`)
                                        .fetch()
                }
            case 'especialidades_ano':
                return {
                    dados: await Paciente.query()
                                        .select(Database.raw(`distinct especialidade, count(*)`))
                                        .whereRaw(`DATE_PART('year', data_entrada::timestamp) = '${q}'`)
                                        .groupBy('especialidade')
                                        .orderByRaw(`count(*) desc`)
                                        .fetch()
                }
            case 'estado_leitos_ala':
                alas = await Leito.query().distinct('ala').fetch();
                if (!q) {
                    q = alas.first().ala;
                }
                return {
                    alas,
                    leitos: {
                        livres: await Leito.query().where('situacao', 'Vago').where('ala', q).getCount(),
                        ocupados: await Leito.query().where('situacao', 'Ocupado por paciente').where('ala', q).getCount(),
                        manutencao: await Leito.query().where('situacao', 'Manutenção').where('ala', q).getCount(),
                        interditados: await Leito.query().whereIn('situacao', ['Interdição', 'Em Limpeza', 'Interditado por Infecção', 'Interditado Temporariamente']).where('ala', q).getCount()
                    }
                }
        }
    } 
}

module.exports = DashboardController

/*
select distinct especialidade, count(*)
from pacientes
where DATE_PART('year', data_entrada::timestamp) = '2020'
group by especialidade

select DATE_PART('month', data_entrada::timestamp) as mes, count(*) as quantidade 
from pacientes
where DATE_PART('year', data_entrada::timestamp) = '2020'
group by DATE_PART('month', data_entrada::timestamp)

select DATE_PART('month', data_entrada::timestamp) as mes, count(*) as quantidade 
from pacientes
where DATE_PART('year', data_entrada::timestamp) = '2019'
group by DATE_PART('month', data_entrada::timestamp)

select distinct DATE_PART('year', data_entrada::timestamp) as ano from pacientes


select DATE_PART('year', data_entrada::timestamp) as ano, count(*)
from pacientes
group by DATE_PART('year', data_entrada::timestamp)


*/