<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-primary shadow-sm"><b><i class="fas fa-plus"></i></b></a>
        </div>
        <div class="row">
            <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between" style="
                        background-color: white;
                        border-bottom: none;
                    ">
                        <h6 class="m-0 font-weight-bold text-primary">Usuários</h6>
                    </div>
                    <div class="card-body p-0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col" width="200">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>José Barbosa</td>
                                    <td>
                                        <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-eye"></i></button>
                                        <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ricardo Silva</td>
                                    <td>
                                        <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-eye"></i></button>
                                        <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Davi Rodrigues</td>
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
export default {
    name: 'UsuarioIndex'
}
</script>