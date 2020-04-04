<template>
    <div>
        <!-- mini cards -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Indicadores</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de ocupação</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="63"></CounterUp>%</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-procedures fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Permanência média</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="12"></CounterUp> dias</div>
                            </div>
                            <div class="col-auto">
                                <i class="far fa-calendar-alt fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de desocupação</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="37"></CounterUp>%</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-history fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
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
            </div>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Estatísticas</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-success shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Leitos livres</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="34"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-door-open fa-2x text-gray-300 mt-3"></i>
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
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Leitos Ocupados</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="27"></CounterUp></div>
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
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Leitos em manutenção</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="8"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-tools fa-2x text-gray-300 mt-3"></i>
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
                        <h6 class="m-0 font-weight-bold text-orange text-center">Internações mensais</h6>
                    </div>
                    <div class="card-body">
                        <bar-chart></bar-chart>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-header pt-3 pb-2 d-flex flex-row align-items-center justify-content-between" style="background-color: white; border-bottom: none;">
                        <h6 class="m-0 font-weight-bold text-orange text-center">Distribuição dos leitos</h6>
                    </div>
                    <div class="card-body">
                        <pie-chart></pie-chart>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div class="shadow p-3 border-left-orange border-right-orange" style="
                            border-radius: 0.35rem;
                            background-color: #fff;
                            border: 1px solid #e3e6f0;
                        ">
                            <p class="h4 mb-0 text-orange text-center font-weight-bold">Leitos</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4">
                        <div class="card border-left-success shadow h-100">
                            <div class="card-body pt-2">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Livres</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="34"></CounterUp></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-bed fa-2x text-gray-300 mt-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4">
                        <div class="card border-left-danger shadow h-100">
                            <div class="card-body pt-2">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Ocupados</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="27"></CounterUp></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-procedures fa-2x text-gray-300 mt-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4">
                        <div class="card border-left-warning shadow h-100">
                            <div class="card-body pt-2">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Em manutenção</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="8"></CounterUp></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-tools fa-2x text-gray-300 mt-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default {
    components: {
        LineChart,
        BarChart,
        PieChart,
    },
    name: 'Dashboard',
    data () {
        return {
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
    }
}
</script>