<template>
    <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <div class="card shadow mb-4">
                <form>
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-default">{{form == 'create' ? 'Cadsatro' : 'Atualização'}} de usuário</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="nome">Nome *</label>
                                    <input type="text" class="form-control is-invalid" id="nome" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="email">Email *</label>
                                    <input type="email" class="form-control is-invalid" id="email" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="grupo">Grupo *</label>
                                    <select class="form-control" id="grupo" required>
                                        <option value="usuario" selected>Usuário</option>
                                        <option value="gestor">Gestor</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="password">Senha *</label>
                                    <input type="password" class="form-control is-invalid" id="password" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="confirm-password">Confirmar Senha *</label>
                                    <input type="password" class="form-control is-invalid" id="confirm-password" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="col-12">
                            <router-link type="button" :to="{ name: 'usuario.index' }" tag="button" class="btn btn-warning font-weight-bold" :class="[form == 'create' ? 'btn-warning' : 'btn-danger']">
                                {{form == 'create' ? 'Voltar' : 'Cancelar'}}
                            </router-link>
                            <button type="submit" class="btn float-right font-weight-bold" :class="[form == 'create' ? 'btn-success' : 'btn-warning']">{{ form == 'create' ? 'Cadastrar' : 'Atualizar'}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsuarioForm',
    props: {
        form: {
            required: true,
        }
    },
    mounted () {
        console.log(this);
    }
}
</script>