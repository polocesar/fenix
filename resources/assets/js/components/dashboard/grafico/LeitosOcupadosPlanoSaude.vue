<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Leitos ocupados por plano de saúde</h6>
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
    async mounted () {
        try {
            const { data: { dados } } = await axios.get('/api/dashboard/leitos_ocupados_plano_saude', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            let chart = new ApexCharts(this.$el.querySelector("#chart"), {
                chart: {
                    type: 'pie',
                    height: '562px',
                },
                colors: ['#faa61c', '#E09419'],
                series: dados.map(({quantidade}) => parseFloat(quantidade)),
                labels: dados.map(({nome_plano}) => nome_plano),
            });
            chart.render();
        } catch (e) {
            console.log(e);
        }
    }
}
</script>
