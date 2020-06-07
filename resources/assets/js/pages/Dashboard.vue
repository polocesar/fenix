<template>
    <div>
        <!-- mini cards -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Indicadores</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <taxa-ocupacao></taxa-ocupacao>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <permanencia-media></permanencia-media>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <taxa-desocupacao></taxa-desocupacao>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <altas-atrsadas></altas-atrsadas>
            </div>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Leitos</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <leitos-livres></leitos-livres>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <leitos-ocupados></leitos-ocupados>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <leitos-manutencao></leitos-manutencao>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <leitos-interditados></leitos-interditados>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <internacoes-ano></internacoes-ano>
            </div>
            <!-- <div class="col-xs-6 col-lg-12 col-md-12 col-sm-12">
                <leitos-ocupados-plano-saude></leitos-ocupados-plano-saude>
            </div> -->
            <!-- <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <estado-leitos-ala></estado-leitos-ala>
            </div> -->
            <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <enfermidades-recorrentes></enfermidades-recorrentes>
            </div>
            <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <especialidades-ano></especialidades-ano>
            </div>
            
            
        </div>
    </div>    
</template>

<script>
//Indicadores
import TaxaOcupacao from '@/components/dashboard/indicador/TaxaOcupacao'
import PermanenciaMedia from '@/components/dashboard/indicador/PermanenciaMedia'
import TaxaDesocupacao from '@/components/dashboard/indicador/TaxaDesocupacao'
import AltasAtrasadas from '@/components/dashboard/indicador/AltasAtrasadas'
import LeitosLivres from '@/components/dashboard/indicador/LeitosLivres'
import LeitosOcupados from '@/components/dashboard/indicador/LeitosOcupados'
import LeitosManutencao from '@/components/dashboard/indicador/LeitosManutencao'
import LeitosInterditados from '@/components/dashboard/indicador/LeitosInterditados'

//Gráficos
import LeitosOcupadosPlanoSaude from '@/components/dashboard/grafico/LeitosOcupadosPlanoSaude'
import EnfermidadesRecorrentes from '@/components/dashboard/grafico/EnfermidadesRecorrentes'
import InternacoesAno from '@/components/dashboard/grafico/InternacoesAno'
import EspecialidadesAno from '@/components/dashboard/grafico/EspecialidadesAno'
import EstadoLeitosAla from '@/components/dashboard/grafico/EstadoLeitosAla'

import axios from '@/util/axios'
import ApexCharts from 'apexcharts'

export default {
    components: {
        'permanencia-media': PermanenciaMedia,
        'taxa-ocupacao': TaxaOcupacao,
        'taxa-desocupacao': TaxaDesocupacao,
        'altas-atrsadas': AltasAtrasadas,
        'leitos-livres': LeitosLivres,
        'leitos-ocupados': LeitosOcupados,
        'leitos-manutencao': LeitosManutencao,
        'leitos-interditados': LeitosInterditados,
        'leitos-ocupados-plano-saude': LeitosOcupadosPlanoSaude,
        'enfermidades-recorrentes': EnfermidadesRecorrentes,
        'internacoes-ano': InternacoesAno,
        'especialidades-ano': EspecialidadesAno,
        'estado-leitos-ala': EstadoLeitosAla
    },
    name: 'Dashboard',
    async mounted () {
        //const loading = this.$loading.show();

        // loading.hide();
    },
}
</script>