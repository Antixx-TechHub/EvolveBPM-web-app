<template>
    <b-modal id="modal-1">
        <div class="sidebar-modal-inner">
            <div class="sidebar-about-area">
                <NuxtLink class="navbar-brand" to="/">
                    <img src="~/assets/images/logo.png" alt="logo">
                </NuxtLink>

                <div class="side-bar gh-70">
                    <div class="menu">
                        <div id="app">
                            <div class="dropdown">
                                <div class="item">
                                    <NuxtLink to="/">
                                        Home
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div id="app">
                            <div class="dropdown">
                                <div class="item">
                                    <NuxtLink to="/about-us">
                                        About Us
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div id="app">
                            <div class="dropdown">
                                <div class="item">
                                    <NuxtLink to="/">
                                        Services <i class="fas fa-chevron-right"></i>
                                    </NuxtLink>
                                </div>
                                <div class="dropdown-content">
                                    <!-- <a href="#">Option 1</a>
                                    <a href="#">Option 2</a>
                                    <a href="#">Option 3</a> -->
                                    <li>
                                        <nuxt-link to="/irev">
                                            <span> <img src="../assets/img/header-icon/keyword.png" alt=""> </span>
                                            iRev
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/iintel">
                                            <span> <img src="../assets/img/header-icon/audit.png" alt=""> </span>
                                            iIntel
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/imedia">
                                            <span> <img src="../assets/img/header-icon/building.png" alt=""> </span>
                                            iMedia
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/innovator">
                                            <span> <img src="../assets/img/header-icon/media.png" alt=""> </span>
                                            Innovator
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/techbase">
                                            <span> <img src="../assets/img/header-icon/analysis.png" alt=""> </span>
                                            TechBase
                                        </nuxt-link>
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div id="app">
                            <div class="dropdown">
                                <div class="item">
                                    <NuxtLink to="/">
                                        Our Products <i class="fas fa-chevron-right"></i>
                                    </NuxtLink>
                                </div>
                                <div class="dropdown-content">
                                    <li>
                                        <NuxtLink to="/irev">iRev</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/idata">iData</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/imedia">iMedia</NuxtLink>
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div id="app">
                            <div class="dropdown">
                                <div class="item">
                                    <NuxtLink to="/contact-us">Contact US </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="banner-btn solution-video">
                    <NuxtLink to="/contact" class="default-btn-one">
                        Get A Free Trail <i class="fas fa-chevron-right"></i>
                    </NuxtLink>
                </div>

                <div class="title">
                    <!-- <h2>About Us</h2>
                    <p>In a world of ever-increasing automation and artificial intelligence, it can be easy to forget the
                        magic of the human touch. At Pink Lemonade, we believe the combination of advanced technology and
                        human intuition produces truly exceptional marketing campaigns.</p> -->
                </div>
            </div>

            <div class="sidebar-contact-area">
                <div class="contact-info">
                    <div class="contact-info-content">
                        <h2>
                            <a href="tel:+91-020-69029999">+91-020-69029999</a>
                            <span>OR</span>
                            <a href="mailto:corporate@evolvebpm.com">corporate@evolvebpm.com</a>
                        </h2>

                        <ul class="social">
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/EvolveBPM/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/evolve-bpm/" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/evolvebpm" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>

export default {
    name: 'SidebarModal',
    data() {
        return {
            subMenuVisibility: {
                tablesMenu: false,
                settingsMenu: false,
            },
        };
    },
    methods: {
        toggleSubMenu(menu) {
            this.$set(this.subMenuVisibility, menu, !this.subMenuVisibility[menu]);
        },
        isSubMenuVisible(menu) {
            return this.subMenuVisibility[menu];
        },
    },
};
</script>
