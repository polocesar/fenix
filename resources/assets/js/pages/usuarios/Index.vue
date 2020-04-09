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
                                    <th scope="col">E-mail</th>
                                    <th scope="col" width="200">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in dados" v-bind:key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.nome}}</td>
                                    <td>{{user.email}}</td>
                                    <td>
                                        <!-- <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-eye"></i></button> -->
                                        <router-link :to="{ name: 'usuario.update', params: { id: user.id } }" tag="button" class="btn btn-primary btn-sm">
                                            <i class="fas fa-edit"></i>
                                        </router-link>
                                        <button type="button" class="btn btn-danger btn-sm" @click="destroy(user.id)"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                                <tr v-show="dados.length == 0">
                                    <td colspan="3" class="text-center">
                                        Nenhum dado encontrado
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
import axios from '@/util/axios'
import Swal from 'sweetalert2'

export default {
    name: 'UsuarioIndex',
    data () {
        return {
            loading: true,
            dados: []
        }
    },
    async mounted () {
        await this.load();
    },
    methods: {
        async load () {
            const loading = this.$loading.show();
            try { 
                const { data } = await axios.get('/api/user', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                this.dados = data;
            } catch (e) {}
            loading.hide();
        },
        async destroy (id) {
            try {
                Swal.fire({
                    title: 'Você deseja remover este usuário?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: 'var(--success)',
                    cancelButtonColor: 'var(--danger)',
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Não',
                    reverseButtons: true,
                }).then(async (result) => {
                    if (result.value) {
                        const loading = this.$loading.show();
                        await axios.delete(`/api/user/${id}`, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }
                        });
                        let index = null;
                        for(let i in this.dados) {
                            if (this.dados[i].id == id) {
                                index = i;
                            }
                        }
                        this.dados.splice(index,1);
                        loading.hide();
                    }
                })
            } catch(e) {}
        }
    }
}
</script>