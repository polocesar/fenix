<template>
    <div class="card shadow mb-4">
        <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
            <h6 class="m-0 font-weight-bold text-orange text-center">Enfermidades mais recorrentes</h6>
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
            const { data: { dados } } = await axios.get('/api/dashboard/enfermidades_recorrentes', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            const chart = new ApexCharts(this.$el.querySelector("#chart"), {
                series: [{
                    data: dados.map((cid) => parseFloat(cid.quantidade))
                }],
                chart: {
                    type: 'bar',
                    height: '597px',
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
                    categories: dados.map((cid) => cid.nome_cid),
                },
                yaxis: {
                    labels: {
                        show: false
                    }
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