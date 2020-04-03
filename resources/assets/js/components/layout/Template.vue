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
                    <router-link to="/usuario" tag="li" class="nav-item">
                        <a class="nav-link">Usuários</a>
                    </router-link>
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
            <!-- <a class="btn btn-outline-default ml-auto" href="javascript:void(0)" @click="logout()" title="sair"><i class="fas fa-sign-out-alt fa-2x"></i></a> -->
            <ul class="navbar-nav ml-auto">
                <div class="topbar-divider d-none d-sm-block"></div>
                <li class="nav-item dropdown no-arrow" v-click-outside="hide" @keydown.esc="hide()">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" @click="toggle()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <!-- <span class="mr-2 d-none d-lg-inline text-gray-600 small">Usuário</span> -->
                        <img class="img-profile rounded-circle" src="/images/user_2.png">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" :class="{'show': show }" aria-labelledby="userDropdown">
                        <!-- <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item item-active-orange" href="javascript:void(0)" @click="logout()" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Sair
                        </a>
                    </div>
                </li>
            </ul>     
        </nav>
        <div class="container-fluid">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright © <a href="https://www.laura-br.com/" target="_blank">Laura</a> - Developed by <a href="http://fabricas.cesar.edu.br/polo/" target="_blank">Lauros</a> 2020</span>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'Template',
    directives: {
        ClickOutside
    },
    data () {
        return {
            show: false,
        }
    },
    methods: {
        toggle () {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
            }
        },
        hide () {
            this.show=false;
        },
        logout () {
            localStorage.clear();
            this.$router.push('login');
        }
    }
}
</script>

<style scoped>
    .item-active-orange:active > i,
    .item-active-orange:active {
        color: white !important;
    }
    .item-active-orange:active {
        background-color: #faa61c;
    }
</style>