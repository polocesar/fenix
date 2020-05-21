<template>
    <div class="card border-left-success shadow h-100">
        <div class="card-body pt-2 pb-2 justify-content-center align-items-center" :class="{'d-flex': loading}" v-show="loading">
            <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="32" height="32" stroke="#faa61c"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(337.126 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
        </div>
        <div class="card-body pt-2" v-show="!loading">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Livres</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800 mt-2"><CounterUp :value="taxa"></CounterUp></div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-door-open fa-2x text-gray-300 mt-3"></i>
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
            loading: true,
            taxa: 0
        }
    },
    async mounted () {
        try {
            const { data: { dados } } = await axios.get('/api/dashboard/leitos_livres', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            this.taxa = parseFloat(dados) || 0;
            this.loading = false;
        } catch (e) {

        }
    }
}
</script>

<style>

</style>