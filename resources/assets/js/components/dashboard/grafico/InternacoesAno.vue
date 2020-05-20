<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Internações no ano</h6>
            <select class="form-control col-xl-2">
                <option value="2020">2020</option>
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
    async mounted () {
        try {
            // const { data: { dados } } = await axios.get('/api/dashboard/enfermidades_recorrentes', {
            //     headers: {
            //         'Authorization': 'Bearer ' + localStorage.getItem('token')
            //     }
            // });
            let chart = new ApexCharts(this.$el.querySelector("#chart"), {
                series: [
                    {
                        name: '2020',
                        data: [2,6,115,50,0,0,0,0,0,0,0,0]
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
            chart.render();

        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style>

</style>