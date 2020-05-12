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
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Altas atrasadas</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="pacientes_alta_atrasada"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="far fa-calendar-times fa-2x text-gray-300 mt-3"></i>
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
                        <h6 class="m-0 font-weight-bold text-orange text-center">Leitos ocupados por plano de saúde</h6>
                    </div>
                    <div class="card-body">
                        <div id="opps-chart"></div>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
                        <h6 class="m-0 font-weight-bold text-orange text-center">Enfermidades mais recorrentes</h6>
                    </div>
                    <div class="card-body p-0 mr-4">
                        <div id="cids-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import LineChart from '@/components/charts/LineChart.js'
import BarChart from '@/components/charts/BarChart.js'
import PieChart from '@/components/charts/PieChart.js'
import axios from '@/util/axios'
import ApexCharts from 'apexcharts'
//https://yugasun.github.io/x-chart/?ref=madewithvuejs.com#/
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
                cids,
                pacientes_alta_atrasada
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
            this.cids = cids;
            this.pacientes_alta_atrasada = parseFloat(pacientes_alta_atrasada);

        } catch (e) {

        }

        loading.hide();
    },
    data () {
        return {
            pacientes_alta_atrasada: 0,
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
            cids: [],
            grafico: {
                convenio: {
                    chart: {
                        type: 'pie'
                    },
                    colors: ['#4e73df', '#4e73df'],
                    series: [],
                    labels: []
                }
            },
        }
    },

    watch: {
        'leitos.por_convenio': function () {
            this.grafico.convenio.labels = this.leitos.por_convenio.map((row) => {
                return row.nome_plano;
            });

            this.grafico.convenio.series = this.leitos.por_convenio.map((row) => {
                return parseFloat(row.quantidade);
            });
            let chart = new ApexCharts(document.querySelector("#opps-chart"), {
                chart: {
                    type: 'pie'
                },
                colors: ['#faa61c', '#E09419'],
                series: this.leitos.por_convenio.map(({quantidade}) => parseFloat(quantidade)),
                labels: this.leitos.por_convenio.map(({nome_plano}) => nome_plano),
            });
            chart.render();
        },
        'cids': function() {
            const chart = new ApexCharts(document.querySelector("#cids-chart"), {
                series: [{
                    data: this.cids.map((cid) => parseFloat(cid.quantidade))
                }],
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false
                },
                colors: ['#faa61c', '#E09419'],
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                stroke: {
                width: 1,
                    colors: ['#fff']
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#f3f3f3']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] //+ ":  " + val
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return ''
                            }
                        }
                    }
                },
                xaxis: {
                    categories: this.cids.map((cid) => cid.nome_cid),
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
            });
            chart.render();
        }
    }
}
</script>