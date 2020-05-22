<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Internações por especialidades</h6>
        </div>
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center" style="background-color: white; border-bottom: none;">
            <select class="form-control col-xl-3 col-lg-3 col-md-6 col-sm-12" v-model="q">
                <option value="2020" selected>2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
        <div class="card-body p-0 mr-4">
            <div id="chart"></div>
        </div>
    </div>
</template>

<script>
import axios from '@/util/axios'
import ApexCharts from 'apexcharts'

export default {
    data () {
        return {
            q: '2020',
            chart: null,
        }
    },
    async mounted () {
        try {
            let {series, labels} = await this.getDados();
            this.chart = new ApexCharts(this.$el.querySelector("#chart"), {
                series: [{
                    data: series
                }],
                chart: {
                    type: 'bar',
                    height: '535px',
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
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
                    categories: labels,
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
            });
            this.chart.render();
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        async getDados() {
            const { data: { dados } } = await axios.get(`/api/dashboard/especialidades_ano?q=${this.q}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            return {
                series: dados.map((dado) => parseFloat(dado.count)),
                labels: dados.map((dado) => dado.especialidade),
            }
        },
        async load () {
            let { series } = await this.getDados();
            this.chart.updateSeries([{
                data: series
            }])
        }
    },
    watch: {
        'q': async function () {
            await this.load();
        }
    }
}
</script>

<style>

</style>