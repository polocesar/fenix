<template>
    <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <div class="card shadow mb-4">
                <form @submit.prevent="onSubmit()">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-default">Cadastro de usuário</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="nome">Nome *</label>
                                    <input type="text" v-model="formulario.nome" class="form-control" :class="{'is-invalid': errors.nome}" id="nome" required>
                                    <div class="invalid-feedback" v-show="errors.nome">
                                        {{errors.nome}}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="email">Email *</label>
                                    <input type="email" v-model="formulario.email" class="form-control" :class="{'is-invalid': errors.email}" id="email" required>
                                    <div class="invalid-feedback" v-show="errors.email">
                                        {{errors.email}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="grupo">Grupo *</label>
                                    <select class="form-control" :class="{'is-invalid': errors.grupo}" id="grupo" required v-model="formulario.grupo">
                                        <option :value="null">Selecione</option>
                                        <option value="usuario">Usuário</option>
                                        <option value="gestor">Gestor</option>
                                    </select>
                                    <div class="invalid-feedback" v-show="errors.grupo">
                                        {{errors.grupo}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="password">Senha *</label>
                                    <input type="password" v-model="formulario.password" class="form-control" :class="{'is-invalid': errors.password}" id="password" required>
                                    <div class="invalid-feedback" v-show="errors.password">
                                        {{errors.password}}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="password_confirmation">Confirmar Senha *</label>
                                    <input type="password" v-model="formulario.password_confirmation" class="form-control" :class="{'is-invalid': errors.password_confirmation}" id="password_confirmation" required>
                                    <div class="invalid-feedback" v-show="errors.password_confirmation">
                                        {{errors.password_confirmation}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="col-12">
                            <router-link type="button" :to="{ name: 'usuario.index' }" tag="button" class="btn btn-warning font-weight-bold">
                                Voltar
                            </router-link>
                            <button type="submit" class="btn float-right font-weight-bold btn-success">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/util/axios';

export default {
    name: 'UsuarioCreate',
    mounted () {
    },
    data () {
        return {
            formulario: {
                nome: null,
                email: null,
                grupo: null,
                password: null,
                password_confirmation: null,
            },
            errors: {
                nome: null,
                email: null,
                grupo: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        async onSubmit () {
            const loading = this.$loading.show();
            this.clearErrors();
            try {
                const res = await axios.post('/api/user', this.formulario, {
                    headers: {
                       'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                this.$router.push({ name: 'usuario.index' });
            } catch ({ response }) {
                for(let i in response.data.errors) {
                    let error = response.data.errors[i];
                    if (error.field in this.errors) {
                        this.errors[error.field] = error.message;
                    }
                }
            }
            loading.hide();
        },
        clearErrors() {
            Object.keys(this.errors).forEach(name => {
                this.errors[name] = null;
            });
        }
    }
}
</script>