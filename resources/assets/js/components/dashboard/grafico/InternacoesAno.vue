<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Internações por ano</h6>
            <select class="form-control col-xl-2" v-model="q">
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
            let series = await this.getSeries();
            this.chart = new ApexCharts(this.$el.querySelector("#chart"), {
                series: [
                    {
                        name: this.q,
                        data: series
                    }
                ],
                colors: ['#faa61c'],
                labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
            });
            this.chart.render();

        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        async getSeries() {
            const { data: { dados } } = await axios.get(`/api/dashboard/internacao_ano?q=${this.q}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            let series = [0,0,0,0,0,0,0,0,0,0,0,0];
            dados.forEach((dado) => {
                series[(dado['mes']-1)] = parseFloat(dado['quantidade']);
            });
            return series;
        },
        async load () {
            let series = await this.getSeries();
            this.chart.updateSeries([{
                name: this.q,
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