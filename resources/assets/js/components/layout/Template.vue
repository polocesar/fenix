<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 fixed-top shadow">
            <router-link to="/" tag="a" class="navbar-brand">
                <img src="/images/laura.png" height="40" alt="Logo Laura">
            </router-link>
            <div class="collapse navbar-collapse ml-4" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <router-link to="/dashboard" tag="li" class="nav-item">
                        <a class="nav-link">Dashboard</a>
                    </router-link>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Usuários</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> -->
                </ul>
            </div>
            <a class="btn btn-outline-default ml-auto" href="#" title="sair"><i class="fas fa-sign-out-alt fa-2x"></i></a>
        </nav>
        <div class="container-fluid">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright © Fábrica Polo 2020</span>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'Template'
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>