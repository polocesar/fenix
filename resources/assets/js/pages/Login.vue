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
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user is-invalid" id="email" placeholder="E-mail">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user" id="password" placeholder="Senha">
                                        </div>
                                        <small id="error" class="form-text ml-1 mb-2 -mt-3 text-danger">Email ou senha incorreto.</small>
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
export default {
    name: 'Login',
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
.-mt-3 {
    margin-top: -1rem;
}
</style>