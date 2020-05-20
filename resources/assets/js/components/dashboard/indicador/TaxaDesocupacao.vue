<template>
    <div class="card border-left-orange shadow h-100">
        <div class="card-body pt-2">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-orange text-uppercase mb-1">Taxa de desocupação</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa"></CounterUp>%</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-history fa-2x text-gray-300 mt-3"></i>
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
            const { data: { dados } } = await axios.get('/api/dashboard/taxa_desocupacao', {
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