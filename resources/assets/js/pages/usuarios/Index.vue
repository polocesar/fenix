<template>
    <div>
        <div class="row mb-4">
            <div class="col-6">
                <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
            </div>
            <div class="col-6">
                <router-link :to="{ name: 'usuario.create' }" tag="a" class="d-sm-inline-block btn btn-success shadow-sm font-weight-bold float-right">
                    <i class="fas fa-plus"></i>
                </router-link>
            </div>
        </div>
        <!-- <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
            <router-link :to="{ name: 'usuario.form' }" tag="a" class="d-none d-sm-inline-block btn btn-success shadow-sm font-weight-bold">
                <i class="fas fa-plus"></i>
            </router-link>
            <a href="#" class="d-none d-sm-inline-block btn btn-success shadow-sm"><b><i class="fas fa-plus"></i></b></a>
        </div> -->
        <div class="row">
            <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between" style="
                        background-color: white;
                        border-bottom: none;
                    ">
                        <h6 class="m-0 font-weight-bold text-primary">Usuários</h6>
                    </div> -->
                    <div class="card-body p-0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" width="100">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col" width="200">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in dados" v-bind:key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.nome}}</td>
                                    <td>
                                        <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-eye"></i></button>
                                        <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UsuarioIndex',
    data () {
        return {
            loading: true,
            dados: []
        }
    },
    async mounted () {
        const loading = this.$loading.show();
        try { 
            const { data } = await axios.get('/api/user', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            this.dados = data;
        } catch (e) {
            this.$toast.error('Não foi possível carregar os dados.');
        }
        loading.hide();
    }
}
</script>