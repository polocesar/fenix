<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Estado dos leitos por ala médica</h6>
        </div>
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center" style="background-color: white; border-bottom: none;">
            <select class="form-control col-xl-6 col-lg-6 col-md-12 col-sm-12" v-model="q">
                <option :value="null">Selecione</option>
                <option :value="ala" v-for="(ala, i) in alas" v-bind:key="i">{{ala}}</option>
            </select>
        </div>
        <div class="card-body">
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
            q: null,
            alas: [],
            chart: null,
        }
    },
    async mounted () {
        try {
            let { leitos: { livres,ocupados,manutencao, interditados }, alas } = await this.getDados();
            this.alas = alas.map(value => value.ala);
            if (this.q == null) {
                this.q = this.alas[0];
            }
            this.chart = new ApexCharts(this.$el.querySelector("#chart"), {
                chart: {
                    height: '500px',
                    type: 'pie'
                },
                colors: ['var(--success)', 'var(--orange)', 'var(--yellow)', 'var(--red)'],
                series: [parseFloat(livres),parseFloat(ocupados),parseFloat(manutencao), parseFloat(interditados)],
                labels: ['Livres', 'Ocupados', 'Em manutenção', 'Interditados'],
            });
            this.chart.render();
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        async getDados(q) {
            const { data: { leitos, alas } } = await axios.get(`/api/dashboard/estado_leitos_ala${q ? '?q='+q : ''}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            return {
                leitos, alas
            }
        },
        async update() {
            let {leitos: { livres, ocupados, manutencao, interditados }} = await this.getDados(this.q);
            this.chart.updateSeries([parseFloat(livres),parseFloat(ocupados),parseFloat(manutencao), parseFloat(interditados)])
        }
    },
    watch: {
        'q': async function () {
           await this.update();
        }
    }
}
</script>

<style>

</style>