<template>
  <div class="card border-left-orange shadow h-100">
        <div class="card-body pt-2 bg-orange">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-white text-uppercase mb-1">Taxa de ocupação</div>
                    <div class="h5 mb-0 font-weight-bold text-white mt-2"><CounterUp :value="taxa"></CounterUp>%</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-procedures fa-2x text-white mt-3"></i>
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
            taxa: 0
        }
    },
    async mounted () {
        try {
            const { data: { dados } } = await axios.get('/api/dashboard/taxa_ocupacao', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            this.taxa = parseFloat(dados) || 0;
        } catch (e) {

        }
    }
}
</script>

<style>

</style>