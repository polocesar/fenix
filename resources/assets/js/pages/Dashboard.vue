<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <a class="navbar-brand" href="#">
                <img src="/images/laura.png" height="40" alt="Logo Laura">
            </a>
            <a class="btn btn-outline-default ml-auto" href="#" title="sair"><i class="fas fa-sign-out-alt fa-2x"></i></a>
        </nav>
        <div class="container-fluid">
            <!-- mini cards -->
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-orange shadow h-100">
                        <div class="card-body pt-2">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Total de Leitos</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2">112</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-bed fa-2x text-gray-300 mt-3"></i>
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
                                    <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Leitos em uso</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2">73</div>
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
                                    <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Médicos</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2">12</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-user-md fa-2x text-gray-300 mt-3"></i>
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
                                    <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Enfermeiros</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2">35</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-stethoscope fa-2x text-gray-300 mt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            <!-- <line-chart :chart-data="datacollection"></line-chart> -->
                            <bar-chart></bar-chart>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="card shadow border-left-orange mb-4">
                        <div class="card-body">
                            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import LineChart from '../components/charts/LineChart.js'
import BarChart from '../components/charts/BarChart.js'

export default {
    components: {
        LineChart,
        BarChart,
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