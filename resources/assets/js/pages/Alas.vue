<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Indicadores</h1>
            <select class="form-control col-xl-4 col-lg-6 col-md-12 col-sm-12" v-model="q">
                <option v-for="(row, i) in alas" :value="row.ala" v-bind:key="i">{{row.ala}}</option>
            </select>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-orange shadow h-100">
                    <div class="card-body pt-2">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">
                                    Taxa de ocupação
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa.ocupacao"></CounterUp>%</div>
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
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">
                                    Permanência média
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="10"></CounterUp> dias</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar-alt fa-2x text-gray-300 mt-3"></i>
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
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">
                                    Taxa de desocupação
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa.desocupacao"></CounterUp>%</div>
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
                                <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">
                                    Altas atrasadas
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="altas_atrasadas"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar-times fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Leitos</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
                <div class="card border-left-success shadow h-100">
                    <div class="card-body pt-2" style="">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Livres</div> 
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="livres"></CounterUp></div>
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
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="ocupados"></CounterUp></div>
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
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="manutencao"></CounterUp></div>
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
                                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="interditado"></CounterUp></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-ban fa-2x text-gray-300 mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/util/axios'

export default {
    data () {
        return {
            q: null,
            alas: [],
            taxa: {
                ocupacao: 0,
                desocupacao: 0
            },
            livres: 0,
            ocupados: 0,
            manutencao: 0,
            interditado: 0,
            altas_atrasadas: 0
        }
    },

    async mounted() {
        await this.load();
    },
    watch: {
        'q': function () {
            this.load(this.q);
        }
    },
    methods: {
        async load(q) {
            const loading = this.$loading.show();

            try {
                const { data: {
                    alas,
                    total,
                    livres,
                    ocupados,
                    manutencao,
                    interditado,
                    altas_atrasadas
                } } = await axios.get(`/api/alas${q ? '?q='+q : ''}`, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                this.livres = parseFloat(livres);
                this.ocupados = parseFloat(ocupados);
                this.manutencao = parseFloat(manutencao);
                this.interditado = parseFloat(interditado);
                this.altas_atrasadas = parseFloat(altas_atrasadas);
                this.taxa.ocupacao = Math.ceil((this.ocupados/parseFloat(total))*100)
                this.taxa.desocupacao = Math.ceil((this.livres/parseFloat(total))*100)
                this.alas = alas;
                if (!this.q) {
                    this.q = alas[0].ala;
                }
            } catch (e) {
                console.log(e);
            }
            loading.hide();
        }
    }
}
</script>