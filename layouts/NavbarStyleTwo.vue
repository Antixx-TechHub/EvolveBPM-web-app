<template>
    <div :class="['navbar-area navbar-area-two', { 'is-sticky': isSticky }]">
        <div class="bionix-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/images/logo.png" class="black-logo" alt="logo">
                        <img src="~/assets/images/white-logo.png" class="white-logo" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/" class="nav-link">
                                    Home
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/about-us" class="nav-link">
                                    About Us
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/about-one" class="nav-link">
                                    Services <i class="fas fa-chevron-down"></i>
                                </NuxtLink>
                                <ul class="dropdown-menu">
                                    <li>
                                        <nuxt-link to="/irev" class="nav-link">
                                            <span> <img src="../assets/img/header-icon/keyword.png" alt=""> </span>
                                            iRev
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/iintel" class="nav-link">
                                            <span> <img src="../assets/img/header-icon/audit.png" alt=""> </span>
                                            iIntel
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/imedia" class="nav-link">
                                            <span> <img src="../assets/img/header-icon/building.png" alt=""> </span>
                                            iMedia
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/innovator" class="nav-link">
                                            <span> <img src="../assets/img/header-icon/media.png" alt=""> </span>
                                            Innovator
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/techbase" class="nav-link">
                                            <span> <img src="../assets/img/header-icon/analysis.png" alt=""> </span>
                                            TechBase
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/#" class="nav-link">
                                    Our Products <i class="fas fa-chevron-down"></i>
                                </NuxtLink>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/irev" class="nav-link">iRev</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/idata" class="nav-link">iData</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/imedia" class="nav-link">iMedia</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/#" class="nav-link">
                                    Company <i class="fas fa-chevron-down"></i>
                                </NuxtLink>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/careers" class="nav-link">Careers</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/our-team" class="nav-link">Our Team</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/team-details" class="nav-link">Team Details</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/faqs" class="nav-link">FAQ's</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="/resources" class="nav-link">
                                    Resources<i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/sucess-stories" class="nav-link">Sucess Stories</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/case-studies" class="nav-link">Case Studies</NuxtLink>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/contact-us" class="nav-link">Contact</NuxtLink>
                            </li>
                        </ul>

                        <div class="others-options">
                            <!-- <div class="cart-items">
                                <NuxtLink to="/cart">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>{{cart.length}}</span>
                                </NuxtLink>
                            </div>

                            <div class="option-item">
                                <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                                    <i class="search-btn flaticon-search"></i>
                                </div>
                            </div> -->

                            <div class="search-overlay" v-if="isSearch">
                                <div class="d-table">
                                    <div class="d-table-cell">
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>

                                        <div class="search-overlay-close" v-on:click="isSearchMethod(isSearch)">
                                            <span class="search-overlay-close-line"></span>
                                            <span class="search-overlay-close-line"></span>
                                        </div>

                                        <div class="search-overlay-form">
                                            <form>
                                                <input type="text" class="input-search" placeholder="Search here...">
                                                <button type="submit"><i class="flaticon-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="burger-menu" v-b-modal.modal-1>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <SidebarModal />
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarModal from '../layouts/SidebarModal'
export default {
    name: 'NavbarStyleTwo',
    components: {
        SidebarModal
    },
    data() {
        return {
            isSticky: false,
            isSearch: false
        }
    },

    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },

    methods: {
        isSearchMethod(isSearch) {
            console.log(this.isSearch)
            return this.isSearch = !isSearch
        }
    }
}
</script>