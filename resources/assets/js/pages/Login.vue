<template>
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <img src="/images/laura.png" class="mb-4">
                                    </div>
                                    <form class="user" @submit.prevent="onSubmit()">
                                        <div class="form-group">
                                            <input type="email" v-model="email" class="form-control form-control-user" v-bind:class="{'is-invalid': error}" id="email" placeholder="E-mail" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model="password" class="form-control form-control-user" v-bind:class="{'is-invalid': error}" id="password" placeholder="Senha" required>
                                        </div>
                                        <small id="error" class="form-text ml-1 mb-3 -mt-2 text-danger" v-show="error">{{error}}</small>
                                        <button type="submit" class="btn btn-orange btn-user btn-block font-weight-bold">Acessar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data () {
        return {
            email: null,
            password: null,
            error: null,
        }
    },
    methods: {
        async onSubmit () {
            this.error = null;
            try {
                const { data: { token } } = await axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                });
                localStorage.setItem('token', token);
                this.$router.push('dashboard');
            } catch ({ response: { data: { message } } }) {
                this.error = message;
            }
        }
    }
}
</script>

<style scoped>
    form.user .form-control-user { 
        border-radius: .4rem;
    }
    form.user .btn-user {
        font-size: 1rem;
        border-radius: .4rem;
    }
    .-mt-2 {
        margin-top: -.5rem;
    }
</style>