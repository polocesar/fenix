<template>
    <div>
        <!-- mini cards -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Indicadores</h1>
        </div>
        <div class="row">
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de ocupação</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa.ocupacao"></CounterUp>%</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-procedures fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Permanência média</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa.permanencia_media"></CounterUp> dias</div>
                            </div>
                            <div class="col-auto">
                                <i class="far fa-calendar-alt fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de desocupação</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa.desocupacao"></CounterUp>%</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-history fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de mortalidade</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="5"></CounterUp>%</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-skull-crossbones fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Leitos</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-success shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Livres</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="leitos.livres"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-door-open fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Ocupados</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="leitos.ocupados"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-procedures fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-warning shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Em manutenção</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="leitos.manutencao"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-tools fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-danger shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Interditados</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="leitos.interditados"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-ban fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
                        <h6 class="m-0 font-weight-bold text-orange text-center">Leitos ocupados por plano</h6>
                    </div>
                    <div class="card-body">
                        <pie-chart :data="graficoLeitosPorConvenio" :config="options" v-if="mostrar"></pie-chart>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
                        <h6 class="m-0 font-weight-bold text-orange text-center">Internações mensais</h6>
                    </div>
                    <div class="card-body">
                        <pie-chart :data="graficoDustribuicaoDeCids" :config="options" v-if="mostrarCids"></pie-chart>
                    </div>
                </div>
            </div> -->
        </div>
    </div>    
</template>

<script>
import LineChart from '@/components/charts/LineChart.js'
import BarChart from '@/components/charts/BarChart.js'
import PieChart from '@/components/charts/PieChart.js'
import axios from '@/util/axios'

export default {
    components: {
        LineChart,
        BarChart,
        PieChart,
    },
    name: 'Dashboard',
    async mounted () {
        const loading = this.$loading.show();
        try {
            const { data: {
                leitos,
                cids
            } } = await axios.get('/api/dashboard', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            this.leitos.livres = parseFloat(leitos.livres);
            this.leitos.ocupados = parseFloat(leitos.ocupados);
            this.leitos.manutencao = parseFloat(leitos.manutencao);
            this.leitos.interditados = parseFloat(leitos.interditados);
            this.taxa.permanencia_media = Math.ceil(parseFloat(leitos.permanencia_media));

            this.taxa.ocupacao = Math.ceil((this.leitos.ocupados/leitos.total)*100);
            this.taxa.desocupacao = Math.ceil((this.leitos.livres/leitos.total)*100);

            this.leitos.por_convenio = leitos.por_convenio;
            this.cids = leitos.por_convenio;

        } catch (e) {

        }
        loading.hide();
    },
    data () {
        return {
            taxa: {
                ocupacao: 0,
                permanencia_media: 0,
                desocupacao: 0,
            },
            leitos: {
                por_convenio: [],
                livres: 0,
                ocupados: 0,
                manutencao: 0,
                interditados: 0,
            },
            mostrar: false,
            graficoLeitosPorConvenio: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: ['#1cc88a', '#e74a3b'],
                        data: []
                    }
                ]
            },
            mostrarCids: true,
            cids: [],
            graficoDustribuicaoDeCids: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: ['#1cc88a', '#e74a3b'],
                        data: []
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            },
            datacollection: {
                labels: [Math.floor(Math.random() * (50 - 5 + 1)) + 5, Math.floor(Math.random() * (50 - 5 + 1)) + 5],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#faa61c',
                        data: [Math.floor(Math.random() * (50 - 5 + 1)) + 5, Math.floor(Math.random() * (50 - 5 + 1)) + 5]
                    }, 
                    {
                        label: 'Data One',
                        backgroundColor: '#E09419',
                        data: [Math.floor(Math.random() * (50 - 5 + 1)) + 5, Math.floor(Math.random() * (50 - 5 + 1)) + 5]
                    }
                ]
            }
        }
    },

    watch: {
        'leitos.por_convenio': function () {
            this.graficoLeitosPorConvenio.labels = this.leitos.por_convenio.map((row) => {
                return row.nome_plano;
            });

            this.graficoLeitosPorConvenio.datasets[0].data = this.leitos.por_convenio.map((row) => {
                return row.quantidade;
            });

            this.mostrar = true;
        },
        'cids': function () {
            console.log(this.cids);
            this.graficoDustribuicaoDeCids.labels = this.cids.map((cid) => {
                return cid.nome_cid;
            });

            this.graficoDustribuicaoDeCids.datasets[0].data = this.cids.map((cid) => {
                return cid.quantidade;
            });

            this.mostrarCids = true;
        }
    }
}
</script>