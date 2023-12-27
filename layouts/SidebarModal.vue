<template>
    <b-modal id="modal-1">
        <div class="sidebar-modal-inner">
            <div class="sidebar-about-area">
                <NuxtLink class="navbar-brand" to="/">
                    <img src="~/assets/images/logo.png" alt="logo">
                </NuxtLink>
                <!-- <ul class="navbar-nav">
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
                            Services <i class="fas fa-chevron-right"></i>
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
                            Our Products <i class="fas fa-chevron-right"></i>
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
                            Company <i class="fas fa-chevron-right"></i>
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
                            Resources<i class="fas fa-chevron-right"></i>
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
                </ul> -->

                <div class="side-bar gh-70">
                    <div class="menu">
                        <div class="item">
                            <NuxtLink to="/" class="nav-link">
                                Home
                            </NuxtLink>
                        </div>
                        <div class="item">
                            <a class="sub-btn" @click="toggleSubMenu('tablesMenu')">
                                Services<i class="fas fa-angle-right dropdown"
                                    :class="{ 'rotate': isSubMenuVisible('tablesMenu') }"></i>
                            </a>
                            <div class="sub-menu" v-show="isSubMenuVisible('tablesMenu')">
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
                            </div>
                        </div>
                        <div class="item">
                            <NuxtLink to="/about-us" class="nav-link">
                                About Us
                            </NuxtLink>
                        </div>
                        <div class="item">
                            <a class="sub-btn" @click="toggleSubMenu('settingsMenu')">
                                Our Products<i class="fas fa-angle-right dropdown"
                                    :class="{ 'rotate': isSubMenuVisible('settingsMenu') }"></i>
                            </a>
                            <div class="sub-menu" v-show="isSubMenuVisible('settingsMenu')">
                                <li class="nav-item">
                                <NuxtLink to="/irev" class="nav-link">iRev</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/idata" class="nav-link">iData</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/imedia" class="nav-link">iMedia</NuxtLink>
                            </li>
                            </div>
                        </div>
                        <div class="item">
                            <NuxtLink to="/contact-us" class="nav-link">Contact</NuxtLink>
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


            <!-- <div class="sidebar-instagram-feed">
            <h2>Instagram</h2>

            <ul>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-1.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-2.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-3.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-4.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-5.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-6.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-7.jpg" alt="image">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="~/assets/images/instagram/instagram-8.jpg" alt="image">
                    </a>
                </li>
            </ul>
        </div> -->

            <div class="sidebar-contact-area">
                <div class="contact-info">
                    <div class="contact-info-content">
                        <h2>
                            <a href="tel:+916362606905">+91-020-69029999</a>
                            <span>OR</span>
                            <a href="mailto:reachus@pinklemonade.in">corporate@evolvebpm.com</a>
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
